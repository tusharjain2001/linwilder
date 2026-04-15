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

  return (
    <header className="w-full bg-[#f6efe9] px-16 pt-10 pb-4">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-5">
        {/* Top row: logo + icons */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <div />
          <Link to="/" className="justify-self-center">
            <h1 className="font-['Aboreto'] text-[#82483d] text-5xl uppercase tracking-wide leading-none">
              Lin Weeks Wilder
            </h1>
          </Link>
          <div className="flex items-center gap-4 justify-self-end">
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
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#592c33] opacity-30" />

        {/* Nav links */}
        <nav className="flex items-center justify-center gap-10">
          {navLinks.map(({ label, path }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={label}
                to={path}
                className={`font-['Questrial'] text-[#592c33] text-2xl whitespace-nowrap border-b pb-1 hover:opacity-70 transition-opacity ${
                  isActive ? 'border-[#592c33]' : 'border-transparent'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
