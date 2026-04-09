const { validationResult } = require('express-validator');
const {insertUser} = require('../Services/userServices'); 

const insertUserController = (req, res) => {
  try {
    // Validate the request body
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // Return Bad Request error with validation errors
       return res.status(400).json({
        success: false,
        error: errors.array(),
        message: "Validation error"   
    })
    }

    // Extract user data from request body
    const { firstName, lastName, username, email, password,phoneNumber } = req.body;

    // Call the user service to insert the new user
    const response = insertUser(firstName, lastName, username, email, password,phoneNumber);

    // Return successful response with the inserted user data
      res.status(201).json({
        success: true,
        data: response,
        message: "Signed Up Successfuly"   
    })

  } catch (error) {
    // Handle internal errors
      res.status(500).json({
        success: false,
        error: err.message,
        message: "Server error"   
    });
  }
};

module.exports = { insertUserController}