import BookHero from '../BookHero';
import { findBookBySlug } from '../../../lib/books';

const book = findBookBySlug('my-name-is-saul');

const description = [
  '“The time I was born for is here. I will wage war against these Christians, and I will emerge victorious. My name is Saul.”',
  'St. Paul the Apostle is a towering biblical figure, but almost nothing is known about his early life as Saul of Tarsus.',
  'As death loomed over him at Mamertine Prison in Rome, under the watchful eye of his jailer and final follower Aurelius, he wrote:',
  '“I will die tomorrow. In the morning, around sunrise.”',
  'There are two things for which I am eminently grateful: That I have been permitted to have fought the good fight and finished the race marked out for me; and that I will not have to endure another winter in this place.',
  'Starting from that pivotal moment, blending historical fact with audacious creativity, the author of the award-winning I, Claudia propels us back through the life of the man who would become St. Paul. Her vividly imagined, well-founded tale of loss, transformation, and divine intervention will captivate believers and non-believers alike who yearn for the human truth and drama behind the scriptures. “I am convinced that Saul is a man for our times,” explains Wilder, “primarily because he was interested in just one thing: truth.”',
];

export default function MyNameIsSaulHero() {
  return <BookHero book={book} description={description} heroImage={book.cover} ratingText={`${book.rating}/5`} />;
}
