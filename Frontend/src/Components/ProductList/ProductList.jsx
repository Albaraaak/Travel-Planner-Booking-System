import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Products from "../Products/Products.jsx";
import {
  addToFavorites,
  removeFromFavorites,
  getFavorites,
} from "../UtilsFavorites.js";
import "./ProductList.css";

function ProductList() {
  const navigate = useNavigate();

  const [apiProducts, setApiProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAvailable, setShowAvailable] = useState(false);
  const [favorites, setFavorites] = useState(getFavorites());

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get("http://localhost:3000/api/products", { signal: controller.signal })
      .then((res) => {
        setApiProducts(res.data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        console.error("Fetch error:", err);
        setError("Failed to load products. Please check if the server is running.");
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const normalizedProducts = apiProducts.map((p) => ({
    id: p._id,
    title: p.title?.trim() || "Untitled Adventure",
    destination: p.destination || "TBD",
    duration: p.duration,
    price: p.price,
    date: p.date,
    rating: p.rating || 0,
    reviews: p.reviews || 0,
    image: p.image || "https://via.placeholder.com/300",
    available: p.available,
    discount: p.discount,
  }));

  const filteredProducts = showAvailable
    ? normalizedProducts.filter((p) => p.available)
    : normalizedProducts;

  const handleFavorite = (product) => {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (!isLoggedIn) {
      alert("Please login first to use favorites.");
      navigate("/login");
      return;
    }

    const isFav = favorites.some((item) => item.id === product.id);

    if (isFav) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }

    setFavorites(getFavorites());
  };

  if (loading) return <div className="loader">Exploring the world for you...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="product-list-section">
      <div className="product-list-header">
        <h2>Chase Your Dreams With Us!</h2>

        <button
          className={`filter-btn ${showAvailable ? "active" : ""}`}
          onClick={() => setShowAvailable((prev) => !prev)}
        >
          {showAvailable ? "✨ Showing Available" : "All Adventures"}
        </button>
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const isFav = favorites.some((f) => f.id === product.id);

            return (
              <div
                className="product-card-wrapper"
                key={product.id}
                onClick={() => navigate("/ProductDetails", { state: product })}
              >
                <Products id={product.id} {...product} />

                <button
                  className={`fav-button ${isFav ? "is-fav" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFavorite(product);
                  }}
                >
                  {isFav ? "❤️" : "🤍"}
                </button>
              </div>
            );
          })
        ) : (
          <p>No products found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;