import BookHero from '../BookHero';
import { findBookBySlug } from '../../../lib/books';

const book = findBookBySlug('a-price-for-genius');

const description = [
  'Dr. Lindsey McCall’s worst fears are realized. Not only have both drugs been stolen but two women have been kidnapped-one maybe dead. Lindsey had known Liisa Reardon’s new drug was alchemy, only this time, the end product actually more precious than gold.',
  'The desperate call from Hank Reardon in Switzerland came late at night causing too many questions. And no answers. Could Lindsey and Rich Jansen uncover who was behind the crimes? It was an inside job-could they figure out who had sold out the Reardons? All in time to save Reardon’s daughter and her chief tech Ariana? Were they risking their lives as well?',
];

export default function APriceForGeniusHero() {
  return <BookHero book={book} description={description} heroImage={book.cover} ratingText={`${book.rating}/5`} />;
}
