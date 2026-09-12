import BookDetailLayout from '../../components/book/BookDetailLayout';
import { createBookDetailProps } from '../../lib/bookDetails';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('i-claudia');

export default function IClaudiaPage() {
  return <BookDetailLayout {...createBookDetailProps(book)} />;
}
