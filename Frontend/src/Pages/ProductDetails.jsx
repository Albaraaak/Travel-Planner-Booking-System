import { useLocation } from "react-router-dom";


function ProductDetails() {
  const location = useLocation();
  const product = location.state;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="400" />
      <p><b>Destination:</b>{product.destination}</p>
      <p><b>Duration:</b>{product.duration}</p>
      <p><b>Rating:</b>{product.rating}</p>
      <p><b>Reviews:</b>{product.reviews}</p>
      <p><b>Price$:</b>{product.price}</p>
      <p><b><i>Hotel and Ticket are included in this package</i></b></p>
      <p><b>Don't worry our special customer 😊❤️</b></p>
     
    </div>
  );
}

export default ProductDetails;