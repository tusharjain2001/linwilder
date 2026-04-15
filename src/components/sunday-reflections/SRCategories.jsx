import { useState } from 'react';

const categoryRows = [
  ['Atheism', 'Christianity', 'Doberman', 'Dogs', 'Fear', 'Happiness', 'Books', 'Historical Fiction'],
  ['Claudia', 'Medical Mystery', 'Movies', 'Music', 'My Name is Saul', 'Peace', 'Thanksgiving'],
  ['WorkWriting', 'Public speaking', 'Prayer', 'Politics'],
];

export default function SRCategories() {
  const [active, setActive] = useState('Atheism');

  return (
    <section className="bg-[#f6efe9] py-12 px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-5">
        {/* Heading */}
        <h2 className="font-['Sedan_SC'] text-black text-[48px] leading-[56px] text-center mb-2">
          categories
        </h2>

        {/* Category rows with dividers */}
        {categoryRows.map((row, rowIdx) => (
          <div key={rowIdx}>
            {/* Top divider */}
            <div className="w-full h-px bg-[#592c33] opacity-20 mb-5" />

            <div className="flex flex-wrap gap-x-[70px] gap-y-3 items-center justify-center font-['Questrial'] text-[23.5px] text-center whitespace-nowrap">
              {row.map((cat) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`leading-[34px] transition-colors ${
                      isActive
                        ? 'text-[#592c33] underline underline-offset-2'
                        : 'text-[#595959] hover:text-[#592c33]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Bottom divider */}
        <div className="w-full h-px bg-[#592c33] opacity-20 mt-2" />
      </div>
    </section>
  );
}
