import { useState } from 'react';
import { Link } from 'react-router-dom';
import zigzag from '../../assets/images/zigzag.svg';
import starIcon from '../../assets/images/star.svg';
import chevronLeft from '../../assets/images/chevron-left.svg';
import chevronRight from '../../assets/images/chevron-right.svg';
import { books } from '../../lib/books';

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
    <section className="relative z-10 -mt-[22px] bg-[#f6efe9] pt-[42px] lg:mt-[-40px] lg:pt-[72px]">
      <div className="pointer-events-none absolute left-0 top-[-18px] w-full lg:top-[-66px]">
        <img src={zigzag} alt="" className="w-full h-auto block" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center gap-8 px-3 pb-12 sm:px-6 lg:gap-12 lg:px-8 lg:pb-20">
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

        <div className="mx-auto grid w-fit grid-cols-2 gap-x-12 gap-y-8 lg:hidden">
          {books.map((book, index) => (
            <Link key={`${book.title}-${index}-mobile`} to={book.path} className="flex w-[126px] flex-col items-start gap-1.5">
              <div className="relative w-full overflow-hidden shadow-[3px_4px_8px_0px_rgba(0,0,0,0.14)]">
                <img src={book.cover} alt={book.title} className="block w-full h-auto object-cover" />
              </div>
              <div className="flex w-full items-end justify-between gap-1 min-h-[22px]">
                <span className="flex-1 pr-1 font-['Sedan_SC'] text-[7px] leading-[1.2] text-black">
                  {book.displayTitle}
                </span>
                <div className="flex h-[12px] flex-shrink-0 items-center gap-0.5 rounded-[31px] bg-[#b83431] px-1.5">
                  <span className="font-['Sedan_SC'] text-[6px] leading-none text-white">{book.rating}</span>
                  <img src={starIcon} alt="star" className="h-[5px] w-[5px]" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="hidden w-full overflow-hidden lg:block" style={{ maxWidth: `${viewportWidth}px` }}>
          <div
            className="flex gap-[60px] items-end transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {books.map((book, index) => (
              <Link key={`${book.title}-${index}`} to={book.path} className="flex flex-col gap-6 items-start w-[286px] shrink-0">
                <div className="relative w-full h-[429px] shadow-[8px_9px_10px_0px_rgba(0,0,0,0.25)]">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-start justify-between w-full gap-3 min-h-[88px]">
                  <span className="font-['Sedan_SC'] text-black text-xl leading-[34px] flex-1">
                    {book.displayTitle}
                  </span>
                  <RatingBadge rating={book.rating} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
