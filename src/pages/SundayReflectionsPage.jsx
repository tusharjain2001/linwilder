import SRHero        from '../components/sunday-reflections/SRHero';
import SRCategories  from '../components/sunday-reflections/SRCategories';
import SRPostsGrid   from '../components/sunday-reflections/SRPostsGrid';
import SRLatestPosts from '../components/sunday-reflections/SRLatestPosts';

export default function SundayReflectionsPage() {
  return (
    <>
      <SRHero />
      <SRCategories />
      <SRPostsGrid />
      <SRLatestPosts />
    </>
  );
}
