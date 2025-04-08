const express = require('express');
const { validationResult } = require('express-validator');
const { addBookValidation } = require('../../../validators/book');

const router = express.Router();
const book_controller = require('../../../controllers/api/book');

// Define API routes
router.get('/', (req, res)=>{
    book_controller.getAll(req, res);
});

router.post('/', addBookValidation(), (req, res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    book_controller.create(req, res)
});

module.exports = router;