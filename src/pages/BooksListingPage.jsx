import AllBooksGrid from '../components/book/AllBooksGrid';
import StatsSection from '../components/StatsSection';

export default function BooksListingPage() {
  return (
    <>
      <AllBooksGrid />
      <StatsSection className="bg-[#efd3b1]" />
    </>
  );
}
