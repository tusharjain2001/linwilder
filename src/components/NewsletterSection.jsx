import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission
    setEmail('');
  };

  return (
    <section className="bg-[#e4e8d7] px-8 py-20">
      <div className="max-w-[1200px] mx-auto flex items-center gap-24">
        {/* Heading */}
        <h2 className="font-['Sedan_SC'] text-[#592c33] text-[32px] leading-[30px] max-w-[556px]">
          Sign Up for The Sunday Reflections on Writing, Tour, and More
        </h2>

        {/* Email form */}
        <form onSubmit={handleSubmit} className="flex rounded-[10px] overflow-hidden flex-shrink-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-white border border-[#b7b7b7] border-r-0 px-4 py-2.5 font-['Questrial'] text-[#8e8e8e] text-xl leading-[30px] w-[280px] outline-none"
          />
          <button
            type="submit"
            className="bg-[#b83431] px-5 py-2.5 font-['Questrial'] text-white text-xl leading-[30px] hover:bg-[#a02e2b] transition whitespace-nowrap"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
