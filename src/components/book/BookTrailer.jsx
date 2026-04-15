import trailerThumb from '../../assets/images/book/trailer-thumb.png';
import playBtn from '../../assets/images/play-btn.svg';

export default function BookTrailer() {
  return (
    <section className="bg-[#efd3b1] py-16 px-8">
      <div className="max-w-[1297px] mx-auto flex flex-col gap-6 items-center">
        <h2 className="font-['Sedan_SC'] text-[#111] text-[40px] leading-[62px] text-center">
          Book Trailer
        </h2>

        <div className="relative w-full h-[501px] rounded-[10px] overflow-hidden cursor-pointer group">
          <img
            src={trailerThumb}
            alt="Book trailer thumbnail"
            className="w-full h-full object-cover"
          />
          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/25 transition">
            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <img src={playBtn} alt="Play trailer" className="w-8 h-8 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
