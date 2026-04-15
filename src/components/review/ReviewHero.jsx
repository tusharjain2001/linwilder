export default function ReviewHero() {
  return (
    <section className="bg-[#efd3b1] w-full min-h-[299px] flex flex-col items-center justify-center text-center px-8 py-16">
      {/* Pill badge */}
      <div className="border border-[#b83431] px-5 py-[5px] rounded-[19px] mb-6">
        <span className="font-['Questrial'] text-[#b83431] text-base uppercase leading-[18px] tracking-wide">
          REVIEW
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-['Sedan_SC'] text-[#592c33] text-[48px] leading-[59px] max-w-[801px]">
        Reflections on the written word and the quiet spaces between.
      </h1>
    </section>
  );
}
