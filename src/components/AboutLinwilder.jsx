import aboutBg from '../assets/images/about-bg.svg';
import authorPhoto from '../assets/images/author-photo.png';
import mobileAboutAuthor from '../assets/images/mobile-about-author.png';

export default function AboutLinwilder() {
  return (
    <>
      <section className="relative z-20 hidden h-[260px] w-full overflow-hidden lg:flex items-center justify-center">
        <img
          src={aboutBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative z-10 flex max-w-[900px] flex-col items-center gap-5 px-8 text-center">
          <h2 className="font-['Sedan_SC'] text-[32px] leading-[34px] text-black">
            ABOUT LINWILDER
          </h2>
          <p className="font-['Questrial'] text-lg leading-6 text-[#334155]">
            An award-winning author with a distinguished portfolio of 10+ published works,
            celebrated for crafting compelling narratives that resonate across audiences.
          </p>
        </div>
      </section>

      <section className="lg:hidden">
        <div className="flex flex-col items-center text-center bg-[#f6efe9] px-5 pt-10 pb-6">
          <h2 className="font-['Sedan_SC'] text-[24px] leading-[1.15] text-black">
            ABOUT LINWILDER
          </h2>
          <p className="mt-4 font-['Questrial'] text-[16px] leading-7 text-[#334155] max-w-[340px]">
            An award-winning author with a distinguished portfolio of 10+ published works,
            celebrated for crafting compelling narratives that resonate across audiences.
          </p>
        </div>

        <div className="w-full bg-[#efd3b1] px-[14px] pb-[14px]">
          <img
            src={mobileAboutAuthor}
            alt="Lin Wilder"
            className="mx-auto block h-auto w-full max-w-[390px]"
          />
        </div>
      </section>
    </>
  );
}
