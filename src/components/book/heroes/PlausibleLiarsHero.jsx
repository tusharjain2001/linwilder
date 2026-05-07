import BookHero from '../BookHero';
import { findBookBySlug } from '../../../lib/books';

const book = findBookBySlug('plausible-liars');

const description = [
  'Pulitzer Prize-winning investigative journalist Kate Townsend knew she would lob an incendiary device into the contemporary culture if she wrote and published her series, Corrupting America’s Children: Creating Chemical Eunuchs. But because of what she’d witnessed in her son’s pre-kindergarten, she felt obligated to do it.',
  'In a remarkable convergence of events, Lindsey McCall is also drawn into the explosive world of transgender politics. For the second time in four years, Lindsey is facing indictment for unintentional murder. The US Department of Justice has indicted both McCall and Townsend in a conspiracy of mammoth proportions.',
  'In this fifth novel of Wilder’s award-winning Lindsey McCall medical mystery series, her readers will find the innovative medical research loved by her fans, combined with a dramatic courtroom scenario guaranteed to provoke and challenge.',
  'In her Foreward, Wilder writes:',
  'We fiction writers have a responsibility when creating a character; he or she must sit beside us as we read the story. If she isn’t, we haven’t done our job. Therefore, writing Dr. T’s character forced a plunge into places I had no interest in going. A person like Adam Turner would not have come into this beautiful world looking for a kid to control, manipulate, or wreck. There had to be a reason- that created massive psychic wounds.',
];

export default function PlausibleLiarsHero() {
  return <BookHero book={book} description={description} heroImage={book.cover} ratingText={`${book.rating}/5`} />;
}
