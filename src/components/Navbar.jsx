import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import searchIcon from '../assets/images/search.svg';
import twitterIcon from '../assets/images/social-twitter.svg';
import amazonIcon from '../assets/images/social-amazon.svg';
import googleIcon from '../assets/images/social-google.svg';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Book', path: '/book' },
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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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
          {navLinks.map(({ label, path }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={label}
                to={path}
                className={`font-['Questrial'] text-[#592c33] text-2xl uppercase whitespace-nowrap border-b pb-1 hover:opacity-70 transition-opacity ${
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
            {navLinks.map(({ label, path }) => {
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
