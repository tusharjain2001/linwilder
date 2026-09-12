import BookDetailLayout from '../../components/book/BookDetailLayout';
import { createBookDetailProps } from '../../lib/bookDetails';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('the-fragrance-shed-by-a-violet');

export default function FragranceShedByAVioletPage() {
  return <BookDetailLayout {...createBookDetailProps(book)} />;
}
