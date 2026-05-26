import { useNavigate } from "react-router-dom";
import "./Products.css";

function Products(props) {
  const navigate = useNavigate();

  const handleBooking = () => {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (!isLoggedIn) {
      alert("Please login first to continue booking.");
      navigate("/login");
      return;
    }

    navigate("/checkout", {
      state: {
        ...props,
        type: props.type || "Package",
      },
    });
  };

  const price = Number(props.price || 0).toLocaleString();

  return (
    <div className="product-card">
      {props.featured && <div className="featured-badge">Featured</div>}
      {props.discount && <div className="discount-badge">{props.discount}% OFF</div>}

      <div className="product-image-container">
        <img src={props.image} alt={props.title} className="product-image" />
      </div>

      <div className="product-details">
        <div className="product-header">
          <span className="product-destination">📍 {props.destination}</span>

          <div className="product-rating">
            <span className="rating-star">⭐</span>
            <span className="rating-value"> {props.rating}</span>
            <span className="rating-reviews"> ({props.reviews})</span>
          </div>
        </div>

        <h3 className="product-title">{props.title}</h3>

        <div className="product-info">
          <div className="info-item">🕐 {props.duration || "Flexible"}</div>
          <div className="info-item">👥 Group Tour</div>
        </div>

        <div className="product-footer">
          <div className="product-price-section">
            <div className="price-wrapper">
              <span className="price-currency">$</span>
              <span className="price-amount">{price}</span>
            </div>
            <span className="price-per">per person</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleBooking();
            }}
            className="book-btn"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;