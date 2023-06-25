// models/books.js
const mongoose = require('mongoose');

// define the book schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true }
});

module.exports = mongoose.model('Book', bookSchema);
