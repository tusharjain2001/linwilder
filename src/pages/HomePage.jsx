import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import FeaturedBooks from '../components/FeaturedBooks';
import ReviewSection from '../components/ReviewSection';
import VideoSection from '../components/VideoSection';
import AwardsBanner from '../components/AwardsBanner';
import AboutLinwilder from '../components/AboutLinwilder';
import AuthorSection from '../components/AuthorSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedBooks />
      <ReviewSection />
      <VideoSection />
      <AwardsBanner />
      <AboutLinwilder />
      <AuthorSection />
      <TestimonialsSection />
    </>
  );
}
