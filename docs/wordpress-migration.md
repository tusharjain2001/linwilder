# WordPress Migration Plan

## Current approach

The Sunday Reflections page now reads from `public/data/sunday-reflections.json` instead of hardcoded JSX arrays. That JSON can be generated from the existing WordPress site with:

```bash
npm run import:wordpress
```

If Sunday Reflections posts live under a specific WordPress category, use:

```bash
npm run import:wordpress -- --category "Sunday Reflections"
```

The importer calls the WordPress REST API at `https://linwilder.com/wp-json/wp/v2/posts?_embed=1`, paginates through all posts, and stores a normalized payload with:

- `id`
- `slug`
- `title`
- `excerpt`
- `author`
- `dateIso`
- `dateDisplay`
- `url`
- `category`
- `categories`
- `featuredImage`
- `contentHtml`

## Migration phases

1. Use the importer to pull all blog posts from WordPress into the JSON feed.
2. Review category naming on the WordPress side so Sunday Reflections can be filtered cleanly.
3. Once the Node backend is ready, reuse the same normalized shape to insert records into your database instead of writing JSON.
4. Expose those records through your own API, then switch the frontend loader from `/data/sunday-reflections.json` to your Node endpoint.
5. Add a one-time slug redirect table so old WordPress URLs continue to resolve after cutover.

## Recommended backend model

For the Node platform, a `posts` table or collection should at minimum store:

- `source_id`
- `source_system`
- `slug`
- `title`
- `excerpt`
- `content_html`
- `author_name`
- `published_at`
- `featured_image_url`
- `canonical_url`
- `status`

And a related `post_categories` table or array field for categories.

## Why this flow works

- It avoids manually copying blog content.
- It gives you a repeatable import process.
- It lets the frontend move off placeholders immediately.
- It keeps the final Node migration simple because the frontend and importer already agree on one content shape.
