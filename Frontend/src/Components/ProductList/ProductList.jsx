import { useState } from "react";
import {useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Products from "../Products/Products.jsx";
import { addToFavorites, removeFromFavorites, getFavorites } from "../UtilsFavorites.js";
import "./ProductList.css";

function ProductList() {
   const navigate = useNavigate();
  
  const [products, setProducts] = useState([
   {
      id: 1,                    
      title: "Turquoise Beach Resort Paradise",
      destination: "Maldives",
      duration: "7 Days / 6 Nights",
      price: 2499,
      rating: 4.9,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1765978372751-aa89dc6d30e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0JTIwdmFjYXRpb258ZW58MXx8fHwxNzcyMDc2MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true,
      available: false,
      discount: 15
    },
    {
      id: 2,
      title: "Mountain Adventure Expedition",
      destination: "Swiss Alps",
      duration: "10 Days / 9 Nights",
      price: 999,
      rating: 4.8,
      reviews: 139,
      image: "https://images.unsplash.com/photo-1595368062405-e4d7840cba14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMGhpa2luZ3xlbnwxfHx8fDE3NzIwNzA1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true,
      available: false
    },
    {
      id: 3,
      title: "Luxury Bliss Cruise",
      destination: "Mediterranean Sea",
      duration: "14 Days / 13 Nights",
      price: 1499,
      rating: 4.9,
      reviews: 102,
      image: "https://images.unsplash.com/photo-1764609816523-2e6a3b523a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcnVpc2UlMjBzaGlwfGVufDF8fHx8MTc3MjExNDY2MXww&ixlib=rb-4.1.0&q=80&w=1080",
      discount: 20,
      available: true,
    },
    {
      id: 4,
      title: "Romance in the Canals",
      destination: "Venice, Italy",
      duration: "5 Days / 4 Nights",
      price: 799,
      rating: 4.7,
      reviews: 458,
      image: "https://images.unsplash.com/photo-1660149857286-eeeb853c29c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFseSUyMHZlbmljZSUyMGdvbmRvbGF8ZW58MXx8fHwxNzcyMTE0NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      available: true,
    },
    {
      id: 5,
      title: "Lights Discovery Journey",
      destination: "Tokyo, Japan",
      duration: "8 Days / 7 Nights",
      price: 1299,
      rating: 4.9,
      reviews: 521,
      image: "https://images.unsplash.com/photo-1598957232485-fab51e0ed7e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMGNoZXJyeSUyMGJsb3Nzb21zJTIwdG9reW98ZW58MXx8fHwxNzcyMTE0NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true,
      discount: 10,
      available: false,
    },
    {
      id: 6,
      title: "City of Love",
      destination: "Paris, France",
      duration: "6 Days / 5 Nights",
      price: 1999,
      rating: 4.8,
      reviews: 635,
      image: "https://images.unsplash.com/photo-1541889194531-a43350ba1fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGZyYW5jZSUyMGNpdHklMjBsaWdodHN8ZW58MXx8fHwxNzcyMTE0NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      available: true,
    },
    {
      id: 7,
      title:  " Luxury & Wonders ",
      destination: "Dubai, UAE",
      duration: "8 Days / 7 Nights",
      price: 2099,
      rating: 4.8,
      reviews: 587,
      image: "https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true,
      discount: 5,
      available: true,
    },
    {
      id: 8,
      title: " Every Corner Tells a Story ",
      destination: "Beirut, Lebanon",
      duration: "10 Days / 9 Nights",
      price: 649,
      rating: 4.7,
      reviews: 1037,
      image: "https://images.unsplash.com/photo-1521327895744-46e309d005b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true,
      discount: 15,
      available: true,
    }
  ]);

  const [showAvailable, setShowAvailable] = useState(false);
  const [favorites, setFavorites] = useState(getFavorites());
  const filteredProducts = showAvailable? products.filter(p => p.available === true) : products;
  const handleFavorite = (product) => {const isFav = favorites.find(item => item.id === product.id);
  
    if (isFav) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
    setFavorites(getFavorites());
  };

  return (
    <div className="product-list-section">
      <div className="product-list-header">
        <h2>Chase Your Dreams With Us!</h2>
        <h3>Book, Travel, Discover, Enjoy</h3>
      </div>

      <button onClick={() => setShowAvailable(prev => !prev)}>
        {showAvailable ? "Show All" : "Show Available"}
      </button>

      <div className="products-grid">
  {filteredProducts.map((product) => {
    const isFav = favorites.find((f) => f.id === product.id);
  return (
      
      <div
        key={product.id}
        onClick={() =>
          navigate("/ProductDetails", { state: product })
        }
      >
        <Products {...product} />

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleFavorite(product);
          }}
        >
          {isFav ? "❤️ Remove Favorite" : "🤍 Add to Favorites"}
        </button>
      </div>
    );
  })}
</div>
    </div>
  );
}

export default ProductList;