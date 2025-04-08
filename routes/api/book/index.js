const express = require('express');

const router = express.Router();
const book_controller = require('../../../controllers/api/book');

// Define API routes
router.get('/', (req, res)=>{
    book_controller.getAll(req, res);
});

module.exports = router;