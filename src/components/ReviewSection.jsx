import reviewBook from '../assets/images/review-book.png';
import arrowRight from '../assets/images/arrow-right-dark.svg';
import chevronLeft from '../assets/images/chevron-left.svg';
import chevronRight from '../assets/images/chevron-right.svg';

export default function ReviewSection() {
  return (
    <section className="bg-[#f6efe9]">
      {/* Header */}
      <div className="bg-[#f6efe9] px-8 py-8 text-center">
        <p className="font-['Questrial'] text-[#592c33] text-xl leading-[26px]">
          January 26, 2026
        </p>
        <h2 className="font-['Sedan_SC'] text-[#592c33] text-[32px] leading-[34px] mt-2">
          THE INDIE CRITIC REVIEW
        </h2>
        <p className="font-['Questrial'] text-[#592c33] text-lg leading-6 mt-1">
          ABOUT PLAUSIBLE LIARS
        </p>
      </div>

      {/* Content */}
      <div className="bg-[#f6efe9] px-8 py-10">
        <div className="max-w-[1200px] mx-auto flex items-center gap-16">
          {/* Prev arrow */}
          <button className="w-[38px] h-[38px] flex-shrink-0">
            <img src={chevronLeft} alt="Previous" className="w-full h-full -scale-y-100 rotate-90" />
          </button>

          {/* Review text + book image */}
          <div className="flex gap-36 items-center flex-1">
            <div className="flex flex-col items-start gap-4 flex-1">
              {/* Tag */}
              <div className="border border-[#b83431] px-5 py-1 rounded-[19px]">
                <span className="font-['Questrial'] text-[#b83431] text-base uppercase leading-[18px]">
                  ABOUT PLAUSIBLE LIARS
                </span>
              </div>

              {/* Review body */}
              <p className="font-['Questrial'] text-[#595959] text-lg leading-8">
                Plausible Liars, the fifth and concluding novel in Lin Wilder's Dr. Lindsey McCall
                Medical Mystery series, is a bold medical–legal thriller that directly engages with
                contemporary ethical, political, and cultural tensions. Wilder places physician
                Lindsey McCall and Pulitzer Prize–winning investigative journalist Kate Townsend at
                the center of a conspiracy involving federal indictment, controversial medical
                research, and explosive social debate.
              </p>

              {/* Read more */}
              <div className="flex items-center gap-2 border-b border-[#592c33] pb-0.5">
                <span className="font-['Questrial'] text-[#592c33] text-lg whitespace-nowrap">
                  Read More
                </span>
                <img src={arrowRight} alt="" className="w-6 h-6 rotate-90" />
              </div>
            </div>

            {/* Book image */}
            <div className="flex-shrink-0 w-[243px] h-[343px] overflow-hidden">
              <img
                src={reviewBook}
                alt="Plausible Liars"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Next arrow */}
          <button className="w-[38px] h-[38px] flex-shrink-0">
            <img src={chevronRight} alt="Next" className="w-full h-full rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
}
