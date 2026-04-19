const WORDPRESS_SITE_URL = import.meta.env.VITE_WORDPRESS_SITE_URL || 'https://linwilder.com';
const WORDPRESS_CATEGORY = import.meta.env.VITE_WORDPRESS_CATEGORY || '';

const categoriesPromiseCache = new Map();
const categoryIdPromiseCache = new Map();
const postsPagePromiseCache = new Map();

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
  return input
    .replace(/Ã¢â‚¬â„¢/g, "'")
    .replace(/Ã¢â‚¬Å“/g, '"')
    .replace(/Ã¢â‚¬Â/g, '"')
    .replace(/Ã¢â‚¬Â¦/g, '...')
    .replace(/Ã¢â‚¬â€/g, '-')
    .replace(/Ã¢â‚¬â€œ/g, '-')
    .replace(/Ã‚/g, '');
}

function stripHtml(input = '') {
  return repairMojibake(decodeHtmlEntities(input))
    .replace(/<[^>]*>/g, ' ')
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
  return post?._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null;
}

function getAuthor(post) {
  return post?._embedded?.author?.[0]?.name ?? 'Admin';
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
  };
}

async function fetchJson(url, errorMessage) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return response.json();
}

async function fetchCategoryId(siteUrl, categoryName) {
  if (!categoryName || categoryName === 'All') {
    return null;
  }

  if (WORDPRESS_CATEGORY && categoryName === WORDPRESS_CATEGORY) {
    return null;
  }

  const cacheKey = `${siteUrl}|${categoryName}`;

  if (!categoryIdPromiseCache.has(cacheKey)) {
    const url = new URL('/wp-json/wp/v2/categories', siteUrl);
    url.searchParams.set('search', categoryName);
    url.searchParams.set('per_page', '100');
    url.searchParams.set('_fields', 'id,name');

    const promise = fetchJson(
      url,
      'Failed to load WordPress categories. If this app is hosted on a different domain, WordPress CORS may need to be enabled.',
    ).then((categories) => {
      const exactMatch = categories.find(
        (category) => category.name?.toLowerCase() === categoryName.toLowerCase(),
      );

      if (!exactMatch) {
        throw new Error(`WordPress category "${categoryName}" was not found.`);
      }

      return exactMatch.id;
    });

    categoryIdPromiseCache.set(cacheKey, promise);
  }

  return categoryIdPromiseCache.get(cacheKey);
}

export async function loadSundayReflectionCategories() {
  const cacheKey = `${WORDPRESS_SITE_URL}|${WORDPRESS_CATEGORY || 'all'}`;

  if (!categoriesPromiseCache.has(cacheKey)) {
    const url = new URL('/wp-json/wp/v2/categories', WORDPRESS_SITE_URL);
    url.searchParams.set('per_page', '100');
    url.searchParams.set('orderby', 'name');
    url.searchParams.set('order', 'asc');
    url.searchParams.set('_fields', 'id,name,count');

    const promise = fetchJson(
      url,
      'Failed to load WordPress categories. If this app is hosted on a different domain, WordPress CORS may need to be enabled.',
    ).then((categories) => {
      const names = categories
        .filter((category) => category.count > 0)
        .map((category) => category.name)
        .filter(Boolean);

      if (WORDPRESS_CATEGORY) {
        return ['All', WORDPRESS_CATEGORY];
      }

      return ['All', ...names];
    });

    categoriesPromiseCache.set(cacheKey, promise);
  }

  return categoriesPromiseCache.get(cacheKey);
}

export async function loadSundayReflectionsPage({ page = 1, perPage = 6, category = 'All' } = {}) {
  const resolvedCategory = WORDPRESS_CATEGORY || category;
  const categoryId = await fetchCategoryId(WORDPRESS_SITE_URL, resolvedCategory);
  const cacheKey = `${WORDPRESS_SITE_URL}|${resolvedCategory}|${page}|${perPage}`;

  if (!postsPagePromiseCache.has(cacheKey)) {
    const url = new URL('/wp-json/wp/v2/posts', WORDPRESS_SITE_URL);
    url.searchParams.set('per_page', String(perPage));
    url.searchParams.set('page', String(page));
    url.searchParams.set('_embed', '1');

    if (categoryId) {
      url.searchParams.set('categories', String(categoryId));
    }

    const promise = fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(
            'Failed to load WordPress posts directly. If this app is hosted on a different domain, WordPress CORS may need to be enabled.',
          );
        }

        return {
          totalPages: Number(response.headers.get('x-wp-totalpages') ?? '1'),
          totalPosts: Number(response.headers.get('x-wp-total') ?? '0'),
          posts: await response.json(),
        };
      })
      .then((payload) => ({
        ...payload,
        posts: payload.posts.map(normalizePost),
      }));

    postsPagePromiseCache.set(cacheKey, promise);
  }

  return postsPagePromiseCache.get(cacheKey);
}
