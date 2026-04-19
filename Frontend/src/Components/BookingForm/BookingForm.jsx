import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingForm.css";

function BookingForm() {
  const nav = useNavigate();
  const location = useLocation();
  const { title, image, country } = location.state || {};

  const [guests, setGuests] = useState(1);

  if (!title) {
    return <p>No booking data</p>;
  }

  const handleConfirm = () => {
    if (!guests || guests < 1) {
      alert("Please enter number of guests!");
      return;
    }

    nav("/checkout", {
      state: {
        country,
        guests
      }
    });
  };

  return (
    <div className="booking-container">
      <button className="btn" onClick={() => nav(-1)}>
        ⬅ Back
      </button>

      <div className="booking-card">
        <img src={image} alt={title} />

        <div className="booking-form">

          {/* INPUT CONTROLLED */}
          <input
            type="number"
            placeholder="Guests"
            min="1"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
          />

          <button className="btn primary" onClick={handleConfirm}>
            Confirm Booking
          </button>

        </div>
      </div>
    </div>
  );
}

export default BookingForm;