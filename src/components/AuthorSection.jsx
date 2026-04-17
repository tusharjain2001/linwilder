import authorPhoto from '../assets/images/author-photo.svg';
import authorSignature from '../assets/images/author-signature.png';
import arrowRight from '../assets/images/arrow-right-dark.svg';

export default function AuthorSection() {
  return (
    <section className="bg-[#efd3b1] overflow-hidden mt-[-48px]">
      <div className=" flex items-stretch justify-between min-h-[635px]">
        {/* Left content */}
        <div className="flex flex-col gap-[18px] justify-center pl-16 pr-8 py-16 flex-1 max-w-[680px]">
          <div className="flex flex-col gap-2.5">
            <h2 className="font-['Aboreto'] text-[#592c33] text-[48px] uppercase leading-[107px]">
              Lin Wilder
            </h2>
            <p className="font-['Abhaya_Libre'] text-black text-[36px] leading-[16px]">
              A Fiction Novelist based in Texas
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <p className="font-['Questrial'] text-[#595959] text-lg leading-8">
              Lin Wilder has a doctorate in Public Health from the UT Houston with a background
              in cardiopulmonary physiology, medical ethics, and hospital administration. During
              her thirty-plus years in academic health care administration, Lin authored numerous
              texts in these fields.
            </p>
            <div className="flex items-center gap-2 border-b border-[#592c33] pb-0.5 self-start mt-2">
              <span className="font-['Questrial'] text-[#592c33] text-lg whitespace-nowrap">
                Read More about the Author
              </span>
              <img src={arrowRight} alt="" className="w-6 h-6 rotate-90" />
            </div>
          </div>

          {/* Signature */}
          <div className="mt-2">
            <img
              src={authorSignature}
              alt="Lin Wilder signature"
              className="w-[276px] h-[138px] object-contain"
            />
          </div>
        </div>

        {/* Right: author photo with gradient overlay */}
        <div className="relative flex-1 flex items-end justify-end">
          {/* Left gradient fade */}
          
          <img
            src={authorPhoto}
            alt="Lin Wilder"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
