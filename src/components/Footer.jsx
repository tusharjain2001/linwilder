import emailIcon from '../assets/images/email-icon.svg';
import footerDivider from '../assets/images/footer-divider.svg';
import twitterIcon from '../assets/images/social-twitter.svg';
import facebookIcon from '../assets/images/social-facebook.svg';

const navLinks = ['Home', 'Book', 'About', 'Contact', 'Sunday Reflections', 'Review'];
const booksCol1 = [
  'Fragrance Shed by Violet',
  'Finding The Narrow Path',
  'Do You Solemnly Swear?',
  'Malthus Revisited',
  'A Price for Genius',
  'I, Claudia',
];
const booksCol2 = ['My Name is Saul', 'Plausible Liars', 'The Reluctant Queen'];

export default function Footer() {
  return (
    <footer className="bg-[#592c33] px-16 py-14">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-20">
        {/* Top section */}
        <div className="flex gap-52 items-start">
          {/* Brand info */}
          <div className="flex flex-col gap-4 w-[461px]">
            <div className="flex flex-col gap-1.5">
              <h2 className="font-['Aboreto'] text-[#efd3b1] text-[32px] uppercase leading-[34px]">
                Lin Weeks Wilder
              </h2>
              <p className="font-['Questrial'] text-white text-base leading-[26px]">
                Lin Wilder has a doctorate in Public Health from the UT Houston with a background
                in cardiopulmonary physiology, medical ethics, and hospital administration
              </p>
            </div>
            <span className="font-['Sedan_SC'] text-white text-xl leading-6">Contact Info</span>
            <div className="flex items-center gap-2">
              <img src={emailIcon} alt="Email" className="w-5 h-4 flex-shrink-0" />
              <span className="font-['Questrial'] text-[#f6efe9] text-base leading-5">
                linwilder@gmail.com
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-10 items-start">
            {/* Navigation */}
            <div className="flex flex-col gap-2 w-[142px]">
              <span className="font-['Sedan_SC'] text-[#efd3b1] text-xl leading-6">NAVIGATION</span>
              {navLinks.map((link) => (
                <a key={link} href="#" className="font-['Questrial'] text-white text-base leading-[26px] hover:text-[#efd3b1] transition">
                  {link}
                </a>
              ))}
            </div>

            {/* Books col 1 */}
            <div className="flex flex-col gap-2 w-[195px]">
              <span className="font-['Sedan_SC'] text-[#efd3b1] text-xl leading-6">BOOKS</span>
              {booksCol1.map((book) => (
                <a key={book} href="#" className="font-['Questrial'] text-white text-base leading-[26px] hover:text-[#efd3b1] transition">
                  {book}
                </a>
              ))}
            </div>

            {/* Books col 2 */}
            <div className="flex flex-col gap-2 w-[195px]">
              <span className="font-['Sedan_SC'] text-[#efd3b1] text-xl leading-6">BOOKS</span>
              {booksCol2.map((book) => (
                <a key={book} href="#" className="font-['Questrial'] text-white text-base leading-[26px] hover:text-[#efd3b1] transition">
                  {book}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white opacity-20" />

        {/* Bottom row */}
        <div className="flex items-center justify-between -mt-16">
          <div className="flex items-center gap-52">
            <span className="font-['Inter'] font-normal text-white text-base leading-4">
              Book Author: LIN WILDER
            </span>
            <span className="font-['Inter'] font-normal text-white text-base leading-4 text-center">
              Copyright © 2023. All rights reserved
            </span>
          </div>

          {/* Social icons */}
          <div className="flex gap-5 items-center">
            <button className="bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <img src={twitterIcon} alt="Twitter" className="w-[15px] h-[15px]" style={{ filter: 'invert(21%) sepia(42%) saturate(700%) hue-rotate(310deg) brightness(80%)' }} />
            </button>
            <button className="bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <span className="text-[#592c33] font-['Font_Awesome_5_Brands'] text-[15px] leading-[15px]">&#xf3a9;</span>
            </button>
            <button className="bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <img src={facebookIcon} alt="Facebook" className="w-[15px] h-[15px]" style={{ filter: 'invert(21%) sepia(42%) saturate(700%) hue-rotate(310deg) brightness(80%)' }} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
