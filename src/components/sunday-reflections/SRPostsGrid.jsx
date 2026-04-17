import postArticles      from '../../assets/images/sunday-reflections/post-articles.png';
import postChurch        from '../../assets/images/sunday-reflections/post-church.png';
import postTransfig      from '../../assets/images/sunday-reflections/post-transfiguration.png';
import postBooks         from '../../assets/images/sunday-reflections/post-books.png';
import postGiving        from '../../assets/images/sunday-reflections/post-giving.png';
import postHumility      from '../../assets/images/sunday-reflections/post-humility.png';

const posts = [
  {
    category: 'ARTICLES',
    image: postArticles,
    author: 'Admin',
    date: 'March 15, 2026',
    title: 'Anamnesis: Perils of Ignoring It',
    excerpt: 'Anamnesis Four-or more-syllable words are intimidating, like this one: anamnesis. But to lovers of words, this one means f…',
  },
  {
    category: 'CHRISTIANITY',
    image: postTransfig,
    author: 'Admin',
    date: 'March 1, 2026',
    title: 'It is good for us to be here: The Transfiguration and Jonah',
    excerpt: null,
  },
  {
    category: 'CHRISTIANITY',
    image: postChurch,
    author: 'Admin',
    date: 'March 8, 2026',
    title: 'Knowledge is Power: The right not to know',
    excerpt: 'Knowledge is power. The phrase, knowledge is power, is a well-known mantra. One that, for some, is unquestioned. It…',
  },
  {
    category: 'BOOKS',
    image: postBooks,
    author: 'Admin',
    date: 'March 1, 2026',
    title: 'Emergency! Prayer, Paradox, and Matthew McCoughney',
    excerpt: null,
  },
  {
    category: 'CHRISTIANITY',
    image: postGiving,
    author: 'Admin',
    date: 'February 22, 2026',
    title: 'Giving — Do you still not understand',
    excerpt: null,
  },
  {
    category: 'BOOK',
    image: postHumility,
    author: 'Admin',
    date: 'March 1, 2026',
    title: 'Humility Rules: Rereading Four Years Later',
    excerpt: null,
  },
];

function PostCard({ post }) {
  return (
    <div className="bg-[#e4e8d7] flex flex-col gap-3 p-8 h-[495px]">
      {/* Category */}
      <p className="font-['Questrial'] text-[#592c33] text-xl leading-[26px] uppercase">
        {post.category}
      </p>

      {/* Image */}
      <div className="w-full flex-shrink-0 overflow-hidden rounded-[10px]" style={{ aspectRatio: '16/10' }}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Meta */}
      <p className="font-['Questrial'] text-black text-sm leading-[29px]">
        <span className="underline cursor-pointer">{post.author}</span>
        {' '}{post.date}
      </p>

      {/* Title */}
      <h3 className="font-['Questrial'] text-[#592c33] text-base leading-[21px]">
        {post.title}
      </h3>

      {/* Excerpt */}
      {post.excerpt && (
        <p className="font-['Questrial'] text-black text-sm leading-[21px] line-clamp-2">
          {post.excerpt}
        </p>
      )}
    </div>
  );
}

export default function SRPostsGrid() {
  return (
    <section className="bg-[#f6efe9] py-10 px-20">
      <div className="grid grid-cols-3 gap-6 max-w-[1280px] mx-auto">
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>
    </section>
  );
}
