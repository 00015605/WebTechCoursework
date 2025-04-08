const express = require('express');
const { validationResult } = require('express-validator');
const { addBookValidation, updateBookValidation, deleteBookValidation } = require('../../../validators/book');

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

router.put('/:id', updateBookValidation(), (req, res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  book_controller.update(req, res)
});

router.delete('/:id', deleteBookValidation(), (req, res, next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  book_controller.delete(req, res)
});

module.exports = router;