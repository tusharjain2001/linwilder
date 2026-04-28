import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission
    setEmail('');
  };

  return (
    <section className="bg-[#e4e8d7] px-4 py-6 sm:px-6 lg:px-8 lg:py-[25px]">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-5 text-center lg:grid lg:grid-cols-[560px_430px] lg:items-center lg:gap-x-10 lg:px-[108px] lg:text-left">
        <h2 className="max-w-[330px] font-['Sedan_SC'] text-[15px] uppercase leading-[1.2] tracking-[0.03em] text-[#6e4040] lg:max-w-[560px] lg:text-[24px] lg:leading-[1.22]">
          Sign Up for The Sunday Reflections on Writing, Tour,
          
          and More
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[360px] overflow-hidden rounded-[6px] bg-white shadow-[0_0_0_1px_rgba(206,203,193,1)] lg:max-w-[430px] lg:justify-self-start lg:rounded-[4px]"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-white px-4 py-2.5 font-['Questrial'] text-[14px] leading-5 text-[#6e6e6e] outline-none placeholder:text-[#a2a2a2] lg:px-4 lg:py-[10px] lg:text-[12px] lg:leading-none"
          />
          <button
            type="submit"
            className="whitespace-nowrap bg-[#be3a31] px-5 py-2.5 font-['Questrial'] text-[13px] text-white transition hover:bg-[#a9332b] lg:min-w-[82px] lg:px-4 lg:py-[10px] lg:text-[12px] lg:leading-none"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
