import BookPageLayout from '../../components/book/BookPageLayout';
import TheReluctantQueenHero from '../../components/book/heroes/TheReluctantQueenHero';
import { createDefaultBookPageProps } from '../../lib/bookPageDefaults';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('the-reluctant-queen');

export default function TheReluctantQueenPage() {
  return <BookPageLayout {...createDefaultBookPageProps(book)} heroSection={<TheReluctantQueenHero />} />;
}
