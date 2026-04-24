import emailIcon from "../assets/images/email-icon.svg";
import twitterIcon from "../assets/images/red-twitter.svg";
import amazonIcon from "../assets/images/red-amazon.svg";
import googleIcon from "../assets/images/red-google.svg";

const navLinks = [
  "Home",
  "Book",
  "About",
  "Contact",
  "Sunday Reflections",
  "Review",
];

const booksCol1 = [
  "Fragrance Shed by Violet",
  "Finding The Narrow Path",
  "Do You Solemnly Swear?",
  "Malthus Revisited",
  "A Price for Genius",
  "I, Claudia",
];

const booksCol2 = ["My Name is Saul", "Plausible Liars", "The Reluctant Queen"];

const socialLinks = [
  { href: "https://x.com/LinWilder", icon: twitterIcon, alt: "X" },
  {
    href: "https://www.goodreads.com/author/show/7944373.Lin_Wilder",
    icon: googleIcon,
    alt: "Goodreads",
  },
  {
    href: "https://www.amazon.com/stores/Dr.-Lin-Wilder/author/B007L380OM?ref=ap_rdr&store_ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true",
    icon: amazonIcon,
    alt: "Amazon",
  },
];

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#592c33] px-4 py-10 sm:px-6 lg:px-16 lg:py-14">
      <div className="mx-auto max-w-[1300px]">
        <div className="flex flex-col items-center text-center lg:hidden">
          <h2 className="font-['Aboreto'] text-[22px] uppercase leading-[1.2] tracking-[0.08em] text-[#efd3b1]">
            Lin Weeks Wilder
          </h2>

          <p className="mt-4 max-w-[338px] font-['Questrial'] text-[12px] leading-[16px] tracking-[0.48px] text-white">
            Lin Wilder has a doctorate in Public Health from the UT Houston with a background in
            cardiopulmonary physiology, medical ethics, and hospital administration
          </p>

          <div className="mt-6 flex flex-col items-center gap-2">
            <span className="font-['Sedan_SC'] text-[16px] uppercase leading-6 text-white">
              Contact Info
            </span>
            <div className="flex items-center gap-2">
              <img src={emailIcon} alt="Email" className="h-3 w-[13px] shrink-0" />
              <span className="font-['Questrial'] text-[12px] leading-5 text-[#f6efe9]">
                linwilder@gmail.com
              </span>
            </div>
          </div>

          <div className="mt-8 grid w-full max-w-[340px] grid-cols-2 gap-8 text-left">
            <div className="flex flex-col gap-1.5">
              <span className="font-['Sedan_SC'] text-[16px] leading-6 text-[#efd3b1]">
                NAVIGATION
              </span>
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-['Questrial'] text-[12px] leading-[24px] text-white transition hover:text-[#efd3b1]"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-['Sedan_SC'] text-[16px] leading-6 text-[#efd3b1]">
                BOOKS
              </span>
              {[...booksCol1, ...booksCol2].map((book) => (
                <a
                  key={book}
                  href="#"
                  className="font-['Questrial'] text-[12px] leading-[24px] text-white transition hover:text-[#efd3b1]"
                >
                  {book}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {socialLinks.map(({ href, icon, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-[31px] w-[31px] items-center justify-center rounded-full bg-white"
                aria-label={alt}
              >
                <img src={icon} alt={alt} className="h-[15px] w-[15px]" />
              </a>
            ))}
          </div>

          <div className="mt-8 h-px w-[360px] bg-white opacity-20" />

          <div className="mt-3 flex w-full justify-between gap-4 text-left">
            <span className="font-['Inter'] text-[10px] leading-4 text-white">
              Book Author: LIN WILDER
            </span>
            <span className="font-['Inter'] text-[10px] leading-4 text-white text-right">
              Copyright © 2023. All rights reserved
            </span>
          </div>
        </div>

        <div className="hidden flex-col gap-20 lg:flex">
          <div className="flex items-start gap-52">
            <div className="flex w-[461px] flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <h2 className="font-['Aboreto'] text-[32px] uppercase leading-[34px] text-[#efd3b1]">
                  Lin Weeks Wilder
                </h2>
                <p className="font-['Questrial'] text-base leading-[26px] text-white">
                  Lin Wilder has a doctorate in Public Health from the UT Houston with a
                  background in cardiopulmonary physiology, medical ethics, and hospital
                  administration
                </p>
              </div>

              <span className="font-['Sedan_SC'] text-lg uppercase leading-6 text-white">
                Contact Info
              </span>

              <div className="flex items-center gap-2">
                <img src={emailIcon} alt="Email" className="h-4 w-5 flex-shrink-0" />
                <span className="font-['Questrial'] text-base leading-5 text-[#f6efe9]">
                  linwilder@gmail.com
                </span>
              </div>
            </div>

            <div className="flex items-start gap-10">
              <div className="flex w-[142px] flex-col gap-2">
                <span className="font-['Sedan_SC'] text-xl leading-6 text-[#efd3b1]">
                  NAVIGATION
                </span>
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="font-['Questrial'] text-base leading-[26px] text-white transition hover:text-[#efd3b1]"
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div className="flex w-[195px] flex-col gap-2">
                <span className="font-['Sedan_SC'] text-xl leading-6 text-[#efd3b1]">
                  BOOKS
                </span>
                {booksCol1.map((book) => (
                  <a
                    key={book}
                    href="#"
                    className="font-['Questrial'] text-base leading-[26px] text-white transition hover:text-[#efd3b1]"
                  >
                    {book}
                  </a>
                ))}
              </div>

              <div className="flex w-[195px] flex-col gap-2">
                <span className="font-['Sedan_SC'] text-xl leading-6 text-[#efd3b1]">
                  BOOKS
                </span>
                {booksCol2.map((book) => (
                  <a
                    key={book}
                    href="#"
                    className="font-['Questrial'] text-base leading-[26px] text-white transition hover:text-[#efd3b1]"
                  >
                    {book}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white opacity-20" />

          <div className="-mt-16 flex items-center justify-between">
            <div className="flex items-center gap-52">
              <span className="font-['Inter'] text-base leading-4 text-white">
                Book Author: LIN WILDER
              </span>
              <span className="font-['Inter'] text-center text-base leading-4 text-white">
                Copyright © 2023. All rights reserved
              </span>
            </div>

            <div className="flex items-center gap-5">
              {socialLinks.map(({ href, icon, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white"
                  aria-label={alt}
                >
                  <img src={icon} alt={alt} className="h-[15px] w-[15px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
