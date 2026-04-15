import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import AboutPage from './pages/AboutPage';
import SundayReflectionsPage from './pages/SundayReflectionsPage';
import ReviewPage from './pages/ReviewPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6efe9]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookPage />} />
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
