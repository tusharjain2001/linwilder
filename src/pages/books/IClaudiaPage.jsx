import BookPageLayout from '../../components/book/BookPageLayout';
import IClaudiaHero from '../../components/book/heroes/IClaudiaHero';
import { createDefaultBookPageProps } from '../../lib/bookPageDefaults';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('i-claudia');

export default function IClaudiaPage() {
  return <BookPageLayout {...createDefaultBookPageProps(book)} heroSection={<IClaudiaHero />} />;
}
