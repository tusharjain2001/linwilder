import BookHero from '../BookHero';
import { findBookBySlug } from '../../../lib/books';

const book = findBookBySlug('do-you-solemnly-swear');

const description = [
  'What if your former girlfriend decides to use her 6-year-old daughter to punish you for breaking up with her?',
  'How do you prove that you are innocent of the worst case of sexual perversion against a child?',
  'Is it possible to refute the lies of a beautiful, seemingly innocent, little girl?',
  'When Gabe McAllister decorated former Marine and respected Texas State Trooper, walked out of his condo in west Houston on a Tuesday morning to head to a meeting of the newly formed task force of the DEA, Texas State Police, and Border Patrol, he found five Houston cops waiting to collar him for the rape of 6-year-old Annie Bridges.',
  'His next several days and weeks are a blur as he realizes belatedly that he has no chance against his diminutive accuser, his implicit trust in the fairness of the justice system shattered, McAllister lands in the Huntsville prison, sentenced to 3 counts of 20 to life sentences.',
  'In the sequel to The Fragrance Shed By A Violet, Lin Wilder embroils characters in another complex web of dysfunctional family, deceit, revenge and the politics of courtrooms. Pulitzer Prize reporter Kate Townsend’s front page story for her newspaper, The Houston Tribune, about a juror-the foreman of McAllister’s jury-stepping forward to speak about the case and her concern about why McAllister was not granted a retrial galvanizes Houstonians once again: Had a Houston jury convicted another innocent person?',
  'Dr. Lindsey McCall, former inmate at Huntsville and now Medical Director at the Prisons and Rich Jansen, Chief Warden at the prisons are faced with the all-too-familiar question of just how involved should they get as Townsend begins to dig into the background of little Annie Bridges and her mother. When Townsend reveals the details of her new investigative series: A Nation of Law: The Dark Side, Jansen is more than intrigued.',
  'The desperate call from Hank Reardon in Switzerland came late at night causing too many questions. And no answers. Could Lindsey and Rich Jansen uncover who was behind the crimes? It was an inside job-could they figure out who had sold out the Reardons? All in time to save Reardon’s daughter and her chief tech Ariana? Were they risking their lives as well?',
];

export default function DoYouSolemnlySwearHero() {
  return <BookHero book={book} description={description} heroImage={book.cover} ratingText={`${book.rating}/5`} />;
}
