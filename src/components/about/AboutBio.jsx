import signatureBlack from '../../assets/images/about/signature-black.png';

export default function AboutBio() {
  return (
    <section className="bg-[#f6efe9] px-8 py-20">
      <div className="max-w-[1169px] mx-auto flex flex-col items-center gap-5 text-center">
        <h1 className="font-['Sedan_SC'] text-[#592c33] text-[56px] leading-[72px]">
          About Linwilder
        </h1>

        <p className="font-['Questrial'] text-[#595959] text-2xl leading-[34px]">
          Lin Wilder holds a doctorate in Public Health from the University of Texas at Houston and
          has over thirty years in academic health care administration. After serving as Hospital
          Director at UMASS Medical Center, she began writing fiction and has since won numerous
          awards for her novels. Her medical mystery series includes titles like The Fragrance Shed
          by A Violet and Plausible Liars, with the second edition released in December 2024. Lin
          is also working on One Smooth Stone, about King David&apos;s early life, and her ancient
          novel series features I, Claudia and My Name is Saul, with The Reluctant Queen winning
          first place in Feathered Quill&apos;s Best Books of 2022. Her memoir, Finding the Narrow
          Path, details her spiritual journey. Lin resides in the Texas Hill Country with her
          husband and dogs.
        </p>

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
