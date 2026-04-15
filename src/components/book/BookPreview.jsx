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
    <section className="bg-[#592c33] py-16 px-8">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-8 items-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 text-center max-w-[686px]">
          <h2 className="font-['Sedan_SC'] text-white text-[32px] leading-[34px]">
            BOOK PREVIEW
          </h2>
          <p className="font-['Questrial'] text-[#f6efe9] text-lg leading-6">
            Explore a few snippets from the book to know if the books suits you!
          </p>
        </div>

        {/* Preview carousel */}
        <div className="flex items-center gap-[190px] w-full justify-center">
          <button
            onClick={prev}
            disabled={currentPage === 1}
            className="flex-shrink-0 w-[38px] h-[38px] disabled:opacity-40"
          >
            <img
              src={chevronLeft}
              alt="Previous page"
              className="w-full h-full -scale-y-100 rotate-90"
            />
          </button>

          <div className="flex-shrink-0 rounded overflow-hidden shadow-lg">
            <img
              src={previewPages}
              alt={`Book preview page ${currentPage}`}
              className="w-[839px] h-[544px] object-cover"
            />
          </div>

          <button
            onClick={next}
            disabled={currentPage === TOTAL_PAGES}
            className="flex-shrink-0 w-[38px] h-[38px] disabled:opacity-40"
          >
            <img
              src={chevronRight}
              alt="Next page"
              className="w-full h-full rotate-90"
            />
          </button>
        </div>

        {/* Page counter */}
        <div className="flex flex-col items-center font-['Questrial'] text-center">
          <span className="text-[#efd3b1] text-2xl leading-6">
            {String(currentPage).padStart(2, '0')}/{TOTAL_PAGES}
          </span>
          <span className="text-[#f6efe9] text-base leading-6 mt-1">Pages Completed</span>
        </div>
      </div>
    </section>
  );
}
