import BookHero from '../BookHero';
import { findBookBySlug } from '../../../lib/books';

const book = findBookBySlug('the-fragrance-shed-by-a-violet');

export default function FragranceShedByAVioletHero() {
  return <BookHero book={book} />;
}
