const { check } = require("express-validator");

const createBookingValidation = [
  check("nbOfPeople")
    .notEmpty()
    .withMessage("Number of people is required")
    .isInt({ min: 1 })
    .withMessage("Must be at least 1")
];

const updateBookingValidation = [
  check("nbOfPeople")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Must be at least 1"),

  check("status")
    .optional()
    .isIn(["pending", "paid", "confirmed", "cancelled"])
    .withMessage("Invalid status")
];

module.exports = {
  createBookingValidation,
  updateBookingValidation
};