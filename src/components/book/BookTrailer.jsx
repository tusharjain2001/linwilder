import trailerThumb from '../../assets/images/book/trailer-thumb.png';
// import playBtn from '../../assets/images/play-btn.svg';

export default function BookTrailer() {
  return (
    <section className="bg-[#efd3b1] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex max-w-[1297px] flex-col items-center gap-4 lg:gap-6">
        <h2 className="font-['Sedan_SC'] text-[24px] leading-[1.2] text-[#111] text-center lg:text-[40px] lg:leading-[62px]">
          Book Trailer
        </h2>

        <div className="group relative w-full max-w-[320px] cursor-pointer overflow-hidden rounded-[10px] lg:h-[501px] lg:max-w-none">
          <img
            src={trailerThumb}
            alt="Book trailer thumbnail"
            className="h-auto w-full object-cover lg:h-full"
          />
          {/* Play overlay */}
          {/* <div className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/25 transition">
            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <img src={playBtn} alt="Play trailer" className="w-8 h-8 ml-1" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
