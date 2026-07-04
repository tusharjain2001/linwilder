import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email.');
      return;
    }

    setStatus('submitting');
    setMessage('');

    const formData = new FormData();
    formData.append('post_id', '20948');
    formData.append('form_id', '1e56920');
    formData.append('referrer_title', 'About - Lin Weeks Wilder');
    formData.append('queried_id', '20948');
    formData.append('form_fields[field_c8c380]', email.trim());
    formData.append('action', 'elementor_pro_forms_send_form');
    formData.append('referrer', 'https://blog.linwilder.com/about/');

    try {
      const response = await fetch('https://blog.linwilder.com/wp-admin/admin-ajax.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result?.success) {
        throw new Error(result?.data?.message || 'Unable to sign up right now.');
      }

      setStatus('success');
      setMessage(result.data?.message || 'Your submission was successful.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to sign up right now.');
    }
  };

  return (
    <section className="bg-[#e4e8d7] px-4 py-6 sm:px-6 lg:px-0 lg:py-[25px]">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-5 text-center lg:grid lg:grid-cols-[590px_400px] lg:items-center lg:gap-x-10 lg:px-[75px] lg:text-left">
        <h2 className="w-full max-w-[360px] font-['Sedan_SC'] text-[12px] uppercase leading-[1.2] tracking-[0.03em] text-[#6e4040] lg:max-w-[590px] lg:text-[24px] lg:leading-[1.22]">
          <span className="lg:hidden whitespace-nowrap">
            Sign Up for The Sunday Reflections on Writing,
          </span>
          <span className="hidden lg:inline">
            Sign Up for The Sunday Reflections on Writing, Tour, and More
          </span>
          <br className="lg:hidden" />
          <span className="lg:hidden">Tour, and More</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[360px] overflow-hidden rounded-[6px] bg-white shadow-[0_0_0_1px_rgba(206,203,193,1)] lg:max-w-[430px] lg:justify-self-start lg:rounded-[10px]"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === 'submitting'}
            className="w-full bg-white px-4 py-2.5 font-['Questrial'] text-[14px] leading-5 text-[#6e6e6e] outline-none placeholder:text-[#a2a2a2] lg:px-4 lg:py-[15px] lg:text-[12px] lg:leading-none"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="whitespace-nowrap bg-[#be3a31] px-5 py-2.5 font-['Questrial'] text-[13px] text-white transition hover:bg-[#a9332b] lg:min-w-[82px] lg:px-4 lg:py-[10px] lg:text-[12px] lg:leading-none"
          >
            {status === 'submitting' ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        {message ? (
          <p
            className={`w-full max-w-[360px] font-['Questrial'] text-left text-[14px] lg:max-w-[430px] ${
              status === 'success' ? 'text-[#2f5d3a]' : 'text-[#be3a31]'
            }`}
          >
            {status === 'success' ? '✓ ' : ''}
            {message}
          </p>
        ) : null}
      </div>
    </section>
  );
}
