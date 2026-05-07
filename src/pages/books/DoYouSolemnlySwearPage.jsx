import BookPageLayout from '../../components/book/BookPageLayout';
import DoYouSolemnlySwearHero from '../../components/book/heroes/DoYouSolemnlySwearHero';
import { createDefaultBookPageProps } from '../../lib/bookPageDefaults';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('do-you-solemnly-swear');

export default function DoYouSolemnlySwearPage() {
  return <BookPageLayout {...createDefaultBookPageProps(book)} heroSection={<DoYouSolemnlySwearHero />} />;
}
