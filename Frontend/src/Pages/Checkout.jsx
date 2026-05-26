import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({ paymentMethod: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.paymentMethod) {
      alert("Please select a payment method!");
      return;
    }
    const newBooking = {
      _id: Date.now(),
      product: { title: state?.title || state?.country || state?.to || state?.destination || "Booking" },
      type: state?.ticketId ? "Ticket" : "Package",
      from: state?.from || "",
      destination: state?.destination || state?.country || state?.to || "Unknown",
      departureDate: state?.departureDate || state?.date || "",
      returnDate: state?.returnDate || "",
      travelType: state?.travelType || "",
      travelClass: state?.type || "",
      nbOfPeople: state?.passengers || state?.guests || 1,
      totalPrice: state?.totalPrice ?? state?.price ?? "N/A",
      paymentMethod: form.paymentMethod,
      status: "Confirmed",
      bookedAt: new Date().toLocaleDateString(),
    };
    const oldBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...oldBookings, newBooking]));
    alert("Booking Confirmed ✅");
    setForm({ paymentMethod: "" });
    navigate("/profile");
  };

  const tripName = state?.title || state?.country || state?.to || state?.destination || "Booking";

  return (
    <>
      <Header />
      <div className="checkout checkout-page">
        <div className="checkout-summary">
          <span className="details-pill">Secure Checkout</span>
          <h1>Complete Your Booking</h1>
          <p>Review your trip and select the payment method that works best for you.</p>
          <div className="details-grid checkout-grid">
            <div><b>Trip</b><span>{tripName}</span></div>
            {state?.from && <div><b>From</b><span>{state.from}</span></div>}
            {state?.destination && <div><b>Destination</b><span>{state.destination}</span></div>}
            {state?.country && <div><b>Destination</b><span>{state.country}</span></div>}
            {state?.price && <div><b>Price</b><span>${state.price}</span></div>}
            {state?.departureDate && <div><b>Departure</b><span>{state.departureDate}</span></div>}
            {state?.returnDate && <div><b>Return</b><span>{state.returnDate}</span></div>}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Payment Method</h3>
          <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
            <option value="">Select Payment</option>
            <option value="whish">Whish Money</option>
            <option value="western">Western Union</option>
            <option value="office">Visit Our Office</option>
          </select>
          {form.paymentMethod === "office" && <p className="payment-note">📍 Visit us at: Bekaa, Masnaa-Rashaya Road</p>}
          {form.paymentMethod === "whish" && <p className="payment-note">💸 Send Whish Money to: 76-410829</p>}
          {form.paymentMethod === "western" && <p className="payment-note">🟡 Via Western Union to: Let's GO</p>}
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
