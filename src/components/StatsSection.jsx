const stats = [
  { value: '10+', label: 'books published' },
  { value: '1k', label: 'happy readers' },
  { value: '25+', label: 'award recognitions' },
  { value: '40+', label: 'literary events' },
];

export default function StatsSection() {
  return (
    <section className="bg-[#f6efe9] py-16">
      <div className="max-w-[1300px] mx-auto flex justify-center gap-16 flex-wrap">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-6 font-['Sedan_SC'] text-center">
            <span className="text-[#592c33] text-[64px] leading-[34px]">{stat.value}</span>
            <span className="text-[#595959] text-[28px] leading-[34px]">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
