import heroComposite from "../../assets/images/book-hero.svg";
import starRating from "../../assets/images/book/star-rating.svg";
import arrowRight from "../../assets/images/arrow-right.svg";

export default function BookHero() {
  return (
    <section className="bg-[#e4e8d7]  relative overflow-hidden flex items-center">
      <div className=" px-20 py-20 grid grid-cols-[430px_minmax(0,1fr)] items-center gap-20 w-full">
        {/* Left: combined book hero artwork */}
        <div className="relative justify-self-center w-[475px]">
          <img
            src={heroComposite}
            alt="The Fragrance Shed by a Violet"
            className="w-[475px] h-auto block"
          />
        </div>

        {/* Right: book info */}
        <div className="flex flex-col gap-8 max-w-[1080px]">
          <div className="flex flex-col gap-[18px]">
            <h1 className="font-['Aboreto'] text-[#111] text-[40px] leading-[1.1] uppercase tracking-wide">
              The Fragrance Shed by a Violet
            </h1>
            <div className="flex items-center gap-2">
              <img src={starRating} alt="4.7 stars" className="h-4" />
              <span className="font-['Questrial'] text-[#b83431] text-[19px]">
                4.7/5
              </span>
            </div>
          </div>

          <div className="font-['Questrial'] text-[#595959] text-[16px] leading-[2] space-y-5 max-w-[1120px]">
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

          <button className="bg-[#592c33] flex items-center gap-2 px-5 py-2.5 rounded-[5px] h-[42px] self-start hover:bg-opacity-90 transition">
            <span className="font-['Questrial'] text-white text-base uppercase whitespace-nowrap">
              EXPLORE MORE BOOKS from the author
            </span>
            <img
              src={arrowRight}
              alt=""
              className="w-6 h-6 rotate-90 brightness-0 invert"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
