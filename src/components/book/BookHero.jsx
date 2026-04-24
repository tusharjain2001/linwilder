import heroComposite from "../../assets/images/book-hero.svg";
import starRating from "../../assets/images/book/star-rating.svg";
import arrowRight from "../../assets/images/arrow-right.svg";

export default function BookHero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-[#e4e8d7]">
      <div className="grid w-full items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[430px_minmax(0,1fr)] lg:gap-20 lg:px-20 lg:py-20">
        <div className="relative order-2 mx-auto w-[210px] justify-self-center sm:w-[260px] lg:order-1 lg:w-[475px]">
          <img
            src={heroComposite}
            alt="The Fragrance Shed by a Violet"
            className="block h-auto w-full"
          />
        </div>

        <div className="order-1 flex max-w-[1080px] flex-col items-center gap-6 text-center lg:order-2 lg:items-start lg:gap-8 lg:text-left">
          <div className="flex flex-col gap-3 lg:gap-[18px]">
            <h1 className="font-['Aboreto'] text-[24px] uppercase tracking-wide text-[#111] sm:text-[30px] lg:text-[40px] lg:leading-[1.1]">
              The Fragrance Shed by a Violet
            </h1>
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <img src={starRating} alt="4.7 stars" className="h-3.5 lg:h-4" />
              <span className="font-['Questrial'] text-[15px] text-[#b83431] lg:text-[19px]">
                4.7/5
              </span>
            </div>
          </div>

          <div className="max-w-[1120px] space-y-4 font-['Questrial'] text-[14px] leading-7 text-[#595959] sm:text-[15px] lg:space-y-5 lg:text-[16px] lg:leading-[2]">
            <p>
              After her series of articles is awarded three Pulitzer Prizes,
              investigative reporter Kate Townsend is haunted by the knowledge
              that her new-found fame has been purchased at too high a price.
              She is certain that McCall, an internationally acclaimed
              cardiologist, researcher, and a 2002 nominee for the Nobel Prize
              for Medicine, is not guilty.
            </p>
            <p>
              Texas governor Greg Bell hires former homicide detective and
              criminal defense attorney Rich Jansen to fix the escalating
              problems at the Huntsville Prisons recently inflamed by a lawsuit
              against infamous inmate Dr. Lindsey McCall. When Jansen's skills
              quickly result in the resignation of an incompetent prison medical
              director, he realizes that this strange saga is just beginning.
            </p>
            <p>
              Mark Twain wrote that forgiveness was the fragrance shed by a
              violet upon the heel of the boot that has crushed it. This medical
              mystery weaves together the lives of two sisters, Lindsey and
              Paula, with those of strangers as each copes with loss, betrayal,
              jealousy, and the exquisitely painful journey to forgiveness.
            </p>
          </div>

          <button className="flex h-[40px] items-center gap-2 self-center rounded-[5px] bg-[#592c33] px-4 py-2.5 transition hover:bg-opacity-90 lg:h-[42px] lg:self-start lg:px-5">
            <span className="font-['Questrial'] text-[12px] uppercase whitespace-nowrap text-white lg:text-base">
              EXPLORE MORE BOOKS from the author
            </span>
            <img
              src={arrowRight}
              alt=""
              className="h-5 w-5 rotate-90 brightness-0 invert lg:h-6 lg:w-6"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
