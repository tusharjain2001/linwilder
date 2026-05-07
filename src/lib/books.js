import bookPlausible from '../assets/images/book-plausible-liars.png';
import bookFragrance from '../assets/images/book-fragrance.png';
import bookNarrowPath from '../assets/images/book-narrow-path.png';
import bookSaul from '../assets/images/book-my-name-is-saul.png';
import bookReluctantQueen from '../assets/images/book-reluctant-queen.png';
import bookPriceGenius from '../assets/images/book-price-for-genius.png';
import bookSolemnlySwear from '../assets/new-home/solemlyswear.png';
import bookMalthus from '../assets/new-home/malthus.png';
import bookClaudia from '../assets/new-home/claudia.png';

const BOOK_TITLES = [
  'The Fragrance Shed by a Violet',
  'Finding The Narrow Path',
  'Do You Solemnly Swear?',
  'Malthus Revisited',
  'A Price for Genius',
  'I, Claudia',
  'My Name Is Saul',
  'The Reluctant Queen',
  'Plausible Liars',
];

const BOOK_RATINGS = ['4.3', '4.7', '4.4', '4.5', '4.6', '4.4', '4.7', '4.8', '4.3'];

const BOOK_COVERS = [
  bookFragrance,
  bookNarrowPath,
  bookSolemnlySwear,
  bookMalthus,
  bookPriceGenius,
  bookClaudia,
  bookSaul,
  bookReluctantQueen,
  bookPlausible,
];

function slugifyBookTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const books = BOOK_TITLES.map((title, index) => {
  const slug = slugifyBookTitle(title);

  return {
    title,
    displayTitle: title.toUpperCase(),
    slug,
    rating: BOOK_RATINGS[index],
    cover: BOOK_COVERS[index],
    path: `/book/${slug}`,
  };
});

export const defaultBook = books[0];

export function findBookBySlug(slug) {
  return books.find((book) => book.slug === slug) ?? null;
}
