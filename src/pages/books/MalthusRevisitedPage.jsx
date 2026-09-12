import BookDetailLayout from '../../components/book/BookDetailLayout';
import { createBookDetailProps } from '../../lib/bookDetails';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('malthus-revisited');

export default function MalthusRevisitedPage() {
  return <BookDetailLayout {...createBookDetailProps(book)} />;
}
