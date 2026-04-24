import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission
    setEmail('');
  };

  return (
    <section className="bg-[#e4e8d7] px-4 py-6 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 text-center lg:flex-row lg:items-center lg:gap-24 lg:text-left">
        <h2 className="max-w-[314px] font-['Sedan_SC'] text-[16px] uppercase leading-[17px] text-[#592c33] lg:max-w-[700px] lg:text-[32px] lg:leading-snug">
          Sign Up for The Sunday Reflections on Writing, Tour, and More
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[340px] overflow-hidden rounded-[10px] shadow-[0_0_0_1px_rgba(183,183,183,1)] lg:max-w-none lg:flex-shrink-0 lg:shadow-none"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-white px-4 py-3 font-['Questrial'] text-[16px] leading-6 text-[#8e8e8e] outline-none lg:w-[280px] lg:border lg:border-[#b7b7b7] lg:border-r-0 lg:px-4 lg:py-2.5 lg:text-xl lg:leading-[30px]"
          />
          <button
            type="submit"
            className="whitespace-nowrap bg-[#b83431] px-6 py-3 font-['Questrial'] text-[16px] text-white transition hover:bg-[#a02e2b] lg:px-5 lg:py-2.5 lg:text-xl lg:leading-[30px]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
