import BookHero from '../BookHero';
import { findBookBySlug } from '../../../lib/books';

const book = findBookBySlug('finding-the-narrow-path');

const description = [
  'Deciding to walk away from God did not come easily or quickly. Nor did the decision to return.',
  'These kinds of tumultuous events feel as if they happen impulsively, spontaneously. But, if we take the time to look back at patterns, we find the seeds of the decision sown years before the actual action. This was not a book medical fiction writer Lin Wilder planned to write. Ever. Until she remembered a promise made to a friend years before.',
  'Author Wilder explains: Exactly how much of my personal life should be included in this book has been a tough decision to make. This is, after all, the story of conversion, not an autobiography. Many of my choices, judgments, and their consequences remain painful, even humiliating to revisit, writing them down, even more so. Initially, I questioned the relevance of describing elements of my career, education, and relationships with men- in short, my pre-Catholic world in detail. Since I did not convert until midlife, there are a lot of territories to cover. But I realize that my use of the term lost years makes no sense unless I place them squarely in the context of the person I was then. Without the details of my early life, unpleasant as they are to recall, much less write, this sense of drifting and of aimlessness are merely words which lack substance. They are unidimensional. In talks to church groups about life with and without my faith, I frequently used ground while I stomped the floor I stood on, forcefully, as I worked to convey what is gained and lost with and without faith.',
  'Faith and all which accompanies religion like regular church attendance and a belief that there is something greater here, someone present, inform our decisions and choices, even our goals. Just so, its absence widens all boundaries. More and more is acceptable.',
  'This, at times, brutally honest story of the reasons for Wilder’s walk away from God, then years later, return, cannot fail to provoke and challenge.',
];

export default function FindingTheNarrowPathHero() {
  return <BookHero book={book} description={description} heroImage={book.cover} ratingText={`${book.rating}/5`} />;
}
