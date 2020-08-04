const express = require('express');
const router  = express.Router();
const CelebModel = require('../models/celebrity')
const MovieModel = require('../models/movies')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


module.exports = router;
