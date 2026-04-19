function LatestPostCard({ post }) {
  return (
    <article className="flex flex-col gap-5 w-full max-w-[343px]">
      <a
        href={post.url}
        target="_blank"
        rel="noreferrer"
        className="font-['Questrial'] text-[#9d674d] text-xl leading-[26px] capitalize underline hover:opacity-80 transition"
      >
        {post.category}
      </a>

      <div className="w-full overflow-hidden" style={{ aspectRatio: '3/2' }}>
        {post.featuredImage ? (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#d5dbc4]" />
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-['Questrial'] text-black text-sm leading-[29px]">
          <span className="underline">{post.author}</span>
          {'  '}{post.dateDisplay}
        </p>
        <a
          href={post.url}
          target="_blank"
          rel="noreferrer"
          className="font-['Aboreto'] text-black text-base leading-[29px] hover:text-[#592c33] transition"
        >
          {post.title}
        </a>
      </div>
    </article>
  );
}

export default function SRLatestPosts({ posts }) {
  if (!posts.length) {
    return null;
  }

  return (
    <section className="bg-[#f6efe9] py-16 px-8">
      <div className="max-w-[1215px] mx-auto flex flex-col items-center gap-14">
        <h2 className="font-['Aboreto'] text-[#82483d] text-[36px] leading-[34px] uppercase text-center">
          latest sunday <span className="normal-case font-['Aboreto']">Reflections</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[93px] items-start justify-center w-full">
          {posts.map((post) => (
            <LatestPostCard key={post.id ?? post.slug ?? post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
