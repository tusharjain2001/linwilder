import heroComposite from '../assets/images/book-hero.svg';
import previewPages from '../assets/images/book/preview-pages.png';
import trailerThumb from '../assets/images/book/trailer-thumb.png';

export const defaultHeroDescription = [
  `After her series of articles is awarded three Pulitzer Prizes, investigative reporter Kate Townsend is haunted by the knowledge that her new-found fame has been purchased at too high a price. She is certain that McCall, an internationally acclaimed cardiologist, researcher, and a 2002 nominee for the Nobel Prize for Medicine, is not guilty.`,
  `Texas governor Greg Bell hires former homicide detective and criminal defense attorney Rich Jansen to fix the escalating problems at the Huntsville Prisons recently inflamed by a lawsuit against infamous inmate Dr. Lindsey McCall. When Jansen's skills quickly result in the resignation of an incompetent prison medical director, he realizes that this strange saga is just beginning.`,
  `Mark Twain wrote that forgiveness was the fragrance shed by a violet upon the heel of the boot that has crushed it. This medical mystery weaves together the lives of two sisters, Lindsey and Paula, with those of strangers as each copes with loss, betrayal, jealousy, and the exquisitely painful journey to forgiveness.`,
];

export const defaultPreviewDescription =
  'Explore a few snippets from the book to know if the books suits you!';

export const defaultTestimonials = [
  {
    text: `"Plausible Liars" by Lin Wilder is a thought-provoking and gripping novel that tackles contemporary issues with depth and precision. Pulitzer Prize-winning journalist Kate Townsend's journey into the world of transgender politics, alongside Lindsey McCall's legal challenges, makes for a compelling read. Wilder's exploration of complex characters and medical mysteries is both innovative and engaging, leaving readers eager for more.`,
    author: '-Nadia',
  },
  {
    text: `The courtroom setting also adds an intriguing layer to the narrative, prompting readers to reassess their perceptions of the characters and the issues at hand. Wilder's ability to immerse readers in the courtroom proceedings is nothing short of remarkable.`,
    author: '-London Book Reviews',
  },
  {
    text: `This book is not just a story but an experience, offering readers a chance to step into the shoes of characters far outside their own lived experiences. Are you ready to dive into a world where fiction becomes an immersive experience? Grab your copy today and become part of the conversation.`,
    author: '-London Book Reviews',
  },
  {
    text: `Wilder crafts a captivating narrative in Plausible Liars: A Dr. Lindsey McCall Medical Mystery, seamlessly merging groundbreaking medical research with a tense courtroom drama. The novel fearlessly tackles contentious subjects, examining far-reaching effects of chemical exposure and the ethical dilemmas inherent in medical practices.`,
    author: '-Review',
  },
  {
    text: `It seems bizarre to be saying this, but I am genuinely grateful to Lin, and others like her, for sticking her neck out and saying what needs to be said. Lin has never been one to shy away from controversial issues, and there are few more controversial at the moment than the indoctrination of children by some of the more extreme elements of the trans community.`,
    author: '-Matt McAvoy',
  },
  {
    text: `In the riveting fifth installment of Lin Wilder's award-winning medical mystery series, Pulitzer Prize-winning investigative journalist Kate Townsend finds herself at the epicenter of a cultural controversy. Driven by what she witnessed in her son's pre-kindergarten, she navigates the complexities of transgender politics, unearthing a sinister conspiracy.`,
    author: '-Review by Book Excellence',
  },
  {
    text: `Plausible Liars by Lin Wilder is a medical drama inspired by actual events and information on transgenderism. Dr. Lindsey McCall contends with transgender politics and becomes caught up in a provoking and challenging situation, while Kate Townsend publishes controversial articles on the dangers and impact of gender transitioning.`,
    author: '-Angelique Papayannopoulos',
  },
  {
    text: `Plausible Liars is a work of fiction in the mystery, legal drama, and suspense subgenres, and is part of the Dr. Lindsey McCall Medical Mystery series. This engaging tale delves into the explosive world of parenting politics, intertwining the lives of Pulitzer Prize-winning journalist Kate Townsend and Dr. Lindsey McCall.`,
    author: '-K.C. Finn',
  },
  {
    text: `Lin Wilder, known for her expertise in non-fiction, has ventured into the world of fiction with her fifth installment in the Lindsey McCall medical mystery series, Plausible Liars. The novel intricately navigates the complexities of transgender politics and courtroom drama, offering readers a distinctive and immersive perspective on these themes.`,
    author: '-London Book Reviews',
  },
];

export function createDefaultBookPageProps(book) {
  return {
    book,
    heroDescription: defaultHeroDescription,
    ratingText: `${book.rating}/5`,
    heroImage: heroComposite,
    previewDescription: defaultPreviewDescription,
    previewImage: previewPages,
    totalPages: 345,
    trailerImage: trailerThumb,
    testimonialsTitle: `WHAT PEOPLE SAY ABOUT ${book.displayTitle}`,
    testimonials: defaultTestimonials,
  };
}
