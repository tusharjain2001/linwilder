import authorPhoto from '../assets/images/author-photo.svg';
import authorSignature from '../assets/images/author-signature.png';
import arrowRight from '../assets/images/arrow-right-dark.svg';

export default function AuthorSection() {
  return (
    <section className="relative mt-0 overflow-hidden bg-[#efd3b1] pb-0 lg:mt-[-48px] lg:pb-0">
      <div className="hidden min-h-[635px] items-stretch justify-between lg:flex">
        {/* Left content */}
        <div className="flex flex-col gap-[18px] justify-center ml-20 pl-16 pr-8 py-16 flex-1 max-w-[680px]">
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

      <div className="relative mx-auto flex max-w-[430px] flex-col items-center px-5 py-10 text-center lg:hidden">
        <h2 className="font-['Aboreto'] text-[28px] leading-[1.2] uppercase tracking-[0.06em] text-[#592c33]">
          Lin Wilder
        </h2>
        <p className="mt-3 font-['Abhaya_Libre'] text-[20px] leading-[1.2] text-black">
          A Fiction Novelist based in Texas
        </p>

        <p className="mt-8 font-['Questrial'] text-[16px] leading-8 text-[#595959]">
          Lin Wilder has a doctorate in Public Health from the UT Houston with a background in
          cardiopulmonary physiology, medical ethics, and hospital administration. During her
          thirty-plus years in academic health care administration, Lin authored numerous texts in
          these fields.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 border-b border-[#592c33] pb-0.5">
          <span className="font-['Questrial'] text-[15px] text-[#592c33]">
            Read More about the Author
          </span>
          <img src={arrowRight} alt="" className="h-5 w-5 rotate-90" />
        </div>

        <div className="mt-7">
          <img
            src={authorSignature}
            alt="Lin Wilder signature"
            className="h-auto w-[140px] object-contain"
          />
        </div>
      </div>

      {/* <img
        src={tornEdge}
        alt=""
        aria-hidden="true"
        className="block w-full rotate-180 aspect-1606/126 lg:hidden"
      /> */}
    </section>
  );
}
