/*
File: styles.css
Student's Name: Rayyan Mohsin
StudentID: 301270163
Date: June 25, 2023
Web App name: Favourite Book List
*/ 

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
