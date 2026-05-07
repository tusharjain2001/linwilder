import BookPageLayout from '../../components/book/BookPageLayout';
import FindingTheNarrowPathHero from '../../components/book/heroes/FindingTheNarrowPathHero';
import { createDefaultBookPageProps } from '../../lib/bookPageDefaults';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('finding-the-narrow-path');

export default function FindingTheNarrowPathPage() {
  return <BookPageLayout {...createDefaultBookPageProps(book)} heroSection={<FindingTheNarrowPathHero />} />;
}
