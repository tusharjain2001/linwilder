import quoteMark from '../../assets/images/review/quote-mark.svg';

const reviewText = `Plausible Liars, the fifth and concluding novel in Lin Wilder's Dr. Lindsey McCall Medical Mystery series, is a bold medical–legal thriller that directly engages with contemporary ethical, political, and cultural tensions. Wilder places physician Lindsey McCall and Pulitzer Prize–winning investigative journalist Kate Townsend at the center of a conspiracy involving federal indictment, controversial medical research, and explosive social debate.

The narrative gains momentum through its fusion of investigative journalism and courtroom drama. Kate Townsend's incendiary exposé, Corrupting America's Children: Creating Chemical Eunuchs, acts as both catalyst and thematic anchor, pulling Lindsey McCall into a second indictment for unintentional murder within four years. Wilder carefully explores questions of intent, accountability, and institutional power without reducing the conflict to simplistic conclusions.

One of the novel's defining strengths is its grounding in medical research. Wilder presents complex scientific and ethical material with clarity, giving the legal proceedings narrative credibility. Rather than avoiding contentious subject matter, the book allows competing perspectives to coexist, challenging readers to confront uncomfortable questions surrounding medicine, law, and cultural responsibility.

Character development remains consistent with the series' established tone. Lindsey McCall is portrayed as resilient yet burdened by consequence, while Kate Townsend embodies the risks inherent in investigative truth-telling. Their partnership provides emotional continuity amid escalating stakes.

Stylistically, Plausible Liars is disciplined and deliberate. The pacing balances courtroom intensity with investigative tension, and the prose remains direct and focused. As a concluding entry, the novel prioritizes ethical inquiry over tidy resolution, reinforcing the seriousness of its subject matter.

Verdict: A timely, intellectually challenging medical–legal thriller, Plausible Liars serves as a strong and consequential conclusion to Lin Wilder's Dr. Lindsey McCall series, marked by rigorous research and narrative courage.`;

const reviews = [
  { source: 'The Indie Critic',  date: 'January 26, 2026' },
  { source: 'The Indie Critic',  date: 'February 10, 2026' },
  { source: 'The Indie Critic',  date: 'March 3, 2026' },
];

function ReviewCard({ review }) {
  return (
    <div className="relative w-full max-w-[936px] mx-auto">
      {/* Decorative opening quote — top-right */}
      <div className="absolute -top-8 right-10 w-[66px] h-[48px] pointer-events-none select-none">
        <img src={quoteMark} alt="" className="w-full h-full" />
      </div>

      {/* Card body */}
      <div className="bg-[rgba(255,255,255,0.52)] rounded-[10px] p-[42px] flex flex-col gap-2.5">
        {/* Date */}
        <p className="font-['Questrial'] text-[#592c33] text-lg leading-8 mb-2">
          {review.date}
        </p>

        {/* Review text */}
        <div className="font-['Questrial'] text-[#595959] text-lg leading-8 space-y-6">
          {reviewText.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Attribution */}
        <div className="flex items-center justify-end pt-2.5">
          <span className="font-['Aboreto'] text-[#592c33] text-2xl leading-[18px]">
            -{review.source}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ReviewCards() {
  return (
    <section className="bg-[#f6efe9] py-20 px-8">
      <div className="flex flex-col gap-24 items-center">
        {reviews.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </section>
  );
}
