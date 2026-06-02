import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({ paymentMethod: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    const productId = state?.id || state?._id;

    if (!productId) {
      alert("Missing package ID. Please go back and try again.");
      return;
    }

    try {
      await axios.post(
        `http://localhost:3000/api/bookings/order/${productId}`,
        { nbOfPeople: state?.guests || 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      alert("Booking Confirmed ✅");
      setForm({ paymentMethod: "" });
      navigate("/profile");
    } catch (error) {
      console.log("BOOKING ERROR:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Booking failed");
    }
  };

  const tripName =
    state?.title || state?.country || state?.to || state?.destination || "Booking";

  return (
    <>
      <Header />

      <div className="checkout checkout-page">
        <div className="checkout-summary">
          <span className="details-pill">Secure Checkout</span>
          <h1>Complete Your Booking</h1>
          <p>
            Review your trip and select the payment method that works best for
            you.
          </p>

          <div className="details-grid checkout-grid">
            <div>
              <b>Trip</b>
              <span>{tripName}</span>
            </div>

            {state?.from && (
              <div>
                <b>From</b>
                <span>{state.from}</span>
              </div>
            )}

            {state?.destination && (
              <div>
                <b>Destination</b>
                <span>{state.destination}</span>
              </div>
            )}

            {state?.country && (
              <div>
                <b>Destination</b>
                <span>{state.country}</span>
              </div>
            )}

            {state?.price && (
              <div>
                <b>Price</b>
                <span>${state.price}</span>
              </div>
            )}

            {state?.totalPrice && (
              <div>
                <b>Total Price</b>
                <span>${state.totalPrice}</span>
              </div>
            )}

            {state?.guests && (
              <div>
                <b>Guests</b>
                <span>{state.guests}</span>
              </div>
            )}

            {state?.departureDate && (
              <div>
                <b>Departure</b>
                <span>{state.departureDate}</span>
              </div>
            )}

            {state?.returnDate && (
              <div>
                <b>Return</b>
                <span>{state.returnDate}</span>
              </div>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Payment Method</h3>

          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Payment</option>
            <option value="whish">Whish Money</option>
            <option value="western">Western Union</option>
            <option value="office">Visit Our Office</option>
          </select>

          {form.paymentMethod === "office" && (
            <p className="payment-note">
              📍 Visit us at: Bekaa, Masnaa-Rashaya Road
            </p>
          )}

          {form.paymentMethod === "whish" && (
            <p className="payment-note">💸 Send Whish Money to: 76-410829</p>
          )}

          {form.paymentMethod === "western" && (
            <p className="payment-note">🟡 Via Western Union to: Let's GO</p>
          )}

          <button type="submit">Confirm Booking</button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;