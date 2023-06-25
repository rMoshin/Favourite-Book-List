// modules required for routing
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// define the book model
const Book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  Book.find((err, books) => {
    if (err) {
      console.error(err);
      res.redirect('/');
    } else {
      res.render('books/index', { title: 'Books', books: books });
    }
  });
});

// GET the Book Details page in order to add a new Book
router.get('/details/new', (req, res, next) => {
  res.render('books/details', {
    title: 'Add Book',
    book: {}
  });
});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {
  const newBook = new Book({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    author: req.body.author,
    genre: req.body.genre
  });

  newBook.save((err) => { // Use save() instead of create()
    if (err) {
      console.error(err);
    }
    res.redirect('/books');
  });
});

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', (req, res, next) => {
  const id = req.params.id;

  Book.findById(id, (err, foundBook) => {
    if (err) {
      console.error(err);
      res.redirect('/books');
    } else {
      res.render('books/details', {
        title: 'Edit Book',
        book: foundBook
      });
    }
  });
});

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', (req, res, next) => {
  const id = req.params.id;
  const updatedBook = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    author: req.body.author,
    genre: req.body.genre
  };

  Book.findByIdAndUpdate(id, updatedBook, { new: true }, (err) => {
    if (err) {
      console.error(err);
      res.redirect('/books');
    } else {
      res.redirect('/books');
    }
  });
});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
  const id = req.params.id;
  Book.remove({ _id: id }, (err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/books');
  });
});

// GET the Book Details page in order to view book details
router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  Book.findById(id, (err, foundBook) => {
    if (err) {
      console.error(err);
      res.redirect('/books');
    } else {
      res.render('books/details', {
        title: 'Book Details',
        book: foundBook
      });
    }
  });
});

module.exports = router;
