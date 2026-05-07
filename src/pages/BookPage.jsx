import { Navigate } from 'react-router-dom';
import { defaultBook } from '../lib/books';

export default function BookPage() {
  return <Navigate to={defaultBook.path} replace />;
}
