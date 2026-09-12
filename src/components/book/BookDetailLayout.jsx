import { useEffect, useState } from 'react';
import heroEllipse from '../../assets/images/book/hero-ellipse.svg';
import starRating from '../../assets/images/book/star-rating.svg';
import arrowRight from '../../assets/images/arrow-right.svg';
import TrailerModal from './TrailerModal';

export default function BookDetailLayout({
  book,
  description = [],
  ratingText = `${book.rating}/5`,
  reviews = [],
  buyUrl,
  trailer,
  reviewsTitle = 'What other readers think',
}) {
  const [perView, setPerView] = useState(1);
  const [slide, setSlide] = useState(0);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const sync = () => setPerView(desktop.matches ? 3 : 1);

    sync();
    desktop.addEventListener('change', sync);

    return () => desktop.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    setSlide(0);
  }, [perView, reviews]);

  const slideCount = Math.max(Math.ceil(reviews.length / perView), 1);

  return (
    <>
      <section className="bg-[#e4e8d7] px-4 py-12 sm:px-6 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1296px] flex-col items-center gap-10 lg:flex-row lg:gap-[50px]">
          <div className="relative w-full max-w-[280px] shrink-0 sm:max-w-[340px] lg:max-w-[476px]">
            <img
              src={heroEllipse}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-1/2 aspect-square w-full -translate-y-1/2"
            />
            <img
              src={book.cover}
              alt={book.title}
              className="relative mx-auto block w-[70.6%] shadow-[5px_5px_4px_0px_rgba(0,0,0,0.25)]"
            />
          </div>

          <div className="flex w-full flex-col gap-6 lg:max-w-[770px] lg:gap-8">
            <div className="flex flex-col gap-3 lg:gap-[18px]">
              <h1 className="font-['Aboreto'] text-[26px] uppercase leading-[1.3] text-[#111] sm:text-[32px] lg:max-w-[422px] lg:text-[40px] lg:leading-[53px]">
                {book.title}
              </h1>
              <div className="flex items-center gap-2 lg:gap-[8.4px]">
                <img
                  src={starRating}
                  alt=""
                  aria-hidden="true"
                  className="h-[15px] w-[106px] lg:h-[17.25px] lg:w-[121.75px]"
                />
                <span className="font-['Questrial'] text-[16px] text-[#b83431] lg:text-[19.2px]">
                  {ratingText}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 font-['Questrial'] text-[14px] leading-[24px] text-black sm:text-[15px] lg:gap-[26px] lg:text-justify lg:text-[16px] lg:leading-[26.4px]">
              {description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 lg:gap-6">
              <a
                href={buyUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-[42px] items-center justify-center gap-2.5 rounded-[5px] bg-[#592c33] px-5 transition hover:opacity-90"
              >
                <span className="font-['Questrial'] text-[13px] uppercase leading-[31px] text-white lg:text-[16px]">
                  Buy this book
                </span>
                <img src={arrowRight} alt="" className="h-6 w-6 rotate-90 brightness-0 invert" />
              </a>
              {trailer && (
                <button
                  type="button"
                  onClick={() => setIsTrailerOpen(true)}
                  className="flex h-[42px] items-center justify-center rounded-[5px] border border-[#592c33] px-5 transition hover:bg-[#592c33]/5"
                >
                  <span className="font-['Questrial'] text-[13px] uppercase leading-[31px] text-[#592c33] lg:text-[16px]">
                    Watch book trailer
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6efe9] px-4 py-12 sm:px-6 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 lg:gap-[21px]">
          <div className="flex w-full flex-col gap-6 lg:gap-[56px]">
            <h2 className="font-['Aboreto'] text-[22px] uppercase leading-[1.3] text-[#111] lg:text-[40px] lg:leading-[53px]">
              {reviewsTitle}
            </h2>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={`${review.author}-${index}`}
                    className="w-full shrink-0 lg:w-1/3 lg:px-[9px]"
                  >
                    <div className="flex h-full flex-col gap-4 rounded-[12px] bg-[#efd3b1]/30 px-6 py-8 lg:px-10 lg:py-[60px]">
                      <p className="font-['Questrial'] text-[14px] leading-[24px] text-black lg:text-justify lg:text-[18px] lg:leading-[26.4px]">
                        {review.text}
                      </p>
                      <p className="font-['Questrial'] text-[14px] text-[#b83431] lg:text-[18px]">
                        {review.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[6px]">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSlide(index)}
                className={`h-[12px] w-[12px] rounded-full transition-colors ${
                  index === slide ? 'bg-[#b83431]' : 'bg-[#592c33]/20'
                }`}
                aria-label={`Show reviews ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {isTrailerOpen && trailer && (
        <TrailerModal
          trailer={trailer}
          title={book.title}
          onClose={() => setIsTrailerOpen(false)}
        />
      )}
    </>
  );
}
