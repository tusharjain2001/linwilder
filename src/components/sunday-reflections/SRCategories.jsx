export default function SRCategories({ categories, activeCategory, onSelectCategory }) {
  return (
    <section className="bg-[#f6efe9] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="h-px w-full bg-[#592c33] opacity-20" />

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 px-2 py-6 text-center font-['Questrial'] text-[15px] sm:gap-x-8 sm:text-[18px] lg:gap-x-10 lg:gap-y-5 lg:px-6 lg:py-8 lg:text-[23.5px]">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`leading-[1.2] transition-colors ${
                  isActive
                    ? 'text-[#592c33] underline underline-offset-2'
                    : 'text-[#595959] hover:text-[#592c33]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="h-px w-full bg-[#592c33] opacity-20" />
      </div>
    </section>
  );
}
