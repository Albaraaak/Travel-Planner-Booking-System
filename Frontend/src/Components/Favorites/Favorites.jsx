import { useEffect, useState } from "react";
import { getFavorites, removeFromFavorites } from "../UtilsFavorites";
import  './Favorites.css' ;
function Favorites() {
    const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());} , []);

  const handleRemove = (id) => {
    removeFromFavorites(id);
    setFavorites(getFavorites()); 
  };

  return (
  <div className="product-list-section">

    <div className="product-list-header">
      <h2 className="product-list-title">My Favorites</h2>
      <h3 className="product-list-subtitle">Your saved items</h3>
    </div>

    {favorites.length === 0 ? (
      <div className="empty-state">
        <p className="empty-state-text">No favorites yet</p>
      </div>
    ) : (
      <div className="products-grid">
        {favorites.map(item => (
          <div className="product-card" key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} width="200" />
            <p>${item.price}</p>
            <button onClick={() => handleRemove(item.id)}>
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