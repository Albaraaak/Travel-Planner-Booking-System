import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

function ContinentDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No data</p>;

  const { continent, image, description, countries } = state;

  const handleCountryClick = (country) => {
    navigate("/CountryDetail", { state: { country } });
  };

  return (
    <>
      <div className="continent-details">
        <img src={image} alt={continent} style={{ width: "50%" ,height:"40%"}} />
        <h1>{continent}</h1>
        <p>{description}</p>
        <h2>Popular Destinations</h2>
        {countries.map((c, i) => (
          <button key={i} onClick={() => handleCountryClick(c)}>
            {c.name}
          </button>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default ContinentDetail;