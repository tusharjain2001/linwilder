import bookCover from '../assets/images/book-plausible-liars.png';

export default function AwardsBanner() {
  return (
    <section className="relative z-30 overflow-visible bg-[#592c33] px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 lg:pr-[260px]">
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

        <div className="hidden h-[53px] w-px flex-shrink-0 bg-white opacity-40 lg:block" />

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
