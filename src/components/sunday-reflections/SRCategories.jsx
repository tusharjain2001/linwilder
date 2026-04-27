function splitIntoRows(categories, itemsPerRow) {
  const rows = [];

  for (let index = 0; index < categories.length; index += itemsPerRow) {
    rows.push(categories.slice(index, index + itemsPerRow));
  }

  return rows;
}

export default function SRCategories({ categories, activeCategory, onSelectCategory }) {
  const mobileRows = splitIntoRows(categories, 4);
  const tabletRows = splitIntoRows(categories, 5);
  const desktopRows = splitIntoRows(categories, 8);

  const renderMobileRows = (rows) =>
    rows.map((row, rowIndex) => (
      <div key={`mobile-row-${rowIndex}`} className="border-t border-[#592c33]/20">
        <div className="grid grid-cols-4 gap-x-4 px-5 py-4 text-left font-['Questrial'] text-[12px] leading-[1.05] text-[#595959]">
          {row.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`min-w-0 text-left transition-colors ${
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
    ));

  const renderRows = (rows) =>
    rows.map((row, rowIndex) => (
      <div key={`row-${rowIndex}`} className="border-t border-[#592c33]/20">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 px-3 py-4 text-center font-['Questrial'] text-[14px] sm:gap-x-8 sm:text-[16px] lg:gap-x-10 lg:px-6 lg:text-[18px]">
          {row.map((category) => {
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
      </div>
    ));

  return (
    <section className="bg-[#f6efe9] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <h2 className="text-center font-['Sedan_SC'] text-[22px] leading-none text-black sm:text-[28px] lg:text-[32px]">
          CATEGORIES
        </h2>

        <div className="mt-6 border-b border-[#592c33]/20">
          <div className="sm:hidden">{renderMobileRows(mobileRows)}</div>
          <div className="hidden sm:block lg:hidden">{renderRows(tabletRows)}</div>
          <div className="hidden lg:block">{renderRows(desktopRows)}</div>
        </div>
      </div>
    </section>
  );
}
