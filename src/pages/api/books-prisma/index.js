import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /api/books - Get the list of books
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const books = await prisma.book.findMany();
      books.forEach(book => book.source = 'prisma')
      res.status(200).json(books);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error fetching books' });
    }
  } else if (req.method === 'POST') {
    // POST /api/books - Add a new book to the catalog
    const { title, author, price } = req.body;
    try {
      const newBook = await prisma.book.create({
        data: { title, author, price },
      });
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ error: 'Error creating new book' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
