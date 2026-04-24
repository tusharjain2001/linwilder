import { useState } from 'react';
import zigzag from '../../assets/images/zigzag.svg';
import coverPlausible from '../../assets/images/book/cover-plausible-liars.png';
import coverNarrowPath from '../../assets/images/book/cover-narrow-path.png';
import coverSaul from '../../assets/images/book/cover-my-name-is-saul.png';
import coverPriceGenius from '../../assets/images/book/cover-price-for-genius.png';
import starIcon from '../../assets/images/star.svg';
import chevronLeft from '../../assets/images/chevron-left.svg';
import chevronRight from '../../assets/images/chevron-right.svg';

const books = [
  { title: 'PLAUSIBLE LIARS', rating: '4.3', cover: coverPlausible },
  { title: 'FINDING THE NARROW PATH', rating: '4.7', cover: coverNarrowPath },
  { title: 'MY NAME IS SAUL', rating: '4.7', cover: coverSaul },
  { title: 'PRICE FOR GENIUS', rating: '4.2', cover: coverPriceGenius },
  { title: 'PLAUSIBLE LIARS', rating: '4.3', cover: coverPlausible },
  { title: 'FINDING THE NARROW PATH', rating: '4.7', cover: coverNarrowPath },
  { title: 'MY NAME IS SAUL', rating: '4.7', cover: coverSaul },
  { title: 'PRICE FOR GENIUS', rating: '4.2', cover: coverPriceGenius },
];

function RatingBadge({ rating }) {
  return (
    <div className="flex-shrink-0 bg-[#b83431] flex items-center gap-1 px-2.5 pb-1.5 rounded-[31px] h-[27px]">
      <span className="font-['Sedan_SC'] text-white text-lg leading-[26px]">{rating}</span>
      <img src={starIcon} alt="star" className="w-[15px] h-[15px]" />
    </div>
  );
}

export default function MoreBooksGrid() {
  const [startIndex, setStartIndex] = useState(0);
  const visible = 4;
  const cardWidth = 286;
  const gap = 60;
  const peekWidth = Math.round(cardWidth / 2);
  const viewportWidth = visible * cardWidth + (visible - 1) * gap + peekWidth;
  const maxIndex = Math.max(books.length - visible, 0);
  const translateX = startIndex * (cardWidth + gap);

  const prev = () => setStartIndex((current) => Math.max(0, current - 1));
  const next = () => setStartIndex((current) => Math.min(maxIndex, current + 1));

  return (
    <section className="relative z-10 -mt-[22px] bg-[#f6efe9] pt-[42px] lg:mt-0 lg:pt-[72px]">
      <div className="pointer-events-none absolute left-0 top-[-18px] w-full lg:top-[-66px]">
        <img src={zigzag} alt="" className="w-full h-auto block" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center gap-8 px-4 pb-12 sm:px-6 lg:gap-12 lg:px-8 lg:pb-20">
        <div className="flex max-w-[686px] flex-col items-center gap-4 text-center lg:gap-5">
          <h2 className="font-['Sedan_SC'] text-[24px] leading-[1.1] text-black lg:text-[32px] lg:leading-[34px]">
            VIEW MORE BOOKS
          </h2>
          <p className="font-['Questrial'] text-[13px] leading-6 text-[#334155] sm:text-[14px] lg:text-lg">
            From award-winning author Lin Wilder comes The Reluctant Queen a powerful blend of
            history and storytelling, praised for its fast-paced and compelling narrative.
          </p>
        </div>

        <div className="hidden gap-3 self-end lg:flex">
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="w-[38px] h-[38px] flex items-center justify-center disabled:opacity-40"
          >
            <img src={chevronLeft} alt="Previous" className="w-full h-full -scale-y-100 rotate-90" />
          </button>
          <button
            onClick={next}
            disabled={startIndex >= maxIndex}
            className="w-[38px] h-[38px] flex items-center justify-center disabled:opacity-40"
          >
            <img src={chevronRight} alt="Next" className="w-full h-full rotate-90" />
          </button>
        </div>

        <div className="grid w-full grid-cols-2 gap-x-5 gap-y-8 lg:hidden">
          {books.slice(0, 4).map((book, index) => (
            <div key={`${book.title}-${index}-mobile`} className="flex flex-col gap-2 items-start">
              <div className="relative w-full shadow-[8px_9px_10px_0px_rgba(0,0,0,0.18)]">
                <img src={book.cover} alt={book.title} className="w-full h-auto object-cover" />
              </div>
              <div className="flex items-start justify-between w-full gap-2 min-h-[32px]">
                <span className="font-['Sedan_SC'] text-[8px] leading-[1.2] text-black flex-1">
                  {book.title}
                </span>
                <div className="flex-shrink-0 bg-[#b83431] flex items-center gap-1 px-1.5 py-0.5 rounded-[31px] h-[16px]">
                  <span className="font-['Sedan_SC'] text-white text-[8px] leading-none">{book.rating}</span>
                  <img src={starIcon} alt="star" className="w-[8px] h-[8px]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden w-full overflow-hidden lg:block" style={{ maxWidth: `${viewportWidth}px` }}>
          <div
            className="flex gap-[60px] items-end transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {books.map((book, index) => (
              <div key={`${book.title}-${index}`} className="flex flex-col gap-6 items-start w-[286px] shrink-0">
                <div className="relative w-full h-[429px] shadow-[8px_9px_10px_0px_rgba(0,0,0,0.25)]">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-start justify-between w-full gap-3 min-h-[88px]">
                  <span className="font-['Sedan_SC'] text-black text-xl leading-[34px] flex-1">
                    {book.title}
                  </span>
                  <RatingBadge rating={book.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
