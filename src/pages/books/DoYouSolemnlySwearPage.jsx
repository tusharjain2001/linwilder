import BookDetailLayout from '../../components/book/BookDetailLayout';
import { createBookDetailProps } from '../../lib/bookDetails';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('do-you-solemnly-swear');

export default function DoYouSolemnlySwearPage() {
  return <BookDetailLayout {...createBookDetailProps(book)} />;
}
