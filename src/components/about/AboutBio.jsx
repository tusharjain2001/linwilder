import signatureBlack from '../../assets/images/about/signature-black.png';

export default function AboutBio() {
  return (
    <section className="bg-[#f6efe9] px-8 py-4 md:py-20">
      <div className="max-w-[1169px] mx-auto flex flex-col items-center md:gap-5 text-center">
        <h1 className="font-['Sedan_SC'] text-[#592c33] text-[20px] md:text-[56px] leading-[72px] uppercase">
          ABOUT LINWILDER
        </h1>

        <div className="mt-[-10px] space-y-6 font-['Questrial'] text-sm leading-[34px] text-[#595959] md:text-lg">
          <p>
            Lin Wilder has a doctorate in Public Health from the University of Texas at Houston,
            with a background in cardiopulmonary physiology, medical ethics, and hospital
            administration. During her thirty-plus years in academic health care administration,
            Lin authored numerous texts in these fields.
          </p>
          <p>
            She began writing fiction only after leaving UMASS Medical Center, where she had been
            Hospital Director. Since then, Lin&apos;s been the recipient of an extensive array of
            awards for her two series of novels. Her medical mystery series includes: The
            Fragrance Shed by A Violet, Do You Solemnly Swear? A Price for Genius and Malthus
            Revisited and Plausible Liars. Plausible Liars, 2nd edition, was released in December
            2024. Lin is currently writing One Smooth Stone- the story of the early life of King
            David.
          </p>
          <p>
            Lin&apos;s ancient novel series includes I, Claudia, and My Name is Saul. The third in
            that series, The Reluctant Queen, took first place for historical and religious fiction
            in Feathered Quill&apos;s Best Books of 2022. In addition, her memoir, Finding the
            Narrow Path, recounts her journey away from God and back again. Lin lives in the Texas
            Hill Country with her husband and dogs.
          </p>
        </div>

        {/* Signature */}
        <div className="mt-6">
          <img
            src={signatureBlack}
            alt="Lin Wilder signature"
            className="h-[93px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
