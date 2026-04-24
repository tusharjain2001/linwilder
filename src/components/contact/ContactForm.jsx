export default function ContactForm() {
  return (
    <section className="bg-[#f6efe9] px-4 py-8 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1027px] rounded-[10px] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-[74px] lg:py-[64px]">
        <p className="mb-2 font-['Questrial'] text-[10px] uppercase tracking-wide text-black sm:text-xs lg:mb-3 lg:text-base">
          Get In Touch
        </p>

        <h1 className="mb-3 font-['Sedan_SC'] text-[22px] leading-[1.2] text-black sm:text-[28px] lg:mb-4 lg:text-[36px] lg:leading-[44px]">
          Have a Question? Contact Us
        </h1>

        <p className="mb-3 max-w-[600px] font-['Questrial'] text-[13px] leading-6 text-black sm:text-[14px] lg:mb-4 lg:text-base lg:leading-7">
          If you would like more information about any of my books please do not hesitate to contact me with the below form.
        </p>

        <p className="mb-6 font-['Questrial'] text-[13px] leading-6 text-black sm:text-[14px] lg:mb-8 lg:text-xl lg:leading-8">
          Email: linwilder@gmail.com
        </p>

        <form className="flex flex-col gap-4 lg:gap-6">
          <div className="flex flex-col gap-1.5 lg:gap-2">
            <label className="font-['Questrial'] text-[13px] leading-6 text-[#334155] lg:text-xl lg:leading-8">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="h-[34px] w-full rounded-[4px] border border-[#cacaca] px-3 font-['Questrial'] text-[11px] text-[#595959] outline-none transition-colors focus:border-[#592c33] lg:h-[65px] lg:rounded-[10px] lg:px-5 lg:text-base"
            />
          </div>

          <div className="flex flex-col gap-1.5 lg:gap-2">
            <label className="font-['Questrial'] text-[13px] leading-6 text-[#334155] lg:text-xl lg:leading-8">
              Email
            </label>
            <input
              type="email"
              placeholder="JaneDoe@gmail.com"
              className="h-[34px] w-full rounded-[4px] border border-[#cacaca] px-3 font-['Questrial'] text-[11px] text-[#595959] outline-none transition-colors focus:border-[#592c33] lg:h-[65px] lg:rounded-[10px] lg:px-5 lg:text-base"
            />
          </div>

          <div className="flex flex-col gap-1.5 lg:gap-2">
            <label className="font-['Questrial'] text-[13px] leading-6 text-[#334155] lg:text-xl lg:leading-8">
              Message
            </label>
            <textarea
              placeholder="hi"
              rows={5}
              className="h-[58px] w-full resize-none rounded-[4px] border border-[#cacaca] px-3 py-2 font-['Questrial'] text-[11px] text-[#595959] outline-none transition-colors focus:border-[#592c33] lg:h-[138px] lg:rounded-[10px] lg:px-5 lg:py-4 lg:text-base"
            />
          </div>

          <div className="flex justify-center lg:block">
            <button
              type="submit"
              className="h-[26px] w-[82px] rounded-[2px] bg-[#592c33] font-['Questrial'] text-[11px] uppercase tracking-wide text-[#edeae3] transition-colors hover:bg-[#6e3640] lg:h-[45px] lg:w-[148px] lg:rounded-[5px] lg:text-base"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
