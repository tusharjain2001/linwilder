import { useEffect, useMemo, useState } from 'react';
import SRHero from '../components/sunday-reflections/SRHero';
import SRCategories from '../components/sunday-reflections/SRCategories';
import SRPostsGrid from '../components/sunday-reflections/SRPostsGrid';
import SRLatestPosts from '../components/sunday-reflections/SRLatestPosts';
import {
  loadSundayReflectionCategories,
  loadSundayReflectionsPage,
} from '../lib/sundayReflections';

const POSTS_PER_PAGE = 6;

export default function SundayReflectionsPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let isMounted = true;

    async function fetchCategories() {
      try {
        const importedCategories = await loadSundayReflectionCategories();

        if (isMounted) {
          setCategories(importedCategories);
        }
      } catch {
        if (isMounted) {
          setCategories(['All']);
        }
      }
    }

    fetchCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function fetchPosts() {
      try {
        setLoading(true);
        setError('');

        const payload = await loadSundayReflectionsPage({
          page: 1,
          perPage: POSTS_PER_PAGE,
          category: activeCategory,
        });

        if (isMounted) {
          setPosts(payload.posts);
          setCurrentPage(1);
          setTotalPages(payload.totalPages);
        }
      } catch (loadError) {
        if (isMounted) {
          setError(loadError.message);
          setPosts([]);
          setCurrentPage(1);
          setTotalPages(1);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, [activeCategory]);

  const latestPosts = useMemo(() => posts.slice(0, 3), [posts]);
  const hasMorePosts = currentPage < totalPages;

  async function handleLoadMore() {
    if (loadingMore || !hasMorePosts) {
      return;
    }

    const nextPage = currentPage + 1;

    try {
      setLoadingMore(true);
      const payload = await loadSundayReflectionsPage({
        page: nextPage,
        perPage: POSTS_PER_PAGE,
        category: activeCategory,
      });

      setPosts((currentPosts) => [...currentPosts, ...payload.posts]);
      setCurrentPage(nextPage);
      setTotalPages(payload.totalPages);
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoadingMore(false);
    }
  }

  return (
    <>
      <SRHero />
      <SRCategories
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <SRPostsGrid
        posts={posts}
        loading={loading}
        error={error}
        hasMorePosts={hasMorePosts}
        loadingMore={loadingMore}
        onLoadMore={handleLoadMore}
      />
      <SRLatestPosts posts={latestPosts} />
    </>
  );
}
