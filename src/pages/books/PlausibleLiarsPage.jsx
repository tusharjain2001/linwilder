import BookPageLayout from '../../components/book/BookPageLayout';
import PlausibleLiarsHero from '../../components/book/heroes/PlausibleLiarsHero';
import { createDefaultBookPageProps } from '../../lib/bookPageDefaults';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('plausible-liars');

export default function PlausibleLiarsPage() {
  return <BookPageLayout {...createDefaultBookPageProps(book)} heroSection={<PlausibleLiarsHero />} />;
}
