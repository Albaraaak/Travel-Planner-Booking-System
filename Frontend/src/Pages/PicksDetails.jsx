import { useLocation } from "react-router-dom";
function PicksDetails() {
  const location = useLocation();
  const product = location.state; 

  if (!product) {
    return <p>No details found.</p>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <div>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} className="card-image" />
        <p>⭐ {product.rating}</p>
        <p>{product.reviews}</p>
        <p>📍 {product.location}</p>
        <p>{product.description}</p>
        </div>
      </div>
  );
}

export default PicksDetails;
 