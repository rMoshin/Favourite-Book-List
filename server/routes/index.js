/*
File: styles.css
Student's Name: Rayyan Mohsin
StudentID: 301270163
Date: June 25, 2023
Web App name: Favourite Book List
*/ 

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
