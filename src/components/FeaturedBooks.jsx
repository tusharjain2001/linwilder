import { useState } from 'react';
import bookPlausible from '../assets/images/book-plausible-liars.png';
import bookFragrance from '../assets/images/book-fragrance.png';
import bookNarrowPath from '../assets/images/book-narrow-path.png';
import bookSaul from '../assets/images/book-my-name-is-saul.png';
import bookReluctantQueen from '../assets/images/book-reluctant-queen.png';
import bookPriceGenius from '../assets/images/book-price-for-genius.png';
import starIcon from '../assets/images/star.svg';
import chevronLeft from '../assets/images/chevron-left.svg';
import chevronRight from '../assets/images/chevron-right.svg';

const books = [
  { title: 'PLAUSIBLE LIARS', rating: '4.3', cover: bookPlausible },
  { title: 'THE FRAGRANCE SHED BY A VIOLET', rating: '4.3', cover: bookFragrance },
  { title: 'FINDING THE NARROW PATH', rating: '4.7', cover: bookNarrowPath },
  { title: 'MY NAME IS SAUL', rating: '4.7', cover: bookSaul },
  { title: 'THE RELUCTANT QUEEN', rating: '4.8', cover: bookReluctantQueen },
  { title: 'A PRICE FOR GENIUS', rating: '4.6', cover: bookPriceGenius },
  { title: 'PLAUSIBLE LIARS', rating: '4.3', cover: bookPlausible },
  { title: 'THE FRAGRANCE SHED BY A VIOLET', rating: '4.3', cover: bookFragrance },
  { title: 'FINDING THE NARROW PATH', rating: '4.7', cover: bookNarrowPath },
  { title: 'MY NAME IS SAUL', rating: '4.7', cover: bookSaul },
];

function RatingBadge({ rating }) {
  return (
    <div className="bg-[#b83431] flex items-center gap-1 px-2.5 py-1 rounded-[31px] h-[27px]">
      <span className="font-['Sedan_SC'] text-white text-lg leading-[26px]">{rating}</span>
      <img src={starIcon} alt="star" className="w-[17px] h-[17px]" />
    </div>
  );
}

export default function FeaturedBooks() {
  const [startIndex, setStartIndex] = useState(0);
  const visible = 4;
  const cardWidth = 286;
  const gap = 32;
  const peekWidth = Math.round(cardWidth / 2);
  const viewportWidth = visible * cardWidth + (visible - 1) * gap + peekWidth;
  const maxIndex = Math.max(books.length - visible, 0);

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(maxIndex, i + 1));
  const translateX = startIndex * (cardWidth + gap);

  return (
    <section className="bg-[#e4e8d7] py-16">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-8 max-w-[686px] mx-auto text-center">
          <div className="bg-[#b83431] px-6 py-1 rounded-[5px]">
            <p className="font-['Questrial'] text-white text-xl leading-[45px]">
              The Reluctant Queen 1st Place Feathered{' '}
              <span className="text-[#f6efe9]">Quill BEST BOOKS OF 2022!</span>
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-['Sedan_SC'] text-black text-[32px] leading-[34px]">
              FEATURED BOOKS
            </h2>
            <p className="font-['Questrial'] text-[#334155] text-lg leading-6">
              From award-winning author Lin Wilder comes The Reluctant Queen a powerful blend
              of history and storytelling, praised for its fast-paced and compelling narrative.
            </p>
          </div>
        </div>

        {/* Books carousel */}
        <div className="flex flex-col items-center gap-10">
          <div className="w-full overflow-hidden" style={{ maxWidth: `${viewportWidth}px` }}>
            <div
              className="flex items-end gap-8 transition-transform duration-500 ease-out will-change-transform"
              style={{ transform: `translateX(-${translateX}px)` }}
            >
              {books.map((book, i) => (
                <div
                  key={`${book.title}-${i}`}
                  className="flex w-[286px] shrink-0 flex-col gap-6 items-start"
                >
                  <div className="relative w-full h-[429px] shadow-[8px_9px_10px_0px_rgba(0,0,0,0.25)]">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-start gap-4 w-full min-h-[88px]">
                    <span className="font-['Sedan_SC'] text-black text-xl leading-[34px] flex-1">
                      {book.title}
                    </span>
                    <RatingBadge rating={book.rating} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-3 items-center">
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
        </div>
      </div>
    </section>
  );
}
