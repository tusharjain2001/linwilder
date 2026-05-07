import BookPageLayout from '../../components/book/BookPageLayout';
import APriceForGeniusHero from '../../components/book/heroes/APriceForGeniusHero';
import { createDefaultBookPageProps } from '../../lib/bookPageDefaults';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('a-price-for-genius');

export default function APriceForGeniusPage() {
  return <BookPageLayout {...createDefaultBookPageProps(book)} heroSection={<APriceForGeniusHero />} />;
}
