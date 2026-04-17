import aboutBg from '../assets/images/about-bg.svg';

export default function AboutLinwilder() {
  return (
    <section className="relative w-full h-[260px] overflow-hidden flex items-center justify-center z-20">
      {/* Background */}
      <img
        src={aboutBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-5 text-center max-w-[900px] px-8">
        <h2 className="font-['Sedan_SC'] text-black text-[32px] leading-[34px]">
          ABOUT LINWILDER
        </h2>
        <p className="font-['Questrial'] text-[#334155] text-lg leading-6">
          An award-winning author with a distinguished portfolio of 10+ published works,
          celebrated for crafting compelling narratives that resonate across audiences.
        </p>
      </div>
    </section>
  );
}
