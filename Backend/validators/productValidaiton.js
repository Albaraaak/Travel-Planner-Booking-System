const { check } = require('express-validator');

const insertProductValidation = [

  check('title')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('Title is required'),

  check('description')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ min: 10 })
    .withMessage('Description must be at least 10 characters'),

  check('destination')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('Destination is required'),

  check('nbOfPeople')
    .exists()
    .isInt({ min: 1 })
    .withMessage('Number of people must be at least 1'),

  check('price')
    .exists()
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),

  check('date')
    .exists()
    .isISO8601()
    .toDate()
    .withMessage('Invalid date format'),

  check('type')
    .exists()
    .isIn(['adventure', 'relax', 'cultural', 'family'])
    .withMessage('Invalid type'),

  // ⭐ Rating
  check('rating')
    .optional()
    .isFloat({ min: 0, max: 5 }),

  // ⭐ Reviews
  check('reviews')
    .optional()
    .isArray(),

  check('reviews.*.user')
    .optional()
    .notEmpty(),

  check('reviews.*.comment')
    .optional()
    .isLength({ min: 5 }),

  check('reviews.*.rating')
    .optional()
    .isFloat({ min: 1, max: 5 }),

];

module.exports = { insertProductValidation };