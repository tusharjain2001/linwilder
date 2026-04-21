import AboutHero from '../components/about/AboutHero';
import AboutBio from '../components/about/AboutBio';
import StatsSection from '../components/StatsSection';
import AboutAwards from '../components/about/AboutAwards';
import AboutFreshRead from '../components/about/AboutFreshRead';
import TestimonialsSection from '../components/TestimonialsSection';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutBio />
      <StatsSection className="bg-[#e4e8d7]" />
      <AboutAwards />
      <AboutFreshRead />
      <TestimonialsSection />
    </>
  );
}
