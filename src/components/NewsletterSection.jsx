import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission
    setEmail('');
  };

  return (
    <section className="bg-[#e4e8d7] px-4 py-6 sm:px-6 lg:px-8 lg:py-5">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 text-center lg:grid lg:max-w-[1260px] lg:grid-cols-[460px_560px] lg:items-center lg:justify-center lg:gap-x-16 lg:px-0 lg:text-left">
        <h2 className="max-w-[314px] font-['Sedan_SC'] text-[16px] uppercase leading-[17px] text-[#592c33] lg:max-w-[460px] lg:text-[17px] lg:leading-[1.25]">
          Sign Up for The Sunday Reflections on Writing, Tour, and More
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[340px] overflow-hidden rounded-[10px] shadow-[0_0_0_1px_rgba(183,183,183,1)] lg:max-w-[560px] lg:justify-self-start lg:self-center lg:rounded-[2px] lg:shadow-none"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-white px-4 py-3 font-['Questrial'] text-[16px] leading-6 text-[#8e8e8e] outline-none lg:w-[460px] lg:border lg:border-[#b7b7b7] lg:border-r-0 lg:px-4 lg:py-1.5 lg:text-[11px] lg:leading-[18px]"
          />
          <button
            type="submit"
            className="whitespace-nowrap bg-[#b83431] px-6 py-3 font-['Questrial'] text-[16px] text-white transition hover:bg-[#a02e2b] lg:min-w-[78px] lg:px-3 lg:py-1.5 lg:text-[11px] lg:leading-[18px]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
