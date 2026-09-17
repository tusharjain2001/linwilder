import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import starIcon from '../assets/images/star.svg';
import chevronLeft from '../assets/images/chevron-left.svg';
import chevronRight from '../assets/images/chevron-right.svg';
import oneSmoothStoneCover from '../assets/images/onesmoothstone.jpeg';
import { featuredBooks } from '../lib/books';

const carouselBooks = [
  {
    title: 'One Smooth Stone',
    displayTitle: 'ONE SMOOTH STONE – COMING SPRING 2027',
    cover: oneSmoothStoneCover,
  },
  ...featuredBooks,
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
  const [isDesktop, setIsDesktop] = useState(false);
  const desktopVisible = 4;
  const desktopCardWidth = 286;
  const desktopGap = 32;
  const mobileCardWidth = 107;
  const mobileGap = 12;
  const mobileVisible = 3;
  const mobileViewportWidth =
    mobileVisible * mobileCardWidth + (mobileVisible - 1) * mobileGap;
  const desktopPeekWidth = Math.round(desktopCardWidth / 2);
  const desktopViewportWidth =
    desktopVisible * desktopCardWidth +
    (desktopVisible - 1) * desktopGap +
    desktopPeekWidth;
  const maxIndex = Math.max(carouselBooks.length - desktopVisible, 0);
  const mobileMaxIndex = Math.max(carouselBooks.length - 3, 0);
  const activeMaxIndex = isDesktop ? maxIndex : mobileMaxIndex;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const syncViewport = () => setIsDesktop(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener('change', syncViewport);

    return () => mediaQuery.removeEventListener('change', syncViewport);
  }, []);

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(activeMaxIndex, i + 1));
  const desktopTranslateX = startIndex * (desktopCardWidth + desktopGap);
  const mobileTranslateX = startIndex * (mobileCardWidth + mobileGap);

  return (
    <section className="bg-[#e4e8d7] py-12 lg:py-16">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-4 sm:px-6 lg:gap-16 lg:px-8">
        <div className="mx-auto flex max-w-[686px] flex-col items-center gap-6 text-center lg:max-w-[900px] lg:gap-8">
          <h2 className="max-w-[340px] font-['Sedan_SC'] text-[18px] leading-[24px] text-black lg:max-w-none lg:text-[32px] lg:leading-[42px]">
            Dr. Lindsey McCall Medical Mystery Series
          </h2>
          {/* <div className="flex flex-col gap-3 lg:gap-5">
            <h2 className="font-['Sedan_SC'] text-[16px] leading-[22px] text-black lg:text-[32px] lg:leading-[34px]">
              FEATURED BOOKS
            </h2>
            <p className="max-w-[354px] font-['Questrial'] text-[12px] leading-[19px] text-[#334155] lg:max-w-[686px] lg:text-lg lg:leading-6">
              From award-winning author Lin Wilder comes The Reluctant Queen a powerful blend
              of history and storytelling, praised for its fast-paced and compelling narrative.
            </p>
          </div> */}
        </div>

        <div className="flex flex-col items-center gap-8 lg:gap-10">
          <div
            className="w-full overflow-hidden px-[9px] py-5 lg:hidden"
            style={{ maxWidth: `${mobileViewportWidth + 18}px` }}
          >
            <div
              className="flex min-h-[245px] items-start gap-3 transition-transform duration-500 ease-out will-change-transform"
              style={{ transform: `translateX(-${mobileTranslateX}px)` }}
            >
              {carouselBooks.map((book, i) => (
                (() => {
                  const isMobileCenterCard = i === startIndex + 1;
                  const Card = book.path ? Link : 'div';

                  return (
                <Card
                  key={`${book.title}-${i}`}
                  to={book.path}
                  className={`flex shrink-0 flex-col items-start gap-3 transition-transform duration-300 ${
                    isMobileCenterCard ? '-translate-y-3' : ''
                  }`}
                  style={{ width: `${mobileCardWidth}px` }}
                >
                  <div
                    className={`relative w-full overflow-hidden shadow-[6px_7px_12px_0px_rgba(0,0,0,0.22)] transition-all duration-300 ${
                      isMobileCenterCard
                        ? 'h-[178px] shadow-[8px_10px_16px_0px_rgba(0,0,0,0.26)]'
                        : 'h-[164px]'
                    }`}
                  >
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex w-full items-start justify-between gap-2 min-h-[52px]">
                    <span className="flex-1 font-['Sedan_SC'] text-[11px] leading-[1.2] text-black">
                      {book.displayTitle}
                    </span>
                    {book.rating && (
                      <div className="flex h-[20px] shrink-0 items-center gap-1 rounded-[31px] bg-[#b83431] px-1.5">
                        <span className="font-['Sedan_SC'] text-[10px] leading-none text-white">
                          {book.rating}
                        </span>
                        <img src={starIcon} alt="star" className="h-[10px] w-[10px]" />
                      </div>
                    )}
                  </div>
                </Card>
                  );
                })()
              ))}
            </div>
          </div>

          <div
            className="hidden w-full overflow-hidden px-4 py-5 lg:block"
            style={{ maxWidth: `${desktopViewportWidth + 32}px` }}
          >
            <div
              className="flex items-end gap-8 transition-transform duration-500 ease-out will-change-transform"
              style={{ transform: `translateX(-${desktopTranslateX}px)` }}
            >
              {carouselBooks.map((book, i) => {
                const Card = book.path ? Link : 'div';

                return (
                <Card
                  key={`${book.title}-${i}-desktop`}
                  to={book.path}
                  className="flex w-[286px] shrink-0 flex-col gap-6 items-start"
                >
                  <div className="relative h-[429px] w-full shadow-[8px_9px_10px_0px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-105 hover:shadow-[14px_18px_24px_0px_rgba(0,0,0,0.28)]">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="h-full w-full object-cover"
                    />
                    {book.rating && (
                      <div className="absolute right-3 top-3">
                        <RatingBadge rating={book.rating} />
                      </div>
                    )}
                  </div>
                  <div className="min-h-[72px] w-full">
                    <span className="block font-['Sedan_SC'] text-xl leading-[34px] text-black">
                      {book.displayTitle}
                    </span>
                  </div>
                </Card>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={startIndex === 0}
              className="flex h-[48px] w-[48px] items-center justify-center disabled:opacity-40"
            >
              <img src={chevronLeft} alt="Previous" className="h-8 w-8 -scale-y-100 rotate-90 lg:h-full lg:w-full" />
            </button>
            <button
              onClick={next}
              disabled={startIndex >= activeMaxIndex}
              className="flex h-[48px] w-[48px] items-center justify-center disabled:opacity-40"
            >
              <img src={chevronRight} alt="Next" className="h-8 w-8 rotate-90 lg:h-full lg:w-full" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
