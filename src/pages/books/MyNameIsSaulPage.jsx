import BookDetailLayout from '../../components/book/BookDetailLayout';
import { createBookDetailProps } from '../../lib/bookDetails';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('my-name-is-saul');

export default function MyNameIsSaulPage() {
  return <BookDetailLayout {...createBookDetailProps(book)} />;
}
