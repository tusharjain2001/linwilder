import { useState } from 'react';
import bookCover from '../assets/images/book-plausible-liars.png';
import leftGoldenArrow from '../assets/images/left-golden-arrow.png';
import rightGoldenArrow from '../assets/images/right-golden-arrow.png';

const mobileAwardSlides = [
  {
    heading: (
      <>
        CELEBRATING EXCELLENCE <span className="text-[#efd3b1]">"PLAUSIBLE LIARS"</span>
      </>
    ),
    body: 'Honored as a Book Excellence Award Finalist in the Medical category. Selected from thousands of entries worldwide.',
  },
  {
    heading: (
      <>
        CELEBRATING <span className="text-[#efd3b1]">LINWILDER</span>
      </>
    ),
    body: "New Award reader's FAVOURITE Best Books of 2024 for Mystery-Legal Fiction",
  },
];

export default function AwardsBanner() {
  const [mobileSlideIndex, setMobileSlideIndex] = useState(0);
  const showPreviousSlide = () =>
    setMobileSlideIndex((index) => (index === 0 ? mobileAwardSlides.length - 1 : index - 1));
  const showNextSlide = () =>
    setMobileSlideIndex((index) => (index === mobileAwardSlides.length - 1 ? 0 : index + 1));

  return (
    <section className="relative z-30 overflow-visible bg-[#592c33] px-2 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div className=" flex max-w-[1200px] items-center justify-between gap-3 lg:hidden">
        <button
          type="button"
          onClick={showPreviousSlide}
          aria-label="Show previous award"
          className="flex h-7 w-7 shrink-0 items-center justify-center transition-opacity hover:opacity-80"
        >
          <img src={leftGoldenArrow} alt="" className="h-5 w-5 object-contain" />
        </button>

        <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
          <div className="flex max-w-[235px] flex-1 flex-col gap-2">
            <p className="font-['Sedan_SC'] text-[16px] leading-[21px] text-white">
              {mobileAwardSlides[mobileSlideIndex].heading}
            </p>
            <p className="font-['Questrial'] text-[12px] leading-[17px] tracking-wide text-white">
              {mobileAwardSlides[mobileSlideIndex].body}
            </p>
          </div>

          <div className="flex shrink-0 items-center justify-center">
            <div className="h-[136px] w-[91px] shadow-[8px_9px_10px_0px_rgba(0,0,0,0.25)]">
              <img
                src={bookCover}
                alt="Plausible Liars"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={showNextSlide}
          aria-label="Show next award"
          className="flex h-9 w-9 shrink-0 items-center justify-center transition-opacity hover:opacity-80"
        >
          <img src={rightGoldenArrow} alt="" className="h-5 w-5 object-contain" />
        </button>
      </div>

      <div className="mx-auto hidden max-w-[1200px] items-center justify-between gap-6 lg:flex lg:pr-[260px]">
        <div className="flex max-w-[235px] flex-col gap-2 lg:w-[478px] lg:max-w-none lg:gap-1">
          <p className="font-['Sedan_SC'] text-[16px] leading-[21px] text-white lg:text-lg lg:leading-8">
            CELEBRATING EXCELLENCE{' '}
            <span className="text-[#efd3b1]">"PLAUSIBLE LIARS"</span>
          </p>
          <p className="font-['Questrial'] text-[12px] leading-[17px] text-white lg:text-lg lg:leading-[21px]">
            Honored as a Book Excellence Award Finalist in the Medical category.
            Selected from thousands of entries worldwide.
          </p>
        </div>

        <div className="hidden h-[53px] w-[2px] flex-shrink-0 bg-white lg:block" />

        <div className="hidden w-[347px] flex-col gap-1 lg:flex">
          <p className="font-['Sedan_SC'] text-lg leading-8 text-white">
            CELEBRATING <span className="text-[#efd3b1]">LINWILDER</span>
          </p>
          <p className="font-['Questrial'] text-lg leading-[21px] text-white">
            New Award reader's FAVOURITE Best Books of 2024 for Mystery-Legal Fiction
          </p>
        </div>

        <div className="flex shrink-0 items-center justify-center lg:absolute lg:right-4 lg:top-[-54px] lg:h-[255px] lg:w-[203px] md:lg:right-[110px]">
          <div className="h-[136px] w-[91px] shadow-[8px_9px_10px_0px_rgba(0,0,0,0.25)] lg:h-[224px] lg:w-[149px] lg:rotate-[15.25deg]">
            <img
              src={bookCover}
              alt="Plausible Liars"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
