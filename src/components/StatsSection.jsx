const stats = [
  { value: '10+', label: 'books published' },
  { value: '1k', label: 'happy readers' },
  { value: '25+', label: 'award recognitions' },
  { value: '40+', label: 'literary events' },
];

export default function StatsSection({ className = 'bg-[#f6efe9]' }) {
  return (
    <section className={`${className} py-10 sm:py-12 lg:py-16`}>
      <div className="mx-auto grid max-w-[1300px] grid-cols-2 gap-y-10 px-4 text-center sm:px-6 lg:flex lg:flex-wrap lg:justify-center lg:gap-16">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-2 font-['Sedan_SC'] lg:gap-6"
          >
            <span className="text-[26px] leading-none text-[#592c33] sm:text-[34px] lg:text-[64px] lg:leading-[34px]">
              {stat.value}
            </span>
            <span className="text-[12px] leading-[1.25] uppercase tracking-[0.02em] whitespace-nowrap text-[#595959] sm:text-[14px] lg:max-w-none lg:text-[28px] lg:leading-[34px] lg:normal-case lg:tracking-normal">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
