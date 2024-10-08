const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true, // Automatically manages `createdAt` and `updatedAt` fields.
});

module.exports = Book;
