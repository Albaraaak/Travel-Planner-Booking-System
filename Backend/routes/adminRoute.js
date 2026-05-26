const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/authentication");
const adminOnly = require("../middleware/adminOnly");

const User = require("../models/User");
const Product = require("../models/Product");
const Booking = require("../models/Booking");

router.get("/stats", authenticateToken, adminOnly, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalBookings = await Booking.countDocuments();

    const bookings = await Booking.find();

    const totalRevenue = bookings.reduce((sum, booking) => {
      return sum + booking.totalPrice;
    }, 0);

    res.json({
      totalUsers,
      totalProducts,
      totalBookings,
      totalRevenue
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;