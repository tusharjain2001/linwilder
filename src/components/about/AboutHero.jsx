import heroLandscape from '../../assets/images/about/hero-landscape.png';

export default function AboutHero() {
  return (
    <section className="w-full h-[514px] overflow-hidden">
      <img
        src={heroLandscape}
        alt="Lin Wilder landscape"
        className="w-full h-full object-cover object-center"
      />
    </section>
  );
}
