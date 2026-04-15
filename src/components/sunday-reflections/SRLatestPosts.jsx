import postArticles from '../../assets/images/sunday-reflections/post-articles.png';
import postChurch   from '../../assets/images/sunday-reflections/post-church.png';
import postTransfig from '../../assets/images/sunday-reflections/post-transfiguration.png';

const latestPosts = [
  {
    category: 'articles',
    image: postArticles,
    author: 'admin',
    date: 'March 15, 2026',
    title: 'Anamnesis: Perils of Ignoring It',
    link: 'https://linwilder.com/anamnesis-perils-of-ignoring-it/',
  },
  {
    category: 'Books',
    image: postChurch,
    author: 'admin',
    date: 'March 8, 2026',
    title: 'Knowledge Is Power: The Right Not to Know',
    link: 'https://linwilder.com/category/articles/',
  },
  {
    category: 'Christianity',
    image: postTransfig,
    author: 'admin',
    date: 'March 1, 2026',
    title: 'It Is Good For Us To Be Here: The Transfiguration and Jonah',
    link: 'https://linwilder.com/category/articles/',
  },
];

function LatestPostCard({ post }) {
  return (
    <div className="flex flex-col gap-5 w-[343px]">
      {/* Category */}
      <a
        href={post.link}
        target="_blank"
        rel="noreferrer"
        className="font-['Questrial'] text-[#9d674d] text-xl leading-[26px] capitalize underline hover:opacity-80 transition"
      >
        {post.category}
      </a>

      {/* Image */}
      <div className="w-full overflow-hidden" style={{ aspectRatio: '3/2' }}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Meta + title */}
      <div className="flex flex-col gap-1">
        <p className="font-['Questrial'] text-black text-sm leading-[29px]">
          <span className="underline cursor-pointer">{post.author}</span>
          {'  '}{post.date}
        </p>
        <a
          href={post.link}
          target="_blank"
          rel="noreferrer"
          className="font-['Aboreto'] text-black text-base leading-[29px] hover:text-[#592c33] transition"
        >
          {post.title}
        </a>
      </div>
    </div>
  );
}

export default function SRLatestPosts() {
  return (
    <section className="bg-[#f6efe9] py-16 px-8">
      <div className="max-w-[1215px] mx-auto flex flex-col items-center gap-14">
        {/* Heading */}
        <h2 className="font-['Aboreto'] text-[#82483d] text-[36px] leading-[34px] uppercase text-center">
          latest sunday <span className="normal-case font-['Aboreto']">Reflections</span>
        </h2>

        {/* Three-column cards */}
        <div className="flex gap-[93px] items-start justify-center w-full">
          {latestPosts.map((post) => (
            <LatestPostCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
