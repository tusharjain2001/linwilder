import heroBg from "../assets/new-home/hero-bg.png";
import bookCover from "../assets/new-home/book-cover.png";
import award1 from "../assets/new-home/award-1.png";
import award2 from "../assets/new-home/award-2.png";
import award3 from "../assets/new-home/award-3.png";
import mobileHero from "../assets/mobile/mobile-hero.png";
import mobileAwards from "../assets/mobile/mobile-awards-in-row.png";
import arrowRight from "../assets/new-home/arrow-right.svg";
import redzigzag from "../assets/new-home/redzigzag.svg";

export default function HeroSection() {
  return (
    <>
      <section className="bg-[#592c33] w-full relative z-10">
        <div className="relative px-4 pt-6 sm:px-6 lg:px-20 lg:pt-20">
          <div className="relative lg:hidden">
            <img
              src={mobileHero}
              alt="Lin Wilder in scenic landscape"
              className="relative z-0 w-full rounded-[10px] object-cover"
            />
            <img
              src={mobileAwards}
              alt="Book awards and recognitions"
              className="absolute bottom-0 left-1/2 z-20 w-[92%] max-w-[360px] -translate-x-1/2 translate-y-1/2 object-contain"
            />
          </div>

          <div className="relative hidden overflow-hidden rounded-[10px] lg:block">
            <img
              src={heroBg}
              alt="Lin Wilder in scenic landscape"
              className="h-114.5 w-full object-cover object-center"
            />
            <p className="absolute inset-0 hidden items-center justify-center px-10 text-center font-['Questrial'] text-[32px] leading-8.5 text-[#9d674d] capitalize lg:flex">
              faith, healing, medicine, and&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; personal transformation
            </p>
          </div>
        </div>

        <div className="relative mx-auto flex max-w-[1440px] flex-col px-4 pb-12 pt-26 sm:px-6 sm:pt-30 lg:-mt-16.75 lg:px-37 lg:pb-16 lg:pt-0">
          <div className="flex flex-col items-center gap-8 pt-5 text-center lg:flex-row lg:items-start lg:gap-14.75 lg:pt-0 lg:text-left">
            <div className="order-2 flex max-w-[610px] flex-col items-center gap-8 lg:order-1 lg:flex-1 lg:items-start lg:gap-14">
              <div className="hidden flex-col items-center gap-4 lg:flex lg:items-start lg:gap-3.25">
                <div className="flex items-end justify-center gap-0 sm:gap-1 lg:justify-start lg:gap-5">
                  <img
                    src={award1}
                    alt="Award 1"
                    className="h-35.75 w-35.75 object-contain"
                  />
                  <img
                    src={award2}
                    alt="Award 2"
                    className="-ml-2 h-35.75 w-35.75 object-contain"
                  />
                  <img
                    src={award3}
                    alt="Award 3"
                    className="-ml-2 h-37.25 w-39 object-contain"
                  />
                </div>
                <p className="max-w-[360px] font-['Sedan_SC'] text-[24px] leading-7.5 text-[#f6efe9] lg:max-w-none">
                  An Award-winning
                  <br />
                  Dr. Lindsey McCall medical mystery series.
                </p>
              </div>

              <div className="flex max-w-[620px] flex-col items-center gap-7 lg:max-w-152.5 lg:items-start lg:gap-11">
                <div className="text-[#f6efe9]">
                  <h2 className="font-['Aboreto'] text-[28px] leading-[1.25] sm:text-[38px] lg:text-[52px] lg:leading-18">
                    Plausible Liars.
                  </h2>
                  <p className="mx-auto mt-4 max-w-[360px] text-[17px] leading-7 font-['Questrial'] sm:max-w-[460px] sm:text-[19px] lg:mx-0 lg:mt-0 lg:max-w-none lg:text-[20px] lg:leading-8">
                    In Lin Wilder&apos;s fifth Lindsey McCall mystery, journalist
                    Kate Townsend&apos;s controversial series on gender politics and
                    children leads to a legal battle, drawing Dr. Lindsey McCall
                    into a conspiracy involving transgender issues and medical
                    ethics.
                  </p>
                </div>
                <button className="flex h-auto w-fit items-center gap-2.5 rounded-[5px] bg-white px-4 py-2.5 transition-colors hover:bg-opacity-90 lg:px-5">
                  <span className="font-['Questrial'] text-[12px] font-bold uppercase leading-none text-[#592c33] sm:text-[14px] lg:text-[16px]">
                    Explore More Books
                  </span>
                  <img src={arrowRight} alt="" className="hidden h-6 w-6 rotate-90 lg:block" />
                </button>
              </div>
            </div>

            <div className="order-1 shrink-0 pt-1 shadow-[8px_9px_10px_0px_rgba(0,0,0,0.25)] lg:order-2 lg:pt-0">
              <img
                src={bookCover}
                alt="Plausible Liars book cover"
                className="h-[170px] w-[112px] object-cover sm:h-[230px] sm:w-[150px] lg:h-163.75 lg:w-109.25"
              />
            </div>
          </div>
        </div>
      </section>

      <img
        src={redzigzag}
        alt=""
        aria-hidden="true"
        className="block w-full -mt-6 lg:-mt-18"
      />
    </>
  );
}
