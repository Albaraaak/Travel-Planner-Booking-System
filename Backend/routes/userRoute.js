const express = require('express');
const { insertUserValidation } = require('../validators/userValidation');
const { insertUserController,getUserByIdController, getUsersController ,changePasswordController, updateProfileController ,deleteProfileController } = require('../Controllers/userControllers');
const authenticateToken = require('../middleware/authentication');
const {loginController} = require ('../Controllers/authController')
const router = express.Router();


router.post('/signup',insertUserValidation, insertUserController);
router.post('/login', loginController);
router.get('/getUserById/:id',authenticateToken,getUserByIdController);
router.get('/admin/getAllUsers',authenticateToken,getUsersController);
router.put('/changePassword', authenticateToken, changePasswordController);
router.put('/updateProfile', authenticateToken, updateProfileController);
router.delete('/deleteProfile', authenticateToken, deleteProfileController);
module.exports = router;