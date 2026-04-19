const { check } = require('express-validator');
const insertTicketValidation = [

  check('from')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('Departure location is required'),

  check('to')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('Destination is required'),

  check('departureDate')
    .exists()
    .isISO8601()
    .withMessage('Invalid departure date format'),

  check('returnDate')
    .optional()
    .isISO8601()
    .withMessage('Invalid return date format'),

  check('price')
    .exists()
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),

  check('availableSeats')
    .exists()
    .isInt({ min: 1 })
    .withMessage('Available seats must be at least 1'),

  check('type')
    .exists()
    .isIn(['economy', 'business', 'first-class'])
    .withMessage('Invalid ticket type'),



];
const updateTicketValidation = [

  check('from')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Departure cannot be empty'),

  check('to')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Destination cannot be empty'),

  check('departureDate')
    .optional()
    .isISO8601()
    .withMessage('Invalid departure date'),

  check('returnDate')
    .optional()
    .isISO8601()
    .withMessage('Invalid return date'),

  check('price')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Price must be positive'),

  check('availableSeats')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Seats must be at least 1'),

  check('type')
    .optional()
    .isIn(['economy', 'business', 'first-class'])
    .withMessage('Invalid type'),

];
module.exports = { insertTicketValidation , updateTicketValidation };

