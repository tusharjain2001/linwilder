import award1 from '../../assets/images/about/award-1.svg';
import award2 from '../../assets/images/about/award-2.svg';
import award3 from '../../assets/images/about/award-3.svg';

export default function AboutAwards() {
  return (
    <section className="bg-[#592c33] py-16 px-8">
      <div className="max-w-[686px] mx-auto flex flex-col items-center gap-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-['Questrial'] text-white text-xl leading-[26px] uppercase tracking-wide">
            AWARDS AND RECOGNITIONS
          </p>
          <h2 className="font-['Sedan_SC'] text-white text-[32px] leading-[34px]">
            RECOGNIZING EXCELLENCE HONORS AND DISTINCTIONS
          </h2>
        </div>

        {/* Award badges */}
        <div className="flex items-center gap-11">
          <img src={award1} alt="Award recognition 1" className="w-[164px] h-[164px] object-contain" />
          <img src={award2} alt="Award recognition 2" className="w-[156px] h-[156px] object-contain" />
          <img src={award3} alt="Award recognition 3" className="w-[170px] h-[170px] object-contain" />
        </div>
      </div>
    </section>
  );
}
