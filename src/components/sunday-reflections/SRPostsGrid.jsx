function PostCard({ post }) {
  return (
    <article className="flex h-full flex-col gap-2.5 bg-[#e4e8d7] p-4 lg:gap-3 lg:p-8">
      <p className="font-['Questrial'] text-[12px] leading-5 uppercase text-[#592c33] lg:text-xl lg:leading-[26px]">
        {post.category}
      </p>

      <div
        className="w-full flex-shrink-0 overflow-hidden rounded-[6px] lg:rounded-[10px]"
        style={{ aspectRatio: '16/10' }}
      >
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

      <p className="font-['Questrial'] text-[11px] leading-5 text-black lg:text-sm lg:leading-[29px]">
        <span className="underline">{post.author.replace(/\b\w/g, (c) => c.toUpperCase())}</span>
        {' '}{post.dateDisplay}
      </p>

      <a
        href={post.url}
        target="_blank"
        rel="noreferrer"
        className="font-['Questrial'] text-[12px] leading-5 text-[#592c33] transition hover:opacity-80 lg:text-base lg:leading-[21px]"
      >
        {post.title}
      </a>

      {post.excerpt ? (
        <p className="line-clamp-4 font-['Questrial'] text-[11px] leading-4.5 text-black lg:line-clamp-none lg:text-sm lg:leading-[21px]">
          {post.excerpt}
        </p>
      ) : null}
    </article>
  );
}

export default function SRPostsGrid({ posts, loading, error, hasMorePosts, loadingMore, onLoadMore }) {
  return (
    <section className="bg-[#f6efe9] px-4 py-10 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {loading ? (
          <p className="font-['Questrial'] text-center text-[#595959] text-lg">Loading reflections...</p>
        ) : null}

        {!loading && error ? (
          <p className="font-['Questrial'] text-center text-[#8b3d3d] text-lg">{error}</p>
        ) : null}

        {!loading && !error && posts.length > 0 ? (
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-3 md:gap-6 xl:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.id ?? post.slug ?? post.title} post={post} />
              ))}
            </div>

            {hasMorePosts ? (
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={onLoadMore}
                  disabled={loadingMore}
                  className="border border-[#592c33] px-6 py-3 font-['Questrial'] text-[#592c33] text-base uppercase tracking-wide hover:bg-[#592c33] hover:text-[#f6efe9] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loadingMore ? 'Loading...' : 'Load More'}
                </button>
              </div>
            ) : null}
          </div>
        ) : null}

        {!loading && !error && posts.length === 0 ? (
          <p className="font-['Questrial'] text-center text-[#595959] text-lg">
            No reflections found for this category yet.
          </p>
        ) : null}
      </div>
    </section>
  );
}
