import reviewBook from '../assets/images/review-book.png';
import arrowRight from '../assets/images/arrow-right-dark.svg';
import chevronLeft from '../assets/images/chevron-left.svg';
import chevronRight from '../assets/images/chevron-right.svg';

export default function ReviewSection() {
  return (
    <section className="bg-[#f6efe9] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center">
          <p className="font-['Questrial'] text-[12px] leading-[26px] text-[#592c33] lg:text-xl lg:leading-[26px] lg:text-[#7b5a54]">
            January 26, 2026
          </p>
          <h2 className="font-['Sedan_SC'] text-[16px] leading-[34px] text-[#592c33] lg:mt-2 lg:text-[32px] lg:leading-[34px]">
            THE INDIE CRITIC REVIEW
          </h2>
          <p className="font-['Questrial'] text-[12px] leading-6 text-[#592c33] lg:mt-1 lg:text-lg">
            ABOUT PLAUSIBLE LIARS
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center gap-6 lg:hidden">
          <div className="w-[123px]">
            <img
              src={reviewBook}
              alt="Plausible Liars review award"
              className="h-[174px] w-full object-cover"
            />
          </div>

          <div className="rounded-[15px] border border-[#b83431] px-4 py-1">
            <span className="font-['Questrial'] text-[12px] uppercase leading-[18px] text-[#b83431]">
              ABOUT PLAUSIBLE LIARS
            </span>
          </div>

          <div className="max-w-[343px] text-center">
            <p className="font-['Questrial'] text-[12px] leading-[18px] tracking-[0.48px] text-[#595959]">
              Plausible Liars, the fifth and concluding novel in Lin Wilder&apos;s Dr. Lindsey
              McCall Medical Mystery series, is a bold medical-legal thriller that directly
              engages with contemporary ethical, political, and cultural tensions. Wilder places
              physician Lindsey McCall and Pulitzer Prize-winning investigative journalist Kate
              Townsend at the center of a conspiracy involving federal indictment, controversial
              medical research, and explosive social debate.
            </p>

            <div className="mt-3 inline-flex items-center gap-1 border-b border-[#592c33] pb-0.5">
              <span className="font-['Questrial'] text-[10px] text-[#592c33]">Read More</span>
              <img src={arrowRight} alt="" className="h-[11px] w-[11px] rotate-90" />
            </div>
          </div>
        </div>

        <div className="mt-10 hidden items-center gap-16 lg:flex">
          <button className="h-[38px] w-[38px] flex-shrink-0">
            <img src={chevronLeft} alt="Previous" className="h-full w-full -scale-y-100 rotate-90" />
          </button>

          <div className="flex flex-1 items-center gap-36">
            <div className="flex flex-1 flex-col items-start gap-4">
              <div className="rounded-[19px] border border-[#b83431] px-5 py-1">
                <span className="font-['Questrial'] text-base uppercase leading-[18px] text-[#b83431]">
                  ABOUT PLAUSIBLE LIARS
                </span>
              </div>

              <p className="font-['Questrial'] text-lg leading-8 text-[#595959]">
                Plausible Liars, the fifth and concluding novel in Lin Wilder&apos;s Dr. Lindsey
                McCall Medical Mystery series, is a bold medical-legal thriller that directly
                engages with contemporary ethical, political, and cultural tensions. Wilder places
                physician Lindsey McCall and Pulitzer Prize-winning investigative journalist Kate
                Townsend at the center of a conspiracy involving federal indictment, controversial
                medical research, and explosive social debate.
              </p>

              <div className="flex items-center gap-2 border-b border-[#592c33] pb-0.5">
                <span className="font-['Questrial'] text-lg whitespace-nowrap text-[#592c33]">
                  Read More
                </span>
                <img src={arrowRight} alt="" className="h-6 w-6 rotate-90" />
              </div>
            </div>

            <div className="h-[343px] w-[243px] flex-shrink-0 overflow-hidden">
              <img
                src={reviewBook}
                alt="Plausible Liars"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <button className="h-[38px] w-[38px] flex-shrink-0">
            <img src={chevronRight} alt="Next" className="h-full w-full rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
}
