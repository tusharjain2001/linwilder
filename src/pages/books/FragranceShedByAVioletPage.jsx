import BookPageLayout from '../../components/book/BookPageLayout';
import FragranceShedByAVioletHero from '../../components/book/heroes/FragranceShedByAVioletHero';
import { createDefaultBookPageProps } from '../../lib/bookPageDefaults';
import { findBookBySlug } from '../../lib/books';

const book = findBookBySlug('the-fragrance-shed-by-a-violet');

export default function FragranceShedByAVioletPage() {
  return <BookPageLayout {...createDefaultBookPageProps(book)} heroSection={<FragranceShedByAVioletHero />} />;
}
