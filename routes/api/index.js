const express = require('express');
const book_router = require('./book');

const router = express.Router();

router.use('/book', book_router);

module.exports = router;