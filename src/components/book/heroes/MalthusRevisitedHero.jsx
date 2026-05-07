import BookHero from '../BookHero';
import { findBookBySlug } from '../../../lib/books';

const book = findBookBySlug('malthus-revisited');

const description = [
  'Eighteen-year-old Morgan Gardner did not seem like someone who could save the world-unless you took the time to notice her eyes. And most people didn’t.',
  'Morgan’s exceptional gifts were known only to her and to the animals she could understand better than people. For a long time, she told no one about her nightmares. Embarrassed and afraid that no one would believe her, Morgan waited until it was almost too late. Then she confided in her mom’s best friend, Dr. Lindsey McCall.',
  'Lindsey and her husband Rich had worked hard to reestablish their lives and careers after their last harrowing escapade. Relocated in a beautiful California home and newly reunited with Lindsey’s biological daughter LJ, all seemed to be going smoothly-until an enemy from their past returned with as deadly a plan as they could imagine.',
  'The fourth novel in Lin Wilder’s popular Lindsey McCall series is her best one yet-combining the innovative medical research her readers have come to admire with a new and terrifying threat to the world’s population: a biological timebomb. Vivid characters old and new rampage across the continents of Europe, Asia, and the U.S. to stop the contagion, picking up steam as they head toward a life-or-death climax in the remote Qinghai province of China.',
  'Malthus Revisited adds a dystopian element to Wilder’s evolving Lindsey McCall mystery series, and is guaranteed to captivate both her loyal fans and eager newcomers to its last riveting page.',
];

export default function MalthusRevisitedHero() {
  return <BookHero book={book} description={description} heroImage={book.cover} ratingText={`${book.rating}/5`} />;
}
