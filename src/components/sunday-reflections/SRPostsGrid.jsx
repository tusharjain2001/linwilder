function PostCard({ post }) {
  return (
    <article className="bg-[#e4e8d7] flex h-full flex-col gap-3 p-8">
      <p className="font-['Questrial'] text-[#592c33] text-xl leading-[26px] uppercase">
        {post.category}
      </p>

      <div className="w-full flex-shrink-0 overflow-hidden rounded-[10px]" style={{ aspectRatio: '16/10' }}>
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

      <p className="font-['Questrial'] text-black text-sm leading-[29px]">
        <span className="underline">{post.author}</span>
        {' '}{post.dateDisplay}
      </p>

      <a
        href={post.url}
        target="_blank"
        rel="noreferrer"
        className="font-['Questrial'] text-[#592c33] text-base leading-[21px] hover:opacity-80 transition"
      >
        {post.title}
      </a>

      {post.excerpt ? (
        <p className="font-['Questrial'] text-black text-sm leading-[21px]">
          {post.excerpt}
        </p>
      ) : null}
    </article>
  );
}

export default function SRPostsGrid({ posts, loading, error, hasMorePosts, loadingMore, onLoadMore }) {
  return (
    <section className="bg-[#f6efe9] py-10 px-8 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {loading ? (
          <p className="font-['Questrial'] text-center text-[#595959] text-lg">Loading reflections...</p>
        ) : null}

        {!loading && error ? (
          <p className="font-['Questrial'] text-center text-[#8b3d3d] text-lg">{error}</p>
        ) : null}

        {!loading && !error && posts.length > 0 ? (
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
