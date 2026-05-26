import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function PicksDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  return (
    <>
      <Header />
      {!product ? (
        <div className="page-container"><h1>No details found.</h1></div>
      ) : (
        <div className="product-details-page">
          <button onClick={() => navigate(-1)}>⬅ Back</button>
          <div className="details-hero" style={{ marginTop: 20 }}>
            <img src={product.image} alt={product.name} />
            <div className="details-content">
              <span className="details-pill">Best Pick</span>
              <h1>{product.name}</h1>
              <p>⭐ {product.rating} • {product.reviews} reviews</p>
              <p>📍 {product.location}</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default PicksDetails;
