import BookPageLayout from '../../components/book/BookPageLayout';
import MalthusRevisitedHero from '../../components/book/heroes/MalthusRevisitedHero';
import { createDefaultBookPageProps } from '../../lib/bookPageDefaults';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('malthus-revisited');

export default function MalthusRevisitedPage() {
  return <BookPageLayout {...createDefaultBookPageProps(book)} heroSection={<MalthusRevisitedHero />} />;
}
