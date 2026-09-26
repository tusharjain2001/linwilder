import oneSmoothStoneCover from '../../assets/images/onesmoothstone.jpeg';

export default function AboutFreshRead() {
  return (
    <section className="bg-[#efd3b1] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex max-w-[1283px] flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-[67px] lg:p-[60px]">
        <div className="flex flex-1 flex-col items-center gap-3 text-center text-[#592c33] lg:items-start lg:gap-5 lg:text-left">
          <h2 className="font-['Sedan_SC'] text-[24px] leading-[1.2] lg:text-[40px] lg:leading-[62px]">
            FRESH READ
          </h2>
          <p className="max-w-[360px] font-['Questrial'] text-[13px] leading-6 sm:max-w-[520px] lg:max-w-none lg:text-justify lg:text-2xl lg:leading-[34px]">
            During the fall of 2025, Plausible Liars (and several other books) began attracting
            interest from places I never anticipated. When the organizer of the Chicago LGBTQ+ Book
            Club offered to create a Reader&rsquo;s Guide for the book, I agreed. His
            chapter-by-chapter guide was so good, it warranted a second edition of the book. It was
            released in December of 2025. Around that same time, a swell of interest from online
            book club interviews turned my schedule upside down. Only now have I gotten organized
            enough to return to writing One Smooth Stone: An Ancient Novel. I hope to release this
            story of the early life of King David in the spring of 2027.
          </p>
        </div>

        <div className="w-full max-w-[280px] shrink-0 sm:max-w-[340px] lg:h-[681px] lg:w-[441px] lg:max-w-none">
          <img
            src={oneSmoothStoneCover}
            alt="One Smooth Stone book cover"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
