const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/authentication");

const {createBookingController,getBookingsController,getBookingByIdController,updateBookingController,deleteBookingController} = require("../Controllers/bookingController");
const {createBookingValidation,updateBookingValidation} = require("../validators/bookingValidation");

router.post("/order/:productId",authenticateToken,createBookingValidation,createBookingController);
router.get("/", authenticateToken, getBookingsController);
router.get("/:id", authenticateToken, getBookingByIdController);
router.put("/:id",authenticateToken, updateBookingValidation, updateBookingController);
router.delete("/:id", authenticateToken, deleteBookingController);
module.exports = router;