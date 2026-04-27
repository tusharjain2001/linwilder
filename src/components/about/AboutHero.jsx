import heroLandscape from '../../assets/images/hero-landscape.png';

export default function AboutHero() {
  return (
    <section className="w-full overflow-hidden">
      <img
        src={heroLandscape}
        alt="Lin Wilder landscape"
        className="w-full h-full object-cover object-center"
      />
    </section>
  );
}
