import BookDetailLayout from '../../components/book/BookDetailLayout';
import { createBookDetailProps } from '../../lib/bookDetails';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('finding-the-narrow-path');

export default function FindingTheNarrowPathPage() {
  return <BookDetailLayout {...createBookDetailProps(book)} />;
}
