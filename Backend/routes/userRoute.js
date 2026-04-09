const express = require('express');
const router = express.Router();
const { insertUserValidation } = require('../Validators/userValidate');
const { insertUserController } = require('../Controllers/userControllers');

router.post('/signup', insertUserValidation, insertUserController);


module.exports = router;