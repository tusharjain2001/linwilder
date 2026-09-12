import BookDetailLayout from '../../components/book/BookDetailLayout';
import { createBookDetailProps } from '../../lib/bookDetails';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('plausible-liars');

export default function PlausibleLiarsPage() {
  return <BookDetailLayout {...createBookDetailProps(book)} />;
}
