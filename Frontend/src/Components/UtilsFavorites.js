export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};

export const addToFavorites = (item) => {
  const favorites = getFavorites();
  localStorage.setItem("favorites", JSON.stringify([...favorites, item]));
};

export const removeFromFavorites = (id) => {
  const favorites = getFavorites().filter(item => item.id !== id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}; 