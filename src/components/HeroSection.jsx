import heroBg from "../assets/new-home/hero-bg.png";
import bookCover from "../assets/new-home/book-cover.png";
import award1 from "../assets/new-home/award-1.png";
import award2 from "../assets/new-home/award-2.png";
import award3 from "../assets/new-home/award-3.png";
import arrowRight from "../assets/new-home/arrow-right.svg";
import redzigzag from "../assets/new-home/redzigzag.svg";

export default function HeroSection() {
  return (
    <>
      <section className="bg-[#592c33] w-full relative z-10">
        {/* Landscape photo with text overlay */}
        <div className="relative px-20 pt-20">
          <div className="relative rounded-[10px] overflow-hidden">
            <img
              src={heroBg}
              alt="Lin Wilder in scenic landscape"
              className="w-full h-114.5 object-cover"
            />
            <p className="absolute inset-0 flex items-center justify-center font-['Questrial'] text-[#9d674d] text-[32px] capitalize text-center px-10 leading-8.5">
              faith, healing, medicine, and&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; personal transformation
            </p>
          </div>
        </div>

        {/* Content: overlaps bottom of photo by ~67px */}
        <div className="max-w-360 mx-auto px-37 -mt-16.75 relative pb-16">
          <div className="flex items-start gap-14.75">
            {/* Left column */}
            <div className="flex flex-col gap-14 flex-1">
              {/* Awards + tagline */}
              <div className="flex flex-col gap-3.25">
                <div className="flex items-center gap-5">
                  <img
                    src={award1}
                    alt="Award 1"
                    className="w-35.75 h-35.75 object-contain"
                  />
                  <img
                    src={award2}
                    alt="Award 2"
                    className="w-35.75 h-35.75 object-contain -ml-2"
                  />
                  <img
                    src={award3}
                    alt="Award 3"
                    className="w-39 h-37.25 object-contain -ml-2"
                  />
                </div>
                <p className="font-['Sedan_SC'] text-[#f6efe9] text-[24px] leading-7.5">
                  An Award-winning
                  <br />
                  Dr. Lindsey McCall medical mystery series.
                </p>
              </div>

              {/* Title + description + button */}
              <div className="flex flex-col gap-11 max-w-152.5">
                <div className="text-[#f6efe9]">
                  <h2 className="font-['Aboreto'] text-[52px] leading-18">
                    Plausible Liars.
                  </h2>
                  <p className="font-['Questrial'] text-[20px] leading-8">
                    In Lin Wilder&apos;s fifth Lindsey McCall mystery, journalist
                    Kate Townsend&apos;s controversial series on gender politics and
                    children leads to a legal battle, drawing Dr. Lindsey McCall
                    into a conspiracy involving transgender issues and medical
                    ethics.
                  </p>
                </div>
                <button className="bg-white flex items-center gap-2.5 px-5 py-2.5 h-10.5 rounded-[5px] hover:bg-opacity-90 transition-colors w-fit">
                  <span className="font-['Questrial'] text-[#592c33] text-[16px] uppercase font-bold whitespace-nowrap">
                    EXPLORE MORE BOOKS from the author
                  </span>
                  <img src={arrowRight} alt="" className="w-6 h-6 rotate-90" />
                </button>
              </div>
            </div>

            {/* Right: Book cover */}
            <div className="shrink-0 shadow-[8px_9px_10px_0px_rgba(0,0,0,0.25)]">
              <img
                src={bookCover}
                alt="Plausible Liars book cover"
                className="w-109.25 h-163.75 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <img
        src={redzigzag}
        alt=""
        aria-hidden="true"
        className="w-full block -mt-18"
      />
    </>
  );
}
