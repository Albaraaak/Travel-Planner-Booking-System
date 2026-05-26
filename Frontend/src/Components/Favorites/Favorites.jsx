import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFavorites, removeFromFavorites } from "../UtilsFavorites";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (!isLoggedIn) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    setFavorites(getFavorites());
  }, [navigate]);

  const handleRemove = (id) => {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (!isLoggedIn) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    removeFromFavorites(id);
    setFavorites(getFavorites());
  };

  return (
    <div className="product-list-section">
      <div className="product-list-header">
        <h2 className="product-list-title">My Favorites ❤️</h2>

        <h3 className="product-list-subtitle">
          Your saved dream destinations
        </h3>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <p className="empty-state-text">No favorites yet</p>
        </div>
      ) : (
        <div className="products-grid">
          {favorites.map((item) => (
            <div
              className="product-card"
              key={item.id}
              onClick={() =>
                navigate("/ProductDetails", {
                  state: item,
                })
              }
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.image}
                alt={item.title}
                width="100%"
                style={{
                  borderRadius: "12px",
                  marginBottom: "10px",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <h3>{item.title}</h3>

              <p>
                <b>Destination:</b> {item.destination}
              </p>

              <p>
                <b>Price:</b> ${item.price}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;