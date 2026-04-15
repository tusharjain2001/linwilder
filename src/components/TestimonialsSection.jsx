import testimonialsBg from '../assets/images/testimonials-bg.svg';
import quoteIcon from '../assets/images/quote.svg';
import chevronLeft from '../assets/images/chevron-left.svg';
import chevronRight from '../assets/images/chevron-right.svg';

const testimonials = [
  {
    text: `"Plausible Liars" by Lin Wilder is a thought-provoking and gripping novel that tackles contemporary issues with depth and precision. Pulitzer Prize-winning journalist Kate Townsend's journey into the world of transgender politics, alongside Lindsey McCall's legal challenges, makes for a compelling read. Wilder's exploration of complex characters and medical mysteries is both innovative and engaging, leaving readers eager for more.`,
    author: '-Nadia',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full min-h-[668px] overflow-hidden flex items-center">
      {/* Background */}
      <img
        src={testimonialsBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 py-20 flex flex-col gap-16 items-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="border border-[#b83431] px-5 py-1 rounded-[19px]">
            <span className="font-['Questrial'] text-[#b83431] text-base uppercase leading-[18px]">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="font-['Sedan_SC'] text-black text-[32px] leading-[34px]">
            WHAT PEOPLE SAY ABOUT PLAUSIBLE LIARS
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="flex items-center gap-12 w-full">
          {/* Prev */}
          <button className="flex-shrink-0 w-[38px] h-[38px]">
            <img src={chevronLeft} alt="Previous" className="w-full h-full -scale-y-100 rotate-90" />
          </button>

          {/* Card */}
          <div className="flex-1 relative">
            {/* Quote icon */}
            <div className="absolute right-[77px] -top-[14px] w-[61px] h-[39px] z-10">
              <img src={quoteIcon} alt="" className="w-full h-full" />
            </div>

            <div className="bg-white rounded-[10px] shadow-[1px_1px_4px_0px_rgba(0,0,0,0.25)] px-7 py-11 min-h-[317px] flex items-center">
              <div className="flex flex-col gap-5 w-full max-w-[955px] mx-auto">
                <p className="font-['Questrial'] text-[#595959] text-xl leading-8">
                  {testimonials[0].text}
                </p>
                <p className="font-['Questrial'] text-[#592c33] text-base">
                  {testimonials[0].author}
                </p>
              </div>
            </div>
          </div>

          {/* Next */}
          <button className="flex-shrink-0 w-[38px] h-[38px]">
            <img src={chevronRight} alt="Next" className="w-full h-full rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
}
