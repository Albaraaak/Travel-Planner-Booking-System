import {  useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function ProfileInfo() {
  const navigate = useNavigate();
  const user = {
    name: "Anonymous",
    email: "abcd000@example.com",
    phone: "+961 70 123 456",
    location: "Beirut, Lebanon",
    bookings: []
  };
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("bookings")) || [];
  setBookings(saved);
}, []);

  return (
    <div className="profile-container">
      <h1>{user.name}'s Profile</h1>
      <p>📧 {user.email}</p>
      <p>📞 {user.phone}</p>
      <p>📍 {user.location}</p>
     <div className="bookings-section">
  <h2>My Bookings</h2>

  {bookings.length === 0 ? (
    <p>No bookings yet.</p>
  ) : (
    <ul>
      {bookings.map((booking) => (
        <li key={booking.id}>
          ✈️ {booking.destination} | 📅 {booking.date} | 💰 ${booking.price} | 🧾 {booking.type}
        </li>
      ))}
    </ul>
  )}
</div>


      
          {/* Actions */}
      <div className="profile-actions">
        <button onClick={() => navigate("/editprofile")}>Edit Profile</button>
        <button onClick={() => navigate("/changepassword")}>Change Password</button>
        <button onClick={() => navigate("/favorites")}>My Favorites</button>
      </div>


      {/* Logout */}
      <button className="logout-btn" onClick={() => {
      alert("Logged out successfully ✅");
      navigate("/"); 
      }} >
      Logout </button>
    </div>
  );
}

export default ProfileInfo;