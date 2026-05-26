import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowRight, FaPlane } from "react-icons/fa";

function ContinentDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [showAvailable, setShowAvailable] = useState(false);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/tickets")
      .then((res) => {
        setTickets(res.data.data || []);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!state) return <p>No data</p>;

  const { continent, image, description, countries } = state;

  // ================= FILTER =================
  const countriesToShow = countries.filter((country) => {
    if (!showAvailable) return true;

    return tickets?.some(
      (ticket) =>
        ticket.to?.toLowerCase().trim() ===
          country.name.toLowerCase().trim() &&
        ticket.availableSeats > 0
    );
  });

  // ================= NAVIGATION =================
  const handleCountryClick = (country) => {
    navigate("/CountryDetail", {
      state: { country },
    });
  };
console.log("Countries received:", countries);
  return (
    <>
      <Header />

      <div className="continent-details">
        {/* HERO IMAGE */}
        <img src={image} alt={continent} className="continent-image" />

        {/* TITLE */}
        <h1 className="continent-title">{continent}</h1>

        {/* DESCRIPTION */}
        <p className="continent-description">{description}</p>

        {/* FILTER BUTTON */}
        <button
          className="filter-btn"
          onClick={() => setShowAvailable((prev) => !prev)}
        >
          ✨{" "}
          {showAvailable
            ? "Show All Countries"
            : "Show Countries With Tickets Only"}
        </button>

        {/* SECTION TITLE */}
        <h2 className="section-title">Popular Destinations</h2>

        <div className="title-line">
          <span></span>
          <FaPlane className="plane-icon" />
          <span></span>
        </div>

        {/* COUNTRIES GRID */}
        <div className="countries-grid">
          {countriesToShow.map((c, i) => (
            <div
              key={i}
              className="country-card"
              onClick={() => handleCountryClick(c)}
            >
              <div className="country-left">
                <div
  style={{
    fontSize: "32px",
    lineHeight: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "40px",
  }}
>
  <img src={c.flag} alt={c.name} className="country-flag" />
</div>
                <h3>{c.name}</h3>
              </div>

              <div className="arrow-circle">
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* ================= CSS ================= */}
      <style>{`
        .continent-details {
          min-height: 100vh;
          padding: 40px 24px;
          text-align: center;
          background:
            radial-gradient(circle at top, rgba(59,130,246,0.15), transparent 40%),
            linear-gradient(to right, #081028, #111c3b, #081028);
          color: white;
          font-family: 'Poppins', sans-serif;
        }

        .continent-image {
          width: 100%;
          max-width: 1050px;
          height: 260px;
          object-fit: cover;
          border-radius: 0 0 35px 35px;
          margin-bottom: 30px;
        }

        .continent-title {
          font-size: 5rem;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .continent-description {
          max-width: 1000px;
          margin: auto;
          color: #d6d6d6;
          line-height: 1.8;
          font-size: 1.2rem;
        }

        .filter-btn {
          margin-top: 30px;
          padding: 14px 28px;
          border: none;
          border-radius: 16px;
          background: linear-gradient(90deg, #7c3aed, #06b6d4);
          color: white;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        .filter-btn:hover {
          transform: translateY(-3px) scale(1.03);
        }

        .section-title {
          margin-top: 45px;
          font-size: 3.2rem;
          font-weight: 800;
        }

        .title-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 40px;
        }

        .title-line span {
          width: 120px;
          height: 3px;
          background: linear-gradient(to right, #7c3aed, #06b6d4);
          border-radius: 20px;
        }

        .plane-icon {
          color: #7c3aed;
          font-size: 1.5rem;
        }.countries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
  max-width: 1100px;
  margin: 40px auto;
}

.country-card {
  height: 95px;
  background: rgba(255,255,255,0.05);
  border: 1.5px solid rgba(99,102,241,0.6);
  border-radius: 22px;
  padding: 0 22px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  transition: all 0.3s ease;

  backdrop-filter: blur(10px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}

.country-card:hover {
  transform: translateY(-5px);
  border-color: #00d4ff;
  box-shadow: 0 12px 24px rgba(0,212,255,0.18);
}

.country-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.country-left h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
}

.country-emoji {
  font-size: 1.7rem;
}

.arrow-circle {
  width: 38px;
  height: 38px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, #7c3aed, #38bdf8);
  color: white;
  font-size: 0.9rem;

  transition: 0.3s ease;
}
.country-card:hover .arrow-circle {
  transform: rotate(-45deg) scale(1.08);
}
        @media (max-width: 768px) {
          .continent-title {
            font-size: 3rem;
          }

          .section-title {
            font-size: 2.2rem;
          }

          .continent-description {
            font-size: 1rem;
          }.country-flag {
  width: 36px;
  height: 26px;
  object-fit: cover;
  border-radius: 5px;
}

          .countries-grid {
            grid-template-columns: 1fr;
            
          }
        }
      `}</style>
    </>
  );
}

export default ContinentDetail;

