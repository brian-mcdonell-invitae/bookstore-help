import Book from '../../../models/book';

// API Route: GET /api/books
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const books = await Book.findAll();
      books.forEach(book => book.setDataValue('source', 'sequelize'))
      res.status(200).json(books);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Failed to fetch books.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
