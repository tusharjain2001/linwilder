import BookHero from './BookHero';
import MoreBooksGrid from './MoreBooksGrid';
import BookPreview from './BookPreview';
import BookTrailer from './BookTrailer';
import TestimonialsSection from '../TestimonialsSection';

export default function BookPageLayout({
  book,
  heroSection,
  heroDescription,
  ratingText,
  heroImage,
  previewDescription,
  previewImage,
  totalPages,
  trailerImage,
  testimonialsTitle,
  testimonials,
}) {
  return (
    <>
      {heroSection ?? (
        <BookHero
          book={book}
          description={heroDescription}
          ratingText={ratingText}
          heroImage={heroImage}
        />
      )}
      <MoreBooksGrid />
      <BookPreview
        description={previewDescription}
        previewImage={previewImage}
        totalPages={totalPages}
      />
      <BookTrailer trailerImage={trailerImage} />
      <TestimonialsSection title={testimonialsTitle} testimonials={testimonials} />
    </>
  );
}
