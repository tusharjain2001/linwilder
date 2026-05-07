import BookPageLayout from '../../components/book/BookPageLayout';
import MyNameIsSaulHero from '../../components/book/heroes/MyNameIsSaulHero';
import { createDefaultBookPageProps } from '../../lib/bookPageDefaults';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('my-name-is-saul');

export default function MyNameIsSaulPage() {
  return <BookPageLayout {...createDefaultBookPageProps(book)} heroSection={<MyNameIsSaulHero />} />;
}
