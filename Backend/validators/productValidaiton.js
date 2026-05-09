const { check } = require('express-validator');

const insertProductValidation = [

  check('title')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('Title is required'),

   check('duration')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('Duration is required'),

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
    // ⭐ NEW: available (true/false)
  check('available')
    .optional()
    .isBoolean()
    .withMessage('Available must be true or false'),

  // ⭐ NEW: discount
  check('discount')
    .optional()
    .isInt({ min: 0, max: 100 })
    .withMessage('Discount must be between 0 and 100'),

  // ⭐ NEW: image
  check('image')
    .optional()
    .isURL()
    .withMessage('Image must be a valid URL'),


];

module.exports = { insertProductValidation };