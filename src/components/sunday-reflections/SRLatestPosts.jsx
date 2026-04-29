function LatestPostCard({ post }) {
  return (
    <article className="flex w-full flex-col gap-2.5 lg:gap-5">
      <a
        href={post.url}
        target="_blank"
        rel="noreferrer"
        className="font-['Questrial'] text-[12px] leading-4 text-[#9d674d] capitalize underline transition hover:opacity-80 lg:text-xl lg:leading-[26px]"
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
        <p className="flex items-center gap-1.5 font-['Questrial'] text-[8px] leading-3 text-black lg:text-sm lg:leading-7.25">
          <span className="underline">{post.author.replace(/\b\w/g, (c) => c.toUpperCase())}</span>
          <span>{post.dateDisplay}</span>
        </p>
        <a
          href={post.url}
          target="_blank"
          rel="noreferrer"
          className="font-['Aboreto'] text-[10px] md:text-[13px] leading-6 text-black transition hover:text-[#592c33] lg:text-base lg:leading-7.25"
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
    <section className="bg-[#f6efe9] px-4 py-12 lg:px-8 lg:py-16">
      <div className="max-w-[1215px] mx-auto flex flex-col items-center gap-14">
        <h2 className="font-['Aboreto'] text-center text-[24px] leading-[1.1] uppercase text-[#82483d] lg:text-[36px] lg:leading-[34px]">
          latest sunday <span className="normal-case font-['Aboreto']">Reflections</span>
        </h2>

        <div className="grid w-full grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3 lg:gap-23.25">
          {posts.map((post, index) => (
            <div
              key={post.id ?? post.slug ?? post.title}
              className={index === 2 ? 'col-span-2 mx-auto w-full max-w-[210px] lg:col-span-1 lg:max-w-none' : ''}
            >
              <LatestPostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
