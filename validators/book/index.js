const { body, param } = require('express-validator');
const book_service = require('../../services/book');

const addBookValidation = () => {
  return [
    body('title')
      .notEmpty().withMessage('Title must not be empty!')
      .isLength({ min: 8, max: 255 }).withMessage('Title must be between 8 and 255 characters long!'),
    body('author')
      .notEmpty().withMessage('Author name must not be empty!')
      .isLength({ min: 8, max: 255 }).withMessage('Author name must be between 8 and 255 characters long!'),
    body('genre')
      .notEmpty().withMessage('Genre must be selected!'),
    body('rating')
      .notEmpty().withMessage('Rating must be selected!'), 
    body('dateFinished')
      .notEmpty().withMessage('Finished date must not be empty!')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
        .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.')       
  ];
};

const deleteBookValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await book_service.getById(id);
      if (!exists) {
        throw new Error('Book not found!');
      }
    })
  ];
};

const updateBookValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await book_service.getById(id);
      if (!exists) {
        throw new Error('Book not found!');
      }
    }),
    body('title')
      .notEmpty().withMessage('Title must not be empty!')
      .isLength({ min: 8, max: 255 }).withMessage('Title must be between 8 and 255 characters long!'),
    body('author')
      .notEmpty().withMessage('Author name must not be empty!')
      .isLength({ min: 8, max: 255 }).withMessage('Author name must be between 8 and 255 characters long!'),
    body('genre')
      .notEmpty().withMessage('Genre must be selected!'),
    body('rating')
      .notEmpty().withMessage('Rating must be selected!'), 
    body('dateFinished')
      .notEmpty().withMessage('Finished date must not be empty!')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
        .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),     
  ];
};

module.exports = {
    addBookValidation,
    deleteBookValidation,
    updateBookValidation
};