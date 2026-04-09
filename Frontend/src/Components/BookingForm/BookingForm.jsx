
import { useLocation, useNavigate } from "react-router-dom"; 
import "./BookingForm.css"

function BookingForm(){
  const nav = useNavigate();
  const location = useLocation();
  const { title, image, country } = location.state || {};

  if (!title) {
    return <p>No booking data </p>;
  }

  return (
    <div className="booking-container">
      <button className="btn" onClick={() => nav(-1)}>
        ⬅ Back
      </button>

      <div className="booking-card">
        <img src={image} alt={title} />
        <div className="booking-form">
          <input type="date" />
          <input type="number" placeholder="Guests" min="1" />

          <button
            className="btn primary"
            onClick={() => nav("/checkout", { state: { country } })}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;