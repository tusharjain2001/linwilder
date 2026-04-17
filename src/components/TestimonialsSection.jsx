import { useState } from 'react';
import testimonialsBg from '../assets/images/testimonials-bg.svg';
import quoteIcon from '../assets/images/quote.svg';
import chevronLeft from '../assets/images/chevron-left.svg';
import chevronRight from '../assets/images/chevron-right.svg';

const testimonials = [
  {
    text: `"Plausible Liars" by Lin Wilder is a thought-provoking and gripping novel that tackles contemporary issues with depth and precision. Pulitzer Prize-winning journalist Kate Townsend's journey into the world of transgender politics, alongside Lindsey McCall's legal challenges, makes for a compelling read. Wilder's exploration of complex characters and medical mysteries is both innovative and engaging, leaving readers eager for more.`,
    author: '-Nadia',
  },
  {
    text: `The courtroom setting also adds an intriguing layer to the narrative, prompting readers to reassess their perceptions of the characters and the issues at hand. Wilder's ability to immerse readers in the courtroom proceedings is nothing short of remarkable.`,
    author: '-London Book Reviews',
  },
  {
    text: `This book is not just a story but an experience, offering readers a chance to step into the shoes of characters far outside their own lived experiences. Are you ready to dive into a world where fiction becomes an immersive experience? Grab your copy today and become part of the conversation.`,
    author: '-London Book Reviews',
  },
  {
    text: `Wilder crafts a captivating narrative in Plausible Liars: A Dr. Lindsey McCall Medical Mystery, seamlessly merging groundbreaking medical research with a tense courtroom drama. The novel fearlessly tackles contentious subjects, examining far-reaching effects of chemical exposure and the ethical dilemmas inherent in medical practices.`,
    author: '-Review',
  },
  {
    text: `It seems bizarre to be saying this, but I am genuinely grateful to Lin, and others like her, for sticking her neck out and saying what needs to be said. Lin has never been one to shy away from controversial issues, and there are few more controversial at the moment than the indoctrination of children by some of the more extreme elements of the trans community.`,
    author: '-Matt McAvoy',
  },
  {
    text: `In the riveting fifth installment of Lin Wilder's award-winning medical mystery series, Pulitzer Prize-winning investigative journalist Kate Townsend finds herself at the epicenter of a cultural controversy. Driven by what she witnessed in her son's pre-kindergarten, she navigates the complexities of transgender politics, unearthing a sinister conspiracy.`,
    author: '-Review by Book Excellence',
  },
  {
    text: `Plausible Liars by Lin Wilder is a medical drama inspired by actual events and information on transgenderism. Dr. Lindsey McCall contends with transgender politics and becomes caught up in a provoking and challenging situation, while Kate Townsend publishes controversial articles on the dangers and impact of gender transitioning.`,
    author: '-Angelique Papayannopoulos',
  },
  {
    text: `Plausible Liars is a work of fiction in the mystery, legal drama, and suspense subgenres, and is part of the Dr. Lindsey McCall Medical Mystery series. This engaging tale delves into the explosive world of parenting politics, intertwining the lives of Pulitzer Prize-winning journalist Kate Townsend and Dr. Lindsey McCall.`,
    author: '-K.C. Finn',
  },
  {
    text: `Lin Wilder, known for her expertise in non-fiction, has ventured into the world of fiction with her fifth installment in the Lindsey McCall medical mystery series, Plausible Liars. The novel intricately navigates the complexities of transgender politics and courtroom drama, offering readers a distinctive and immersive perspective on these themes.`,
    author: '-London Book Reviews',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = testimonials.length - 1;

  const prev = () => setActiveIndex((index) => Math.max(index - 1, 0));
  const next = () => setActiveIndex((index) => Math.min(index + 1, maxIndex));

  return (
    <section className="relative w-full min-h-[668px] overflow-hidden mt-[-75px] flex items-center">
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
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className="flex-shrink-0 w-[38px] h-[38px] disabled:opacity-40 transition-opacity"
          >
            <img src={chevronLeft} alt="Previous" className="w-full h-full -scale-y-100 rotate-90" />
          </button>

          {/* Card */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out will-change-transform"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={`${testimonial.author}-${index}`} className="relative w-full shrink-0 px-[2px] pt-[14px]">
                  <div className="absolute right-[77px] top-0 w-[61px] h-[39px] z-10">
                    <img src={quoteIcon} alt="" className="w-full h-full" />
                  </div>

                  <div className="bg-white rounded-[10px] shadow-[1px_1px_4px_0px_rgba(0,0,0,0.25)] px-7 py-11 min-h-[317px] flex items-center">
                    <div className="flex flex-col gap-5 w-full max-w-[955px] mx-auto">
                      <p className="font-['Questrial'] text-[#595959] text-xl leading-8">
                        {testimonial.text}
                      </p>
                      <p className="font-['Questrial'] text-[#592c33] text-base">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={activeIndex === maxIndex}
            className="flex-shrink-0 w-[38px] h-[38px] disabled:opacity-40 transition-opacity"
          >
            <img src={chevronRight} alt="Next" className="w-full h-full rotate-90" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-8 bg-[#592c33]' : 'w-2.5 bg-[#592c33]/25'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
