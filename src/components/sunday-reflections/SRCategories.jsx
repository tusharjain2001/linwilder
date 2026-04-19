function chunkCategories(categories, size) {
  const rows = [];

  for (let index = 0; index < categories.length; index += size) {
    rows.push(categories.slice(index, index + size));
  }

  return rows;
}

export default function SRCategories({ categories, activeCategory, onSelectCategory }) {
  const categoryRows = chunkCategories(categories, 6);

  return (
    <section className="bg-[#f6efe9] py-12 px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-5">
        <h2 className="font-['Sedan_SC'] text-black text-[48px] leading-[56px] text-center mb-2">
          categories
        </h2>

        {categoryRows.map((row, rowIdx) => (
          <div key={rowIdx}>
            <div className="w-full h-px bg-[#592c33] opacity-20 mb-5" />

            <div className="flex flex-wrap gap-x-[50px] gap-y-3 items-center justify-center font-['Questrial'] text-[23.5px] text-center">
              {row.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`leading-[34px] transition-colors ${
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
          </div>
        ))}

        <div className="w-full h-px bg-[#592c33] opacity-20 mt-2" />
      </div>
    </section>
  );
}
