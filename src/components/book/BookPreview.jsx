import { useState } from 'react';
import previewPages from '../../assets/images/book/preview-pages.png';
import chevronLeft from '../../assets/images/chevron-left.svg';
import chevronRight from '../../assets/images/chevron-right.svg';

const TOTAL_PAGES = 345;

export default function BookPreview() {
  const [currentPage, setCurrentPage] = useState(1);

  const prev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const next = () => setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1));

  return (
    <section className="bg-[#592c33] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-6 lg:gap-8">
        <div className="flex max-w-[686px] flex-col items-center gap-3 text-center lg:gap-5">
          <h2 className="font-['Sedan_SC'] text-[24px] leading-[1.1] text-white lg:text-[32px] lg:leading-[34px]">
            BOOK PREVIEW
          </h2>
          <p className="font-['Questrial'] text-[12px] leading-5 text-[#f6efe9] lg:text-lg lg:leading-6">
            Explore a few snippets from the book to know if the books suits you!
          </p>
        </div>

        <div className="flex w-full items-center justify-center gap-3 lg:gap-[190px]">
          <button
            onClick={prev}
            disabled={currentPage === 1}
            className="h-[26px] w-[26px] flex-shrink-0 disabled:opacity-40 lg:h-[38px] lg:w-[38px]"
          >
            <img
              src={chevronLeft}
              alt="Previous page"
              className="h-full w-full -scale-y-100 rotate-90 brightness-0 invert"
            />
          </button>

          <div className="flex-shrink-0 overflow-hidden rounded shadow-lg">
            <img
              src={previewPages}
              alt={`Book preview page ${currentPage}`}
              className="h-auto w-[260px] object-cover sm:w-[320px] lg:h-[544px] lg:w-[839px]"
            />
          </div>

          <button
            onClick={next}
            disabled={currentPage === TOTAL_PAGES}
            className="h-[26px] w-[26px] flex-shrink-0 disabled:opacity-40 lg:h-[38px] lg:w-[38px]"
          >
            <img
              src={chevronRight}
              alt="Next page"
              className="w-full h-full rotate-90 brightness-0 invert"
            />
          </button>
        </div>

        <div className="flex flex-col items-center font-['Questrial'] text-center">
          <span className="text-[14px] leading-6 text-[#efd3b1] lg:text-2xl">
            {String(currentPage).padStart(2, '0')}/{TOTAL_PAGES}
          </span>
          <span className="mt-1 text-[9px] leading-4 text-[#f6efe9] lg:text-base lg:leading-6">Pages Completed</span>
        </div>
      </div>
    </section>
  );
}
