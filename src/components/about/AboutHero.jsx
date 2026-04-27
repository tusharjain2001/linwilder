import heroLandscape from '../../assets/images/hero-landscape.png';
import aboutHeroMobile from '../../assets/images/about-hero-mobile.png';

export default function AboutHero() {
  return (
    <section className="w-full overflow-hidden">
      <img
        src={aboutHeroMobile}
        alt="Lin Wilder landscape"
        className="block w-full h-full object-cover object-center lg:hidden"
      />
      <img
        src={heroLandscape}
        alt="Lin Wilder landscape"
        className="hidden w-full h-full object-cover object-center lg:block"
      />
    </section>
  );
}
