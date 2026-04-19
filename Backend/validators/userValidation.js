const { check } = require('express-validator');

const insertUserValidation  = [
  check('firstName')
    .notEmpty()
    .withMessage('First name is required'),

  check('lastName')
    .notEmpty()
    .withMessage('Last name is required'),

  check('username')
    .notEmpty()
    .withMessage('Username is required')
    .isAlphanumeric()
    .withMessage('Username must be alphanumeric'),

  check('password')
    .isLength({ min: 6 })
    .withMessage('Your password is too short')
    .isStrongPassword()
    .withMessage('Use a combination of lowercase, uppercase, numbers, and special characters for your password'),

  check('email')
    .isEmail()
    .withMessage('Wrong email format'),
  
  check('phoneNumber')
    .matches(/^\+?[1-9]\d{1,14}$/)
    .withMessage('Invalid phone number format. Use the international format, e.g., +1234567890'),
    
];
    const changePasswordValidation = [
  check('currentPassword')
    .notEmpty()
    .withMessage('Current password is required'),

  check('newPassword')
    .notEmpty()
    .withMessage('New password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
];
const updateProfileValidation = [
  check('name').optional().isLength({ min: 2 }),
  check('email').optional().isEmail(),
  check('phone').optional().isLength({ min: 6 }),
];

module.exports = { insertUserValidation,changePasswordValidation,updateProfileValidation}