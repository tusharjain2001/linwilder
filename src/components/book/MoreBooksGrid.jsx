import { useState } from 'react';
import sectionBanner from '../../assets/images/book/section-banner.svg';
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
  const [page, setPage] = useState(0);
  const perPage = 4;
  const totalPages = Math.ceil(books.length / perPage);
  const visible = books.slice(page * perPage, (page + 1) * perPage);

  return (
    <section className="bg-[#f6efe9] relative">
      {/* Decorative banner strip */}
      <div className="w-full overflow-hidden h-[123px]">
        <img src={sectionBanner} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 pb-20 flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 text-center max-w-[686px]">
          <h2 className="font-['Sedan_SC'] text-black text-[32px] leading-[34px]">
            VIEW MORE BOOKS
          </h2>
          <p className="font-['Questrial'] text-[#334155] text-lg leading-6">
            From award-winning author Lin Wilder comes The Reluctant Queen a powerful blend of
            history and storytelling, praised for its fast-paced and compelling narrative.
          </p>
        </div>

        {/* Pagination arrows (top right) */}
        <div className="flex gap-3 self-end">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-[38px] h-[38px] flex items-center justify-center disabled:opacity-40"
          >
            <img src={chevronLeft} alt="Previous" className="w-full h-full -scale-y-100 rotate-90" />
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
            className="w-[38px] h-[38px] flex items-center justify-center disabled:opacity-40"
          >
            <img src={chevronRight} alt="Next" className="w-full h-full rotate-90" />
          </button>
        </div>

        {/* Books grid */}
        <div className="flex gap-12 items-end justify-center w-full">
          {visible.map((book) => (
            <div key={book.title} className="flex flex-col gap-6 items-start w-[286px]">
              <div className="relative w-full h-[429px] shadow-[8px_9px_10px_0px_rgba(0,0,0,0.25)]">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between w-full gap-3">
                <span className="font-['Sedan_SC'] text-black text-xl leading-[34px]">
                  {book.title}
                </span>
                <RatingBadge rating={book.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
