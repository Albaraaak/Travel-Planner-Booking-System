import ContinentCard from "../Components/ContinentCard/ContinentCard";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Destinations() {
  const location = useLocation();
  const state = location.state;
  const [search, setSearch] = useState("");

  const continents = [
    {
      continent: "Europe",
      image:
        "https://images.unsplash.com/photo-1761472871829-9c4a2411dc35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGUlMjBsYW5kbWFya3MlMjBlaWZmZWwlMjB0b3dlcnxlbnwxfHx8fDE3NzIxMTQ2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Europe is a continent full of timeless charm and living art. From historic cities like Paris, Rome, and Berlin to breathtaking landscapes like the Alps, Europe offers endless exploration. Its rich culture, museums, and cuisine make it a top destination for travelers. Every country has its own unique traditions and stories waiting to be discovered.",

      countries: [
        {
          name: "France",
          flag: "https://flagcdn.com/w40/fr.png",
          continent: "Europe",
          description:
            "Paris, the Eiffel Tower, French cuisine and vineyards.",
        },
        {
          name: "Italy",
          flag: "https://flagcdn.com/w40/it.png",
          continent: "Europe",
          description:
            "Rome, Venice, art, architecture and delicious pasta.",
        },
        {
          name: "Spain",
          flag: "https://flagcdn.com/w40/es.png",
          continent: "Europe",
          description:
            "Flamenco culture, beaches, tapas, and historic cities.",
        },
        {
          name: "Portugal",
          flag: "https://flagcdn.com/w40/pt.png",
          continent: "Europe",
          description:
            "Lisbon, Porto, beautiful coastlines, and port wine.",
        },
        {
          name: "Germany",
          flag: "https://flagcdn.com/w40/de.png",
          continent: "Europe",
          description: "",
        },
        {
          name: "Russia",
          flag: "https://flagcdn.com/w40/ru.png",
          continent: "Europe",
          description: "",
        },
        {
          name: "United Kingdom",
          flag: "https://flagcdn.com/w40/gb.png",
          continent: "Europe",
          description: "",
        },
        {
          name: "Greece",
          flag: "https://flagcdn.com/w40/gr.png",
          continent: "Europe",
          description: "",
        },
        {
          name: "Turkey",
          flag: "https://flagcdn.com/w40/tr.png",
          continent: "Europe",
          description: "",
        },
      ],
    },

    {
      continent: "Asia",
      image:
        "https://images.unsplash.com/photo-1768746382323-621bccddf7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhJTIwdGVtcGxlcyUyMHBhZ29kYXxlbnwxfHx8fDE3NzIxMTQ2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Asia is a vast continent blending ancient traditions with modern innovation. From the bustling streets of Tokyo and Dubai to serene temples and Himalayan peaks, the diversity is astonishing. The food, festivals, and cultural heritage are world-renowned. Adventure, history, and modern life exist side by side across its countries.",

      countries: [
        {
          name: "Lebanon",
          flag: "https://flagcdn.com/w40/lb.png",
          continent: "Asia",
          description:
            "Beirut, mountains, Mediterranean coast, and rich history.",
        },
        {
          name: "Saudi Arabia",
          flag: "https://flagcdn.com/w40/sa.png",
          continent: "Asia",
          description:
            "Historic sites, deserts, and Islamic heritage.",
        },
        {
          name: "United Arab Emirates",
          flag: "https://flagcdn.com/w40/ae.png",
          continent: "Asia",
          description:
            "Dubai, Abu Dhabi, luxury architecture and desert adventures.",
        },
        {
          name: "Qatar",
          flag: "https://flagcdn.com/w40/qa.png",
          continent: "Asia",
          description:
            "Doha skyline, modern culture, and desert landscapes.",
        },
        {
          name: "Japan",
          flag: "https://flagcdn.com/w40/jp.png",
          continent: "Asia",
          description: "",
        },
        {
          name: "Thailand",
          flag: "https://flagcdn.com/w40/th.png",
          continent: "Asia",
          description: "",
        },
        {
          name: "China",
          flag: "https://flagcdn.com/w40/cn.png",
          continent: "Asia",
          description: "",
        },
        {
          name: "India",
          flag: "https://flagcdn.com/w40/in.png",
          continent: "Asia",
          description: "",
        },
        {
          name: "Iran",
          flag: "https://flagcdn.com/w40/ir.png",
          continent: "Asia",
          description: "",
        },
      ],
    },

    {
      continent: "Africa",
      image:
        "https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBzYWZhcmklMjB3aWxkbGlmZXxlbnwxfHx8fDE3NzIwNzI0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Africa is a land of raw beauty and endless soul. Its vast savannas, deserts, rainforests, and mountains host incredible wildlife and scenery. Ancient cultures, historic cities, and vibrant music and art are everywhere. From safaris to coastal beaches, Africa offers unique experiences for every traveler.",

      countries: [
        {
          name: "South Africa",
          flag: "https://flagcdn.com/w40/za.png",
          continent: "Africa",
          description:
            "Cape Town, wildlife safaris, and scenic coastlines.",
        },
        {
          name: "Kenya",
          flag: "https://flagcdn.com/w40/ke.png",
          continent: "Africa",
          description:
            "Savannah safaris, Nairobi, and the Great Rift Valley.",
        },
        {
          name: "Morocco",
          flag: "https://flagcdn.com/w40/ma.png",
          continent: "Africa",
          description:
            "Markets, deserts, and rich culture.",
        },
        {
          name: "Egypt",
          flag: "https://flagcdn.com/w40/eg.png",
          continent: "Africa",
          description:
            "Pyramids, Nile River, ancient history, and culture.",
        },
        {
          name: "Gabon",
          flag: "https://flagcdn.com/w40/ga.png",
          continent: "Africa",
          description: "",
        },
        {
          name: "Algeria",
          flag: "https://flagcdn.com/w40/dz.png",
          continent: "Africa",
          description: "",
        },
        {
          name: "Senegal",
          flag: "https://flagcdn.com/w40/sn.png",
          continent: "Africa",
          description: "",
        },
        {
          name: "Tunisia",
          flag: "https://flagcdn.com/w40/tn.png",
          continent: "Africa",
          description: "",
        },
        {
          name: "Sri Lanka",
          flag: "https://flagcdn.com/w40/lk.png",
          continent: "Africa",
          description: "",
        },
      ],
    },
     {
    continent: "North America",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1080&q=80",
    description:
      "North America is full of modern cities, natural wonders, beaches, forests, mountains, and cultural diversity. From New York and Toronto to Mexico’s beaches and Costa Rica’s rainforests, it offers amazing travel experiences for every visitor.",

    countries: [
      {
        name: "USA",
        flag: "https://flagcdn.com/w40/us.png",
        continent: "North America",
        description: "New York, national parks, beaches, and cities full of life.",
      },
      {
        name: "Canada",
        flag: "https://flagcdn.com/w40/ca.png",
        continent: "North America",
        description: "Toronto, Vancouver, Rocky Mountains, and lakes.",
      },
      {
        name: "Mexico",
        flag: "https://flagcdn.com/w40/mx.png",
        continent: "North America",
        description: "Beaches, ancient ruins, and vibrant culture.",
      },
      {
        name: "Costa Rica",
        flag: "https://flagcdn.com/w40/cr.png",
        continent: "North America",
        description: "Rainforests, volcanoes, and wildlife adventures.",
      },
      {
        name: "Cuba",
        flag: "https://flagcdn.com/w40/cu.png",
        continent: "North America",
        description: "",
      },
      {
        name: "Panama",
        flag: "https://flagcdn.com/w40/pa.png",
        continent: "North America",
        description: "",
      },
      {
        name: "Haiti",
        flag: "https://flagcdn.com/w40/ht.png",
        continent: "North America",
        description: "",
      },
      {
        name: "Bahamas",
        flag: "https://flagcdn.com/w40/bs.png",
        continent: "North America",
        description: "",
      },
      {
        name: "Greenland",
        flag: "https://flagcdn.com/w40/gl.png",
        continent: "North America",
        description: "",
      },
    ],
  },

  {
    continent: "South America",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1080&q=80",
    description:
      "South America is rich in natural beauty, colorful cities, ancient history, and powerful culture. From Brazil’s beaches and Amazon rainforest to Peru’s Machu Picchu and Argentina’s Patagonia, it is a continent full of adventure.",

    countries: [
      {
        name: "Brazil",
        flag: "https://flagcdn.com/w40/br.png",
        continent: "South America",
        description: "Rio de Janeiro, Amazon rainforest, samba culture.",
      },
      {
        name: "Colombia",
        flag: "https://flagcdn.com/w40/co.png",
        continent: "South America",
        description: "Cartagena, coffee regions, mountains and festivals.",
      },
      {
        name: "Peru",
        flag: "https://flagcdn.com/w40/pe.png",
        continent: "South America",
        description: "Machu Picchu, Inca culture, and Andes mountains.",
      },
      {
        name: "Argentina",
        flag: "https://flagcdn.com/w40/ar.png",
        continent: "South America",
        description: "Buenos Aires, tango, glaciers, and Patagonian landscapes.",
      },
      {
        name: "Chile",
        flag: "https://flagcdn.com/w40/cl.png",
        continent: "South America",
        description: "",
      },
      {
        name: "Uruguay",
        flag: "https://flagcdn.com/w40/uy.png",
        continent: "South America",
        description: "",
      },
      {
        name: "Bolivia",
        flag: "https://flagcdn.com/w40/bo.png",
        continent: "South America",
        description: "",
      },
      {
        name: "Venezuela",
        flag: "https://flagcdn.com/w40/ve.png",
        continent: "South America",
        description: "",
      },
      {
        name: "Paraguay",
        flag: "https://flagcdn.com/w40/py.png",
        continent: "South America",
        description: "",
      },
    ],
  },

  {
    continent: "Australia",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1080&q=80",
    description:
      "Australia and Oceania are famous for islands, beaches, coral reefs, mountains, and peaceful nature. From Australia’s cities and the Great Barrier Reef to New Zealand’s landscapes and Fiji’s islands, the region is perfect for relaxation and adventure.",

    countries: [
      {
        name: "Australia",
        flag: "https://flagcdn.com/w40/au.png",
        continent: "Australia",
        description: "Sydney Opera House, Great Barrier Reef, outback adventures.",
      },
      {
        name: "New Zealand",
        flag: "https://flagcdn.com/w40/nz.png",
        continent: "Australia",
        description:
          "Mountains, fjords, Maori culture, and Lord of the Rings scenery.",
      },
      {
        name: "Fiji",
        flag: "https://flagcdn.com/w40/fj.png",
        continent: "Australia",
        description: "Tropical beaches, coral reefs, and island resorts.",
      },
      {
        name: "Tahiti",
        flag: "https://flagcdn.com/w40/pf.png",
        continent: "Australia",
        description: "Tropical beaches, coral reefs, and island resorts.",
      },
      {
        name: "Vanuatu",
        flag: "https://flagcdn.com/w40/vu.png",
        continent: "Australia",
        description: "",
      },
      {
        name: "Samoa",
        flag: "https://flagcdn.com/w40/ws.png",
        continent: "Australia",
        description: "",
      },
      {
        name: "Tonga",
        flag: "https://flagcdn.com/w40/to.png",
        continent: "Australia",
        description: "",
      },
      {
        name: "Nauru",
        flag: "https://flagcdn.com/w40/nr.png",
        continent: "Australia",
        description: "",
      }, 
      {
  name: "Papua New Guinea",
  flag: "https://flagcdn.com/w40/pg.png",
  continent: "Australia",
  description:
    "Rainforests, tribal cultures, mountains, and tropical islands.",
},
    ],
  },
  ];

  const query = search.toLowerCase();

  const filteredContinents = continents.filter((item) => {
    return (
      item.continent.toLowerCase().includes(query) ||
      item.countries?.some((country) =>
        country.name.toLowerCase().includes(query)
      )
    );
  });

  return (
    <>
      <style>{`
        .destination-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 24px;
          font-family: 'Poppins', sans-serif;
        }

        .search-input {
          width: 100%;
          padding: 14px 20px;
          margin-bottom: 32px;
          border-radius: 12px;
          border: 1.5px solid rgba(102, 126, 234, 0.25);
          background: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 0.95rem;
          color: #1e1b4b;
          outline: none;
          box-shadow: 0 2px 12px rgba(102, 126, 234, 0.08);
        }

        .no-results {
          text-align: center;
          color: #94a3b8;
          font-size: 1rem;
          margin-top: 40px;
        }
      `}</style>

      <Header />

      <div className="destination-page">
        <input
          type="text"
          placeholder="Search countries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        {filteredContinents.length === 0 ? (
          <p className="no-results">No results found 😢</p>
        ) : (
          <>
            {filteredContinents.map((continent) => (
              <ContinentCard
                key={continent.continent}
                {...continent}
              />
            ))}
          </>
        )}

        <Footer />
      </div>
    </>
  );
}

export default Destinations;