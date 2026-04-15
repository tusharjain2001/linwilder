import BookHero from '../components/book/BookHero';
import MoreBooksGrid from '../components/book/MoreBooksGrid';
import BookPreview from '../components/book/BookPreview';
import BookTrailer from '../components/book/BookTrailer';
import TestimonialsSection from '../components/TestimonialsSection';

export default function BookPage() {
  return (
    <>
      <BookHero />
      <MoreBooksGrid />
      <BookPreview />
      <BookTrailer />
      <TestimonialsSection />
    </>
  );
}
