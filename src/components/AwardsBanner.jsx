import bookCover from '../assets/images/book-plausible-liars.png';

export default function AwardsBanner() {
  return (
    <section className="bg-[#592c33] py-10 px-10 relative overflow-visible z-30">
      <div className="max-w-[1200px] mx-auto flex items-center gap-16 lg:pr-[260px]">
        {/* Award 1 */}
        <div className="flex flex-col gap-1 w-[478px]">
          <p className="font-['Sedan_SC'] text-white text-lg leading-8">
            CELEBRATING EXCELLENCE{' '}
            <span className="text-[#efd3b1]">"PLAUSIBLE LIARS"</span>
          </p>
          <p className="font-['Questrial'] text-white text-lg leading-[21px]">
            Honored as a Book Excellence Award Finalist in the Medical category.
            Selected from thousands of entries worldwide.
          </p>
        </div>

        {/* Vertical divider */}
        <div className="flex-shrink-0 h-[53px] w-px bg-white opacity-40" />

        {/* Award 2 */}
        <div className="flex flex-col gap-1 w-[347px]">
          <p className="font-['Sedan_SC'] text-white text-lg leading-8">
            CELEBRATING <span className="text-[#efd3b1]">LINWILDER</span>
          </p>
          <p className="font-['Questrial'] text-white text-lg leading-[21px]">
            New Award reader's FAVOURITE Best Books of 2024 for Mystery-Legal Fiction
          </p>
        </div>
      </div>

      {/* Tilted book cover */}
      <div className="absolute right-4 md:right-[110px] top-[-54px] z-30 flex items-center justify-center h-[255px] w-[203px]">
        <div className="rotate-[15.25deg] shadow-[8px_9px_10px_0px_rgba(0,0,0,0.25)] w-[149px] h-[224px]">
          <img
            src={bookCover}
            alt="Plausible Liars"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
