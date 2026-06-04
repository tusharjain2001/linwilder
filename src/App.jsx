import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import AboutPage from './pages/AboutPage';
import SundayReflectionsPage from './pages/SundayReflectionsPage';
import ReviewPage from './pages/ReviewPage';
import ContactPage from './pages/ContactPage';
import { defaultBook } from './lib/books';
import { bookPageRoutes } from './pages/books';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6efe9]">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<Navigate to={defaultBook.path} replace />} />
        {bookPageRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/book/:bookSlug" element={<BookPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sunday-reflections" element={<SundayReflectionsPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <NewsletterSection />
      <Footer />
    </div>
  );
}
