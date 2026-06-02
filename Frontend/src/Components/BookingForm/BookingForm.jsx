import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingForm.css";
import axios from "axios";

function BookingForm() {
  const nav = useNavigate();
  const location = useLocation();

  const { title, image, country, id } = location.state || {};

  const [guests, setGuests] = useState(1);

  if (!title) {
    return <p>No booking data</p>;
  }

  const handleConfirm = async () => {
    try {
      if (!guests || guests < 1) {
        alert("Please enter number of guests!");
        return;
      }

      if (!id) {
        alert("Missing product. Please go back and try again.");
        return;
      }

      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first.");
        nav("/login");
        return;
      }

      const response = await axios.post(
        `http://localhost:3000/api/bookings/order/${id}`,
        { nbOfPeople: guests },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      alert("Booking successful!");

      nav("/checkout", {
        state: {
          booking: response.data.data,
          title,
          image,
          country,
          guests,
        },
      });
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("RESPONSE:", error.response);
      alert(error.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div className="booking-container">
      <button className="btn" onClick={() => nav(-1)}>
        ⬅ Back
      </button>

      <div className="booking-card">
        <img src={image} alt={title} />

        <div className="booking-form">
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