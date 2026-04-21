export default function ContactForm() {
  return (
    <section className="bg-[#f6efe9] py-20 px-8">
      <div className="max-w-[1027px] mx-auto bg-white rounded-[10px] px-[74px] py-[64px]">
        {/* Top label */}
        <p className="font-['Questrial'] text-black text-base uppercase tracking-wide mb-3">
          Get In Touch
        </p>

        {/* Heading */}
        <h1 className="font-['Sedan_SC'] text-black text-[36px] leading-[44px] mb-4">
          Have a Question? Contact Us
        </h1>

        {/* Description */}
        <p className="font-['Questrial'] text-black text-base leading-7 max-w-[600px] mb-4">
          If you would like more information about any of my books please do not hesitate to contact me with the below form.
        </p>

        {/* Email */}
        <p className="font-['Questrial'] text-black text-xl leading-8 mb-8">
          Email: linwilder@gmail.com
        </p>

        {/* Form */}
        <form className="flex flex-col gap-6">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="font-['Questrial'] text-[#334155] text-xl leading-8">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full h-[65px] border border-[#cacaca] rounded-[10px] px-5 font-['Questrial'] text-[#595959] text-base outline-none focus:border-[#592c33] transition-colors"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-['Questrial'] text-[#334155] text-xl leading-8">
              Email
            </label>
            <input
              type="email"
              placeholder="JaneDoe@gmail.com"
              className="w-full h-[65px] border border-[#cacaca] rounded-[10px] px-5 font-['Questrial'] text-[#595959] text-base outline-none focus:border-[#592c33] transition-colors"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="font-['Questrial'] text-[#334155] text-xl leading-8">
              Message
            </label>
            <textarea
              placeholder="hi"
              rows={5}
              className="w-full h-[138px] border border-[#cacaca] rounded-[10px] px-5 py-4 font-['Questrial'] text-[#595959] text-base outline-none focus:border-[#592c33] transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-[148px] h-[45px] bg-[#592c33] rounded-[5px] font-['Questrial'] text-[#edeae3] text-base uppercase tracking-wide hover:bg-[#6e3640] transition-colors"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
