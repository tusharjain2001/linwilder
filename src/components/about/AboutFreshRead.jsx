import freshReadImage from '../../assets/images/about/fresh-read-image.png';

export default function AboutFreshRead() {
  return (
    <section className="bg-[#efd3b1] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex max-w-[1283px] flex-col gap-6 lg:gap-10">
        <div className="h-[190px] w-full overflow-hidden rounded-[10px] sm:h-[260px] lg:h-[458px]">
          <img
            src={freshReadImage}
            alt="Fresh Read"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
          <h2 className="font-['Sedan_SC'] text-[24px] leading-[1.2] text-[#592c33] lg:text-[40px] lg:leading-[62px]">
            FRESH READ
          </h2>
          <p className="max-w-[360px] font-['Questrial'] text-[13px] leading-6 text-[#592c33] sm:max-w-[520px] lg:max-w-none lg:text-2xl lg:leading-[34px]">
            My latest novel, Plausible Liars, was released in October. To my relief and delight,
            the story has been received with enthusiasm. To date, all reviews have been excellent.
            Fairly soon, I'll start on the next story–King David. Although I've enjoyed Lindsey,
            Kate and their topsy-turvy lives, returning to ancient Israel will be exhilarating on a
            number of levels. Primarily that little has been written of King David's early life. So
            I'll need to delve into the works of those who have written about him. Already, I've
            learned that a number of contemporary Catholic and Christian scholars consider the
            ancient king a misogynist, murderer and several other epithets. Interesting, yes?
          </p>
        </div>
      </div>
    </section>
  );
}
