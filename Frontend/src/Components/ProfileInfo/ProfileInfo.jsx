import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import QRCode from "qrcode";
import "./ProfileInfo.css";

function ProfileInfo() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "Anonymous",
    username: "Anonymous",
    email: "abcd000@example.com",
    phone: "",
    phoneNumber: "",
    location: "",
  });

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {
      setUser(savedUser);
    }

    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully ✅");
    navigate("/");
  };

  const exportBookingPDF = async (booking) => {
    const doc = new jsPDF();

    const bookingId = booking._id || Date.now();
    const userName = user.name || user.username || "Anonymous";
    const tripName = booking.product?.title || booking.title || "Trip";
    const guests = booking.nbOfPeople || booking.guests || 1;
    const price = booking.totalPrice || booking.price || "N/A";
    const status = booking.status || "Confirmed";

   const qrData = `
BOOKING ID: ${bookingId}
TRIP: ${tripName}
GUESTS: ${guests}
TOTAL: $${price}
STATUS: ${status}
VALID LET'S GO BOOKING
`;

    const qrCodeImage = await QRCode.toDataURL(qrData);

    doc.setFillColor(245, 247, 255);
    doc.rect(0, 0, 210, 297, "F");

    doc.setFillColor(70, 90, 200);
    doc.rect(0, 0, 210, 45, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("LET'S GO", 20, 18);

    doc.setFontSize(13);
    doc.setFont("helvetica", "normal");
    doc.text("Travel Booking Receipt", 20, 30);

    doc.setFontSize(11);
    doc.text(`Receipt ID: #${bookingId}`, 145, 18);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 145, 30);

    doc.setFillColor(255, 255, 255);
    doc.roundedRect(15, 60, 180, 165, 5, 5, "F");

    doc.setTextColor(70, 90, 200);
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Booking Confirmation", 25, 78);

    doc.setFillColor(40, 180, 100);
    doc.roundedRect(145, 68, 35, 12, 3, 3, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text(status, 153, 76);

    doc.setTextColor(30, 30, 30);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Customer Information", 25, 100);

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${userName}`, 25, 115);
    doc.text(`Email: ${user.email || "No email"}`, 25, 127);
    doc.text(
      `Phone: ${user.phoneNumber || user.phone || "No phone added"}`,
      25,
      139
    );
    doc.text(`Location: ${user.location || "No location added"}`, 25, 151);

    doc.setDrawColor(220, 220, 220);
    doc.line(25, 163, 180, 163);

    doc.setTextColor(70, 90, 200);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Trip Details", 25, 180);

    doc.setTextColor(30, 30, 30);
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text(`Trip: ${tripName}`, 25, 195);
    doc.text(`Guests: ${guests}`, 25, 207);
    doc.text(`Payment Status: ${status}`, 25, 219);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(70, 90, 200);
    doc.text(`Total: $${price}`, 130, 207);

    doc.setFillColor(255, 255, 255);
    doc.roundedRect(132, 118, 45, 45, 4, 4, "F");
    doc.addImage(qrCodeImage, "PNG", 136, 122, 37, 37);

    doc.setTextColor(70, 90, 200);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text("Scan to verify", 140, 166);

    doc.setFillColor(70, 90, 200);
    doc.roundedRect(15, 240, 180, 28, 4, 4, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Thank you for booking with LET'S GO!", 25, 252);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Please keep this receipt as proof of your booking.", 25, 262);

    doc.save(`booking-${bookingId}.pdf`);
  };

  return (
    <div className="profile-container">
      <h1>{user.name || user.username || "Anonymous"}'s Profile</h1>

      <p>📧 {user.email || "No email"}</p>
      <p>📞 {user.phoneNumber || user.phone || "No phone added"}</p>
      <p>📍 {user.location || "No location added"}</p>

      <div className="bookings-section">
        <h2>My Bookings</h2>

        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <ul>
            {bookings.map((booking, index) => (
              <li key={booking._id || index}>
                ✈️ {booking.product?.title || booking.title || "Trip"} | 👤{" "}
                {booking.nbOfPeople || booking.guests || "N/A"} guests | 💰 $
                {booking.totalPrice || "N/A"} | 🧾 {booking.status || "Pending"}

                <br />

                <button onClick={() => exportBookingPDF(booking)}>
                  Export PDF
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="profile-actions">
        <button onClick={() => navigate("/editprofile")}>Edit Profile</button>

        <button onClick={() => navigate("/changepassword")}>
          Change Password
        </button>

        <button onClick={() => navigate("/favorites")}>My Favorites</button>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default ProfileInfo;