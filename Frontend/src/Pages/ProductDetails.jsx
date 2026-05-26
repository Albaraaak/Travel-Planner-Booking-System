import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const [guests, setGuests] = useState(1);

  const handleBookPackage = () => {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (!isLoggedIn) {
      alert("Please login first to continue booking.");
      navigate("/login");
      return;
    }

    navigate("/checkout", {
      state: {
        ...product,
        guests,
        totalPrice: product.price * guests,
      },
    });
  };

  return (
    <>
      <Header />

      {!product ? (
        <div className="product-details-page">
          <h1>No package selected</h1>
          <p>Please go back to packages and choose an adventure.</p>
          <button onClick={() => navigate("/packages")}>Browse Packages</button>
        </div>
      ) : (
        <div className="product-details-page">
          <div className="details-hero">
            <img src={product.image} alt={product.title} />

            <div className="details-content">
              <span className="details-pill">Premium Package</span>

              <h1>{product.title}</h1>

              <p className="details-lead">
                Hotel, ticket, comfort, and support are included for a smooth
                travel experience.
              </p>

              <div className="details-grid">
                <div>
                  <b>📍 Destination</b>
                  <span>{product.destination}</span>
                </div>
                <div>
                  <b>🕐 Duration</b>
                  <span>{product.duration || "Flexible"}</span>
                </div>
                <div>
                  <b>📅 Start Date</b>
                  <span>{product.date || "Available soon"}</span>
                </div>
                <div>
                  <b>⭐ Rating</b>
                  <span>{product.rating} / 5</span>
                </div>
                <div>
                  <b>💬 Reviews</b>
                  <span>{product.reviews}</span>
                </div>
                <div>
                  <b>💰 Price</b>
                  <span>${product.price}</span>
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label>
                  <b>👤 Number of Guests</b>
                </label>

                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                />

                <p>
                  Total Price: <b>${product.price * guests}</b>
                </p>
              </div>

              <button onClick={handleBookPackage}>Book This Package</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default ProductDetails;