import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_SITE_URL = 'https://linwilder.com';
const DEFAULT_OUTPUT = 'public/data/sunday-reflections.json';
const POSTS_PER_PAGE = 100;

function parseArgs(argv) {
  const options = {
    siteUrl: DEFAULT_SITE_URL,
    output: DEFAULT_OUTPUT,
    category: '',
  };

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];

    if (value === '--site-url') {
      options.siteUrl = argv[index + 1];
      index += 1;
    } else if (value === '--output') {
      options.output = argv[index + 1];
      index += 1;
    } else if (value === '--category') {
      options.category = argv[index + 1];
      index += 1;
    }
  }

  return options;
}

function decodeHtmlEntities(input = '') {
  return input
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&hellip;/g, '...')
    .replace(/&nbsp;/g, ' ');
}

function repairMojibake(input = '') {
  const repaired = /[ÃÂâ]/.test(input)
    ? Buffer.from(input, 'latin1').toString('utf8')
    : input;

  return repaired
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â€¦/g, '...')
    .replace(/â€”/g, '-')
    .replace(/â€“/g, '-')
    .replace(/Â/g, '');
}

function stripHtml(input = '') {
  return repairMojibake(decodeHtmlEntities(input))
    .replace(/<[^>]*>/g, ' ')
    .replace(/\[\.\.\.\]$/g, '')
    .replace(/\[\s*\.\.\.\s*\]/g, '...')
    .replace(/\s+/g, ' ')
    .trim();
}

function getEmbeddedTerms(post) {
  return post?._embedded?.['wp:term']?.flatMap((group) => group ?? []) ?? [];
}

function getCategories(post) {
  return getEmbeddedTerms(post)
    .filter((term) => term?.taxonomy === 'category')
    .map((term) => term.name)
    .filter(Boolean);
}

function getFeaturedImage(post) {
  const media = post?._embedded?.['wp:featuredmedia']?.[0];
  return media?.source_url ?? null;
}

function getAuthor(post) {
  const author = post?._embedded?.author?.[0];
  return author?.name ?? 'Admin';
}

function formatDate(dateValue) {
  if (!dateValue) {
    return '';
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateValue));
}

function normalizePost(post) {
  const publishedAt = post.date_gmt ? `${post.date_gmt}Z` : post.date;
  const categories = getCategories(post);

  return {
    id: post.id,
    slug: post.slug,
    title: stripHtml(post.title?.rendered ?? ''),
    excerpt: stripHtml(post.excerpt?.rendered ?? ''),
    author: getAuthor(post),
    dateIso: publishedAt,
    dateDisplay: formatDate(publishedAt),
    url: post.link,
    category: categories[0] ?? 'Uncategorized',
    categories,
    featuredImage: getFeaturedImage(post),
    contentHtml: post.content?.rendered ?? '',
  };
}

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${url}`);
  }

  return response.json();
}

async function fetchCategoryId(siteUrl, categoryName) {
  const url = new URL('/wp-json/wp/v2/categories', siteUrl);
  url.searchParams.set('search', categoryName);
  url.searchParams.set('per_page', '100');

  const categories = await fetchJson(url);
  const exactMatch = categories.find(
    (category) => category.name?.toLowerCase() === categoryName.toLowerCase(),
  );

  return exactMatch?.id ?? null;
}

async function fetchPosts(siteUrl, categoryName) {
  const categoryId = categoryName ? await fetchCategoryId(siteUrl, categoryName) : null;

  if (categoryName && !categoryId) {
    throw new Error(`Category "${categoryName}" was not found on ${siteUrl}`);
  }

  const posts = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const url = new URL('/wp-json/wp/v2/posts', siteUrl);
    url.searchParams.set('per_page', String(POSTS_PER_PAGE));
    url.searchParams.set('page', String(page));
    url.searchParams.set('_embed', '1');

    if (categoryId) {
      url.searchParams.set('categories', String(categoryId));
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed (${response.status}) for ${url}`);
    }

    totalPages = Number(response.headers.get('x-wp-totalpages') ?? '1');
    const pageItems = await response.json();
    posts.push(...pageItems);
    page += 1;
  }

  return posts;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const posts = await fetchPosts(options.siteUrl, options.category);
  const normalizedPosts = posts
    .map(normalizePost)
    .sort((left, right) => new Date(right.dateIso) - new Date(left.dateIso));

  const outputPath = path.resolve(process.cwd(), options.output);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(
    outputPath,
    JSON.stringify(
      {
        source: `${options.siteUrl}/wp-json/wp/v2/posts`,
        generatedAt: new Date().toISOString(),
        totalPosts: normalizedPosts.length,
        posts: normalizedPosts,
      },
      null,
      2,
    ),
    'utf8',
  );

  console.log(`Imported ${normalizedPosts.length} posts to ${outputPath}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
