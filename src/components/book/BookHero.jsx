import heroImg from '../../assets/images/book/featured-book-hero.png';
import heroEllipse from '../../assets/images/book/hero-ellipse.svg';
import starRating from '../../assets/images/book/star-rating.svg';
import arrowRight from '../../assets/images/arrow-right.svg';

export default function BookHero() {
  return (
    <section className="bg-[#e4e8d7] min-h-[823px] relative overflow-hidden flex items-center">
      <div className="max-w-[1300px] mx-auto px-8 py-20 flex items-center gap-16 w-full">
        {/* Left: book cover with decorative ellipse */}
        <div className="relative flex-shrink-0 w-[336px]">
          {/* Decorative circle behind cover */}
          <img
            src={heroEllipse}
            alt=""
            className="absolute -left-[69px] -top-[15px] w-[475px] h-[475px] pointer-events-none"
          />
          <div className="relative shadow-[5px_5px_4px_0px_rgba(0,0,0,0.25)] w-[336px] h-[476px] overflow-hidden">
            <img
              src={heroImg}
              alt="The Fragrance Shed by a Violet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: book info */}
        <div className="flex flex-col gap-8 flex-1 max-w-[770px]">
          <div className="flex flex-col gap-[18px]">
            <h1 className="font-['Aboreto'] text-[#111] text-[40px] leading-[53px]">
              The Fragrance Shed by a Violet
            </h1>
            <div className="flex items-center gap-2">
              <img src={starRating} alt="4.7 stars" className="h-[17px]" />
              <span className="font-['Questrial'] text-[#b83431] text-[19px]">4.7/5</span>
            </div>
          </div>

          <div className="font-['Questrial'] text-[#595959] text-base leading-[26px] text-justify space-y-4">
            <p>
              After her series of articles is awarded three Pulitzer Prizes, investigative reporter
              Kate Townsend is haunted by the knowledge that her new-found fame has been purchased
              at too high a price. She is certain that McCall, an internationally acclaimed
              cardiologist, researcher, and a 2002 nominee for the Nobel Prize for Medicine, is not
              guilty.
            </p>
            <p>
              Texas governor Greg Bell hires former homicide detective and criminal defense attorney
              Rich Jansen to fix the escalating problems at the Huntsville Prisons recently inflamed
              by a lawsuit against infamous inmate Dr. Lindsey McCall. When Jansen's skills quickly
              result in the resignation of an incompetent prison medical director, he realizes that
              this strange saga is just beginning.
            </p>
            <p>
              Mark Twain wrote that forgiveness was the fragrance shed by a violet upon the heel of
              the boot that has crushed it. This medical mystery weaves together the lives of two
              sisters, Lindsey and Paula, with those of strangers as each copes with loss, betrayal,
              jealousy, and the exquisitely painful journey to forgiveness.
            </p>
          </div>

          <button className="bg-[#592c33] flex items-center gap-2 px-5 py-2.5 rounded-[5px] h-[42px] self-start hover:bg-opacity-90 transition">
            <span className="font-['Questrial'] text-white text-base uppercase whitespace-nowrap">
              EXPLORE MORE BOOKS from the author
            </span>
            <img src={arrowRight} alt="" className="w-6 h-6 rotate-90 brightness-0 invert" />
          </button>
        </div>
      </div>
    </section>
  );
}
