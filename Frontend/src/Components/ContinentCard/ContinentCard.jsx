import './ContinentCard.css';
import { useNavigate } from 'react-router-dom';
function ContinentCard({ continent, countries, image, description  }) {
  const navigate = useNavigate()
  const handleClick =() => {
    navigate ('/ContinentDetail' , {state:{continent,countries, image,
        description,}})
  }
  const handleCountry =(country) => {
    navigate ('/CountryDetail' , {state:{country}})
  }
  return (
  <div onClick={handleClick} style={{ cursor: "pointer" }}>

    <img src={image} alt={continent} />
    <h2>{continent}</h2>

    <div className="continent-content">
      <p className="continent-description">{description}</p>

      <div className="countries-section">
        <h3 className="countries-title">Popular Destinations</h3>

        <div className="countries-grid">
          {countries.map((country, index) => (
            <div key={index} className="country-item">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCountry(country);
                }}
                className="country-name"
              >
                {country.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      <button className="explore-button">
        Explore {continent}
        <span className="arrow">→</span>
      </button>
    </div>

  </div>
);

}
export default ContinentCard;