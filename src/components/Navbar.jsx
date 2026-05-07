import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import searchIcon from '../assets/images/search.svg';
import twitterIcon from '../assets/images/social-twitter.svg';
import amazonIcon from '../assets/images/social-amazon.svg';
import googleIcon from '../assets/images/social-google.svg';
import { books } from '../lib/books';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Sunday Reflections', path: '/sunday-reflections' },
  { label: 'Review', path: '/review' },
  { label: 'Contact', path: '/contact' },
];

const socialLinks = [
  { href: 'https://x.com/LinWilder', icon: twitterIcon, alt: 'X' },
  {
    href: 'https://www.goodreads.com/author/show/7944373.Lin_Wilder',
    icon: googleIcon,
    alt: 'Goodreads',
  },
  {
    href: 'https://www.amazon.com/stores/Dr.-Lin-Wilder/author/B007L380OM?ref=ap_rdr&store_ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true',
    icon: amazonIcon,
    alt: 'Amazon',
  },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBooksOpen, setIsBooksOpen] = useState(false);
  const [isMobileBooksOpen, setIsMobileBooksOpen] = useState(false);
  const booksMenuRef = useRef(null);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsBooksOpen(false);
    setIsMobileBooksOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!booksMenuRef.current?.contains(event.target)) {
        setIsBooksOpen(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);

    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  const isBookRoute = pathname.startsWith('/book/');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f6efe9] px-4 pt-5 pb-3 sm:px-6 lg:px-16 lg:pt-10 lg:pb-4">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-4 lg:gap-5">
        <div className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <div className="hidden lg:block" />
          <Link to="/" className="min-w-0 lg:justify-self-center">
            <h1 className="font-['Aboreto'] text-[#82483d] text-[22px] uppercase tracking-[0.14em] leading-none sm:text-[26px] lg:text-5xl lg:tracking-wide">
              Lin Weeks Wilder
            </h1>
          </Link>
          <div className="hidden items-center gap-4 justify-self-end lg:flex">
            <img src={searchIcon} alt="Search" className="w-8 h-8 cursor-pointer" />
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#592c33] w-[30px] h-[30px] rounded-full flex items-center justify-center"
                  aria-label={alt}
                >
                  <img src={icon} alt={alt} className="w-[15px] h-[15px]" />
                </a>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#82483d] lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="flex flex-col gap-[5px]">
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${
                  isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-opacity ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${
                  isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        <div className="hidden h-px w-full bg-[#592c33] opacity-30 lg:block" />

        <nav className="hidden items-center justify-center gap-10 lg:flex">
          <Link
            to="/"
            className={`font-['Questrial'] text-[#592c33] text-xl uppercase whitespace-nowrap border-b pb-1 hover:opacity-70 transition-opacity ${
              pathname === '/' ? 'border-[#592c33]' : 'border-transparent'
            }`}
          >
            Home
          </Link>

          <div className="relative" ref={booksMenuRef}>
            <button
              type="button"
              className={`flex items-center gap-2 font-['Questrial'] text-[#592c33] text-xl uppercase whitespace-nowrap border-b pb-1 hover:opacity-70 transition-opacity ${
                isBookRoute ? 'border-[#592c33]' : 'border-transparent'
              }`}
              onClick={() => setIsBooksOpen((open) => !open)}
            >
              <span>Book</span>
              <span
                aria-hidden="true"
                className={`transition-transform duration-200 ${isBooksOpen ? 'rotate-180' : ''}`}
              >
                <svg viewBox="0 0 12 12" className="h-3 w-3 fill-current">
                  <path d="M1.4 3.8 6 8.2l4.6-4.4.9.9L6 9.8.5 4.7l.9-.9Z" />
                </svg>
              </span>
            </button>

            {isBooksOpen && (
              <div className="absolute left-1/2 top-full mt-4 w-[290px] -translate-x-1/2 overflow-hidden rounded-sm border border-[#592c33]/15 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
                {books.map((book) => (
                  <Link
                    key={book.slug}
                    to={book.path}
                    className="block border-b border-[#592c33]/10 px-5 py-4 font-['Questrial'] text-[16px] leading-5 text-[#111] transition-colors hover:bg-[#f6efe9] last:border-b-0"
                  >
                    {book.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map(({ label, path }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={label}
                to={path}
                className={`font-['Questrial'] text-[#592c33] text-xl uppercase whitespace-nowrap border-b pb-1 hover:opacity-70 transition-opacity ${
                  isActive ? 'border-[#592c33]' : 'border-transparent'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {isMenuOpen && (
          <nav className="flex flex-col gap-2 border-t border-[#592c33]/20 pt-4 lg:hidden">
            <Link
              to="/"
              className={`font-['Questrial'] text-[17px] uppercase tracking-[0.08em] py-2 transition-opacity ${
                pathname === '/' ? 'text-[#592c33]' : 'text-[#82483d]'
              }`}
            >
              Home
            </Link>

            <button
              type="button"
              className={`flex items-center justify-between py-2 text-left font-['Questrial'] text-[17px] uppercase tracking-[0.08em] transition-opacity ${
                isBookRoute ? 'text-[#592c33]' : 'text-[#82483d]'
              }`}
              onClick={() => setIsMobileBooksOpen((open) => !open)}
            >
              <span className="flex items-center gap-2">
                <span>Book</span>
                <span
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${isMobileBooksOpen ? 'rotate-180' : ''}`}
                >
                  <svg viewBox="0 0 12 12" className="h-3 w-3 fill-current">
                    <path d="M1.4 3.8 6 8.2l4.6-4.4.9.9L6 9.8.5 4.7l.9-.9Z" />
                  </svg>
                </span>
              </span>
              <span className="sr-only">
                {isMobileBooksOpen ? 'Collapse books menu' : 'Expand books menu'}
              </span>
            </button>

            {isMobileBooksOpen && (
              <div className="flex flex-col rounded-sm bg-white/60">
                {books.map((book) => (
                  <Link
                    key={book.slug}
                    to={book.path}
                    className="border-b border-[#592c33]/10 px-3 py-3 font-['Questrial'] text-[15px] leading-5 text-[#592c33] last:border-b-0"
                  >
                    {book.title}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(1).map(({ label, path }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={label}
                  to={path}
                  className={`font-['Questrial'] text-[17px] uppercase tracking-[0.08em] py-2 transition-opacity ${
                    isActive ? 'text-[#592c33]' : 'text-[#82483d]'
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            <div className="mt-3 flex items-center gap-3">
              {socialLinks.map(({ href, icon, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#592c33]"
                  aria-label={alt}
                >
                  <img src={icon} alt={alt} className="h-[15px] w-[15px]" />
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
