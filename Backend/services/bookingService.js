const Booking = require("../models/Booking");
const Product = require("../models/Product");

const createBooking = async (productId, userId, nbOfPeople) => {
  const product = await Product.findById(productId);

  if (!product) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }

  if (product.availableSeats < nbOfPeople) {
    const error = new Error("Not enough seats available");
    error.statusCode = 400;
    throw error;
  }

  const totalPrice = product.price * nbOfPeople;

  const booking = await Booking.create({
    user: userId,
    product: productId,
    nbOfPeople,
    totalPrice
  });

  await Product.findByIdAndUpdate(productId, {
    $inc: { availableSeats: -nbOfPeople }
  });

  return booking;
};

const getBookings = async () => {
  return await Booking.find()
    .populate("user", "username email phoneNumber")
    .populate("product");
};

const getBookingById = async (id) => {
  return await Booking.findById(id)
    .populate("user", "username email phoneNumber")
    .populate("product");
};

const updateBooking = async (id, data) => {
  const booking = await Booking.findById(id);

  if (!booking) {
    throw new Error("Booking not found");
  }

  return await Booking.findByIdAndUpdate(id, data, { new: true });
};

const deleteBooking = async (id) => {
  const booking = await Booking.findById(id);

  if (!booking) {
    throw new Error("Booking not found");
  }

  // restore seats
  await Product.findByIdAndUpdate(booking.product, {
    $inc: { availableSeats: booking.nbOfPeople }
  });

  await Booking.findByIdAndDelete(id);

  return { message: "Booking cancelled successfully" };
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking
};