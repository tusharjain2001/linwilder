import BookHero from '../BookHero';
import { findBookBySlug } from '../../../lib/books';

const book = findBookBySlug('i-claudia');

const description = [
  'Claudia Procula-wife of one of the most controversial figures in ancient history-comes alive to twenty-first-century readers in a groundbreaking new novel by the award-winning author of the Lindsey McCall medical mystery series.',
  'For decades, the daughter of the last Oracle at Delphi has suppressed the secrets of her birth, extensive education, and marriage to the notorious Fifth Prelate of Judea-Pontius PIlate. Now, at age seventy-nine, she feels compelled to leave behind her story for the world and set the record straight about the beginnings of modern history.',
  'He has had his arms raised for how many hours now? Shouldn’t there be a Joshua to help this Moses? I suppressed a smile at my wittiness, knowing better than to voice the thought aloud. My ladies would be shocked by my allusion to the great Jewish prophet. Well aware of my reputation as an empty-headed nitwit among those who served my husband, such low expectations had served me well. Best to maintain the fiction.',
  'In a surprising change of genre and style, Wilder brings her extensive research and wide-ranging imagination to bear on the seminal story of our time: the passion of the Christ. The result is a compelling and harrowing love story replete with historical figures such as Seneca, Socrates, and Pilate himself. It is sure to captivate both believers and skeptics alike, and remain in readers’ minds long after the last page is turned.',
];

export default function IClaudiaHero() {
  return <BookHero book={book} description={description} heroImage={book.cover} ratingText={`${book.rating}/5`} />;
}
