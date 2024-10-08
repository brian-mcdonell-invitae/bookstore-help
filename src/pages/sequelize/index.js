import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/books-sequelize');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Bookstore</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} - ${book.price.toFixed(2)} (source: {book.source})
          </li>
        ))}
      </ul>
    </div>
  );
}
