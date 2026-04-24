import videoThumb from '../assets/images/video-thumb.png';
import playBtn from '../assets/images/play-btn.svg';
import arrowRight from '../assets/images/arrow-right-dark.svg';

export default function VideoSection() {
  return (
    <section className="bg-[#e4e8d7] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-28">
        <div className="flex max-w-[339px] flex-col items-center gap-4 text-center lg:max-w-none lg:flex-1 lg:items-start lg:text-left">
          <h3 className="font-['Aboreto'] text-[20px] leading-[29px] text-black lg:text-[32px] lg:leading-[43px]">
            Foreman of the Jury in Plausible Liars
          </h3>
          <p className="font-['Questrial'] text-[12px] leading-[17px] tracking-[0.48px] text-[#595959] lg:text-lg lg:leading-8 lg:tracking-normal">
            "Before this case, he'd never given any thought to transgender issues. His employers
            flew the rainbow flag and celebrated Pride week, so he shrugged and went along with it.
            It didn't affect him, so he didn't care about others' sexual choices. But he didn't
            understand what transgender meant. Until now."
          </p>
          <div className="flex items-center gap-1 self-center border-b border-[#592c33] pb-0.5 lg:self-start">
            <span className="font-['Questrial'] text-[10px] whitespace-nowrap text-[#592c33] lg:text-lg">
              Read More
            </span>
            <img src={arrowRight} alt="" className="h-[11px] w-[11px] rotate-90 lg:h-6 lg:w-6" />
          </div>
        </div>

        <div className="group relative w-full max-w-[347px] cursor-pointer overflow-hidden rounded-[4px] border border-[rgba(89,89,89,0.25)] bg-white lg:h-[343px] lg:w-[489px] lg:max-w-none lg:rounded-[10px]">
          <img
            src={videoThumb}
            alt="Video thumbnail"
            className="h-auto w-full object-cover lg:h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20">
            <img src={playBtn} alt="Play" className="h-[40px] w-[40px] lg:h-[43px] lg:w-[43px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
