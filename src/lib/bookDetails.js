import { defaultTestimonials } from './bookPageDefaults';
import { getBookDescription } from './bookDescriptions';

// Books2Read universal buy links, one per title.
const BUY_LINKS = {
  'plausible-liars': 'https://books2read.com/u/mKeW85',
  'the-reluctant-queen': 'https://books2read.com/u/4AVMEq',
  'the-fragrance-shed-by-a-violet': 'https://books2read.com/u/mVJW1p',
  'a-price-for-genius': 'https://books2read.com/u/3RZWyR',
  'finding-the-narrow-path': 'https://books2read.com/u/mlJQzZ',
  'malthus-revisited': 'https://books2read.com/u/3J1WBK',
  'do-you-solemnly-swear': 'https://books2read.com/u/bxd0Gq',
  'my-name-is-saul': 'https://books2read.com/u/49gKnM',
  'i-claudia': 'https://books2read.com/u/bz7Jyj',
};

const AUTHOR_STORE =
  'https://www.amazon.com/stores/Dr.-Lin-Wilder/author/B007L380OM';

// Book trailers, looked up per title. A book shows the trailer button only
// while it has an entry here. Sources are referenced by URL only; nothing is
// requested until the reader opens the trailer popup.
const TRAILERS = {
  'plausible-liars': { type: 'youtube', id: '9EbiIQGYvfw' },
  'the-reluctant-queen': { type: 'youtube', id: 'Pfq2jLSW21A' },
  'my-name-is-saul': { type: 'youtube', id: 'jD-zYfVJUlk' },
  'i-claudia': {
    type: 'file',
    src: 'https://res.cloudinary.com/faa1ovm4/video/upload/v1789199500/I-CLAUDIA-by-Lin-Wilder-Trailer-1.mp4',
  },
  'malthus-revisited': {
    type: 'file',
    src: 'https://res.cloudinary.com/faa1ovm4/video/upload/v1789199588/Malthus-RevisitedThe-Cup-Of-Wrath-A-Lindsey-McCall-Medical-Mystery-By-Lin-Wilder.mp4',
  },
  'the-fragrance-shed-by-a-violet': {
    type: 'file',
    src: 'https://res.cloudinary.com/faa1ovm4/video/upload/v1789199788/violet-releases-fragrance.mp4',
  },
};

export function createBookDetailProps(book) {
  return {
    book,
    description: getBookDescription(book.slug),
    ratingText: `${book.rating}/5`,
    reviews: defaultTestimonials,
    buyUrl: BUY_LINKS[book.slug] ?? AUTHOR_STORE,
    trailer: TRAILERS[book.slug] ?? null,
  };
}
