import heroBg from "../assets/images/hero-bg.svg";
import bookCover from "../assets/images/book-plausible-liars.png";
import award1 from "../assets/images/award-1.svg";
import award2 from "../assets/images/award-2.svg";
import award3 from "../assets/images/award-3.svg";
import arrowRight from "../assets/images/arrow-right.svg";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-8 py-20 flex items-center gap-16">
        {/* Left content */}
        <div className="flex flex-col gap-14 flex-1 max-w-[690px]">
          {/* Top: subtitle + award badges */}
          <div className="flex flex-col gap-3 items-center text-center">
            <p className="font-['Sedan_SC'] text-[#f6efe9] text-2xl leading-8">
              An Award-winning
              <br />
              Dr. Lindsey McCall medical mystery series.
            </p>
            <div className="flex gap-5 items-center mt-2">
              <img
                src={award1}
                alt="Award 1"
                className="w-[105px] h-[105px] object-contain"
              />
              <img
                src={award2}
                alt="Award 2"
                className="w-[100px] h-[100px] object-contain"
              />
              <img
                src={award3}
                alt="Award 3"
                className="w-[109px] h-[109px] object-contain"
              />
            </div>
          </div>

          {/* Title + description + CTA */}
          <div className="flex flex-col gap-11 items-center w-full">
            <div className="text-[#f6efe9] text-center w-full">
              <h2 className="font-['Aboreto'] text-[52px] leading-[72px]">
                Plausible Liars.
              </h2>
              <p className="font-['Questrial'] text-xl leading-8">
                In Lin Wilder's fifth Lindsey McCall mystery, journalist Kate
                Townsend's controversial series on gender politics and children
                leads to a legal battle, drawing Dr. Lindsey McCall into a
                conspiracy involving transgender issues and medical ethics.
              </p>
            </div>
            <button className="bg-white flex items-center gap-2 px-5 py-2.5 rounded-[5px] h-[42px] hover:bg-opacity-90 transition">
              <span className="font-['Questrial'] text-[#592c33] text-base uppercase whitespace-nowrap">
                EXPLORE MORE BOOKS from the author
              </span>
              <img src={arrowRight} alt="" className="w-6 h-6 rotate-90" />
            </button>
          </div>
        </div>

        {/* Right: Book cover */}
        <div className="flex-shrink-0 shadow-[8px_9px_10px_0px_rgba(0,0,0,0.25)]">
          <img
            src={bookCover}
            alt="Plausible Liars book cover"
            className="w-[437px] h-[655px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
