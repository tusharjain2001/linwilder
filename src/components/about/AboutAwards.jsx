import award1 from '../../assets/images/about/award-1.svg';
import award2 from '../../assets/images/about/award-2.svg';
import award3 from '../../assets/images/about/award-3.svg';

export default function AboutAwards() {
  return (
    <section className="bg-[#592c33] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex max-w-[686px] flex-col items-center gap-8 lg:gap-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-['Questrial'] text-[12px] uppercase tracking-wide text-white lg:text-xl lg:leading-[26px]">
            AWARDS AND RECOGNITIONS
          </p>
          <h2 className="max-w-[280px] font-['Sedan_SC'] text-[24px] leading-[1.15] text-white lg:max-w-none lg:text-[32px] lg:leading-[34px]">
            RECOGNIZING EXCELLENCE HONORS AND DISTINCTIONS
          </h2>
        </div>

        <div className="grid w-full max-w-[320px] grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 lg:flex lg:max-w-none lg:items-center lg:justify-center lg:gap-11">
          <img
            src={award1}
            alt="Award recognition 1"
            className="h-[120px] w-[120px] object-contain lg:h-[164px] lg:w-[164px]"
          />
          <img
            src={award2}
            alt="Award recognition 2"
            className="h-[114px] w-[114px] object-contain lg:h-[156px] lg:w-[156px]"
          />
          <img
            src={award3}
            alt="Award recognition 3"
            className="col-span-2 h-[126px] w-[126px] object-contain lg:col-span-1 lg:h-[170px] lg:w-[170px]"
          />
        </div>
      </div>
    </section>
  );
}
