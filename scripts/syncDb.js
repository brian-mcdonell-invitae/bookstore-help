const sequelize = require('../models');
const Book = require('../models/book');

const syncDb = async () => {
  try {
    await sequelize.sync({ force: true }); // This will drop the tables if they exist
    console.log('Database synced.');

    // Add some initial data
    await Book.bulkCreate([
      { title: '1984', author: 'George Orwell', price: 9.99 },
      { title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 8.99 },
      { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 7.99 },
    ]);
    
    console.log('Sample data added.');
  } catch (error) {
    console.error('Error syncing database:', error);
  } finally {
    await sequelize.close();
  }
};

syncDb();
