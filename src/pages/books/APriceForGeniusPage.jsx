import BookDetailLayout from '../../components/book/BookDetailLayout';
import { createBookDetailProps } from '../../lib/bookDetails';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('a-price-for-genius');

export default function APriceForGeniusPage() {
  return <BookDetailLayout {...createBookDetailProps(book)} />;
}
