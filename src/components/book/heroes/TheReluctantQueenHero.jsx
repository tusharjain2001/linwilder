import BookHero from '../BookHero';
import { findBookBySlug } from '../../../lib/books';

const book = findBookBySlug('the-reluctant-queen');

const description = [
  'I’m called Esther-a Persian name, and yet I’m a Hebrew. Had I been able to do so, one of the questions I would have asked my mother and father when I grew older was, “Why did you give me this name?” But now, of course, I know why.',
  'The story of the orphaned Jewish girl who saves the Jewish nation from extinction is the stuff of fantasy and legend.',
  'Did such a person exist?',
  'Could an anonymous girl have been selected to be wife of the ancient Persian king of kings?',
  '“Esther, soldiers will soon be combing the cities and countryside to look for the most beautiful young virgins. They will take hundreds of young girls for the king’s harem. Then the king’s eunuchs and servants will spend many months preparing the women for their night with him.” His words came faster and faster, wanting to get through this.”',
  'The author of the award-winning I, Claudia and My Name is Saul ancient novels returns with the story of Esther. Wilder’s skills at blending historical fact with vividly imagined, well-founded characters have become her trademark. The Reluctant Queen is guaranteed to captivate both her loyal fans and eager newcomers, right down to its last riveting page.',
];

export default function TheReluctantQueenHero() {
  return <BookHero book={book} description={description} heroImage={book.cover} ratingText={`${book.rating}/5`} />;
}
