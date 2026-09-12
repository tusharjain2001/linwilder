import { useState } from 'react';
import { Link } from 'react-router-dom';
import starIcon from '../../assets/images/star.svg';
import chevronLeft from '../../assets/images/chevron-left.svg';
import chevronRight from '../../assets/images/chevron-right.svg';
import { listingBooks } from '../../lib/books';

const PAGE_SIZE = 12;

function RatingBadge({ rating }) {
  return (
    <div className="flex h-[18px] flex-shrink-0 items-center gap-0.5 rounded-[31px] bg-[#b83431] px-1.5 lg:h-[27px] lg:gap-[3px] lg:px-2.5 lg:pb-1.5">
      <span className="font-['Sedan_SC'] text-[10px] leading-none text-white sm:text-[12px] lg:text-[28px] lg:leading-[26px]">
        {rating}
      </span>
      <img src={starIcon} alt="" className="h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-[17px] lg:w-[17px]" />
    </div>
  );
}

export default function AllBooksGrid() {
  const [page, setPage] = useState(0);
  const pageCount = Math.max(Math.ceil(listingBooks.length / PAGE_SIZE), 1);
  const visibleBooks = listingBooks.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const prev = () => setPage((current) => Math.max(current - 1, 0));
  const next = () => setPage((current) => Math.min(current + 1, pageCount - 1));

  return (
    <section className="bg-[#f6efe9] px-4 py-12 sm:px-6 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:gap-[52px]">
        <div className="mx-auto flex max-w-[686px] flex-col items-center gap-3 text-center lg:gap-5">
          <h1 className="font-['Sedan_SC'] text-[24px] leading-[1.1] text-black lg:text-[32px] lg:leading-[34px]">
            VIEW ALL BOOKS
          </h1>
          <p className="font-['Questrial'] text-[13px] leading-6 text-[#334155] sm:text-[14px] lg:text-[18px] lg:leading-6">
            From award-winning author Lin Wilder comes The Reluctant Queen a powerful blend of
            history and storytelling, praised for its fast-paced and compelling narrative.
          </p>
        </div>

        <div className="hidden justify-end gap-[12.857px] lg:flex">
          <button
            type="button"
            onClick={prev}
            disabled={page === 0}
            className="h-[38.571px] w-[38.571px] transition-opacity disabled:opacity-40"
            aria-label="Previous books"
          >
            <img src={chevronLeft} alt="" className="h-full w-full -scale-y-100 rotate-90" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={page >= pageCount - 1}
            className="h-[38.571px] w-[38.571px] transition-opacity disabled:opacity-40"
            aria-label="Next books"
          >
            <img src={chevronRight} alt="" className="h-full w-full rotate-90" />
          </button>
        </div>

        <div className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-8 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-[51px] lg:gap-y-[52px]">
          {visibleBooks.map((book) => (
            <Link
              key={book.slug}
              to={book.path}
              className="group flex w-full max-w-[286px] flex-col gap-3 lg:gap-[46px]"
            >
              <div className="aspect-[2/3] w-full overflow-hidden shadow-[4px_5px_8px_0px_rgba(0,0,0,0.22)] lg:shadow-[8px_9px_10px_0px_rgba(0,0,0,0.25)]">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-start justify-between gap-2 lg:min-h-[58px] lg:gap-[32px]">
                <span className="font-['Sedan_SC'] text-[11px] leading-[1.35] text-black sm:text-[13px] lg:text-[20px] lg:leading-[29px]">
                  {book.displayTitle}
                </span>
                <RatingBadge rating={book.rating} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
