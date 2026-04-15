import freshReadImage from '../../assets/images/about/fresh-read-image.png';

export default function AboutFreshRead() {
  return (
    <section className="bg-[#efd3b1] py-16 px-8">
      <div className="max-w-[1283px] mx-auto flex flex-col gap-10">
        {/* Large image */}
        <div className="w-full h-[458px] rounded-[10px] overflow-hidden">
          <img
            src={freshReadImage}
            alt="Fresh Read"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-2">
          <h2 className="font-['Sedan_SC'] text-[#592c33] text-[40px] leading-[62px]">
            FRESH READ
          </h2>
          <p className="font-['Questrial'] text-[#592c33] text-2xl leading-[34px]">
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
