import videoThumb from '../assets/images/video-thumb.png';
import playBtn from '../assets/images/play-btn.svg';
import arrowRight from '../assets/images/arrow-right-dark.svg';

export default function VideoSection() {
  return (
    <section className="bg-[#e4e8d7] py-20 px-8">
      <div className="max-w-[1200px] mx-auto flex gap-28 items-center">
        {/* Video thumbnail */}
        <div className="relative flex-shrink-0 w-[489px] h-[343px] rounded-[10px] overflow-hidden border border-[rgba(89,89,89,0.25)] cursor-pointer group">
          <img
            src={videoThumb}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition">
            <img src={playBtn} alt="Play" className="w-[43px] h-[43px]" />
          </div>
        </div>

        {/* Quote content */}
        <div className="flex flex-col gap-5 flex-1">
          <h3 className="font-['Aboreto'] text-black text-[32px] leading-[43px]">
            Foreman of the Jury in Plausible Liars
          </h3>
          <p className="font-['Questrial'] text-[#595959] text-lg leading-8">
            "Before this case, he'd never given any thought to transgender issues. His employers
            flew the rainbow flag and celebrated Pride week, so he shrugged and went along with it.
            It didn't affect him, so he didn't care about others' sexual choices. But he didn't
            understand what transgender meant. Until now."
          </p>
          <div className="flex items-center gap-2 border-b border-[#592c33] pb-0.5 self-start">
            <span className="font-['Questrial'] text-[#592c33] text-lg whitespace-nowrap">
              Read More
            </span>
            <img src={arrowRight} alt="" className="w-6 h-6 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
