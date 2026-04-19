const { validationResult } = require("express-validator");
const {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking
} = require("../services/bookingService");

// CREATE
const createBookingController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: errors.array()
      });
    }

    const { productId } = req.params;
    const userId = req.user.id;
    const { nbOfPeople } = req.body;

    const result = await createBooking(productId, userId, nbOfPeople);

    res.status(201).json({
      success: true,
      data: result
    });

  } catch (err) {
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message
    });
  }
};

// GET ALL
const getBookingsController = async (req, res) => {
  try {
    const result = await getBookings();

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// GET BY ID
const getBookingByIdController = async (req, res) => {
  try {
    const result = await getBookingById(req.params.id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// UPDATE
const updateBookingController = async (req, res) => {
  try {
    const result = await updateBooking(req.params.id, req.body);

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// DELETE
const deleteBookingController = async (req, res) => {
  try {
    const result = await deleteBooking(req.params.id);

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

module.exports = {
  createBookingController,
  getBookingsController,
  getBookingByIdController,
  updateBookingController,
  deleteBookingController
};