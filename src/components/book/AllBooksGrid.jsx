import { Link } from 'react-router-dom';
import starIcon from '../../assets/images/star.svg';
import oneSmoothStoneCover from '../../assets/images/onesmoothstone.jpeg';
import { ancientSeriesBooks, mysterySeriesBooks } from '../../lib/books';

const cardClassName = 'group flex w-full max-w-[286px] flex-col gap-3 lg:gap-[46px]';
const coverClassName =
  'aspect-[2/3] w-full overflow-hidden shadow-[4px_5px_8px_0px_rgba(0,0,0,0.22)] lg:shadow-[8px_9px_10px_0px_rgba(0,0,0,0.25)]';
const titleClassName =
  "font-['Sedan_SC'] text-[11px] leading-[1.35] text-black sm:text-[13px] lg:text-[20px] lg:leading-[29px]";
const headingClassName =
  "font-['Sedan_SC'] text-[24px] leading-[1.1] text-black lg:text-[32px] lg:leading-[34px]";

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

function BookCard({ book }) {
  return (
    <Link to={book.path} className={cardClassName}>
      <div className={coverClassName}>
        <img
          src={book.cover}
          alt={book.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-start justify-between gap-2 lg:min-h-[58px] lg:gap-[32px]">
        <span className={titleClassName}>{book.displayTitle}</span>
        <RatingBadge rating={book.rating} />
      </div>
    </Link>
  );
}

function ComingSoonCard({ title, note, cover }) {
  return (
    <div className={cardClassName}>
      <div className={coverClassName}>
        <img src={cover} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="flex items-start justify-between gap-2 lg:min-h-[58px] lg:gap-[32px]">
        <span className={titleClassName}>
          {title.toUpperCase()} – {note.toUpperCase()}
        </span>
      </div>
    </div>
  );
}

function BookGrid({ children }) {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-8 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-[51px] lg:gap-y-[52px]">
      {children}
    </div>
  );
}

export default function AllBooksGrid() {
  return (
    <section className="bg-[#f6efe9] px-4 py-12 sm:px-6 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:gap-[52px]">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <h1 className={headingClassName}>
            Book Excellence Awards 2025: The Dr. Lindsey McCall Medical Mystery Series – Books in a
            Series
          </h1>
        </div>

        <BookGrid>
          {mysterySeriesBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </BookGrid>

        <div className="mx-auto mt-4 flex max-w-[686px] flex-col items-center text-center lg:mt-12">
          <h2 className={headingClassName}>The Ancient Novel Series</h2>
        </div>

        <BookGrid>
          {ancientSeriesBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
          <ComingSoonCard
            title="One Smooth Stone"
            note="Coming Spring 2027"
            cover={oneSmoothStoneCover}
          />
        </BookGrid>
      </div>
    </section>
  );
}
