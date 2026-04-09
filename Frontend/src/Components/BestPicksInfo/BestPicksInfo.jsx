import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BestPicksInfo.css";

function BestPicksInfo() {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const data = {
    Lebanon: {
      restaurants: [
        {
          id: 1,
          name: "Em Sherif",
          image:
            "https://chrisansprojects.com/demo/B&S/B&S/Em-sherif/assets/images/banner/restaurant/res-location-02.webp",
          rating: 4.8,
          reviews: 320,
          description: "Luxury Lebanese fine dining experience",
          location: "Beirut, Lebanon",
        },
        {
          id: 2,
          name: "Baron",
          image:
            "https://date-night-dinner.com/wp-content/uploads/2023/08/the-baron-restaurant.jpg",
          rating: 4.6,
          reviews: 210,
          description: "Modern Armenian-Lebanese fusion cuisine",
          location: "Mar Mikhael, Beirut",
        },
        {
          id: 3,
          name: "Al Falamanki",
          image:
            "https://ucarecdn.com/123f8ccf-567d-4b3f-9d75-4962f04471f9//-/preview/850x500/",
          rating: 4.5,
          reviews: 400,
          description: "Traditional Lebanese atmosphere and food",
          location: "Beirut, Lebanon",
        },
        {
          id: 4,
          name: "Liza",
          image:
            "https://res.cloudinary.com/tf-lab/image/upload/w_600,h_310,c_fill,g_auto:subject,q_auto,f_auto/restaurant/d2e2e204-954e-48af-b423-b9cab2b5247b/58134bc1-08d9-4559-80b1-b70a5cc01f19.jpg",
          rating: 4.7,
          reviews: 180,
          description: "Elegant Lebanese dining in a palace setting",
          location: "Ashrafieh, Beirut",
        },
        {
          id: 5,
          name: "Shams",
          image:
            "https://restaurantalshams.com/wp-content/uploads/2023/12/vibe-e1703257117147.jpg",
          rating: 4.4,
          reviews: 150,
          description: "traditional Lebanese and Armenian cuisine",
          location: "Anjar, Lebanon",
        },
      ],
      cafes: [
        {
          id: 1,
          name: "Urbanista",
          image:
            "https://tse4.mm.bing.net/th/id/OIP.5IxDfTjjjERuVH3m1xE0wwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
          rating: 4.5,
          reviews: 260,
          description: "Cozy modern cafe with books and coffee",
          location: "Hamra, Beirut",
        },
        {
          id: 2,
          name: "Cafe Younes",
          image:
            "https://tourtoreview.com/wp-content/uploads/2022/02/Cafe-Younes-1.webp",
          rating: 4.6,
          reviews: 500,
          description: "Famous Lebanese coffee chain",
          location: "Multiple locations",
        },
        {
          id: 3,
          name: "Roadster Diner",
          image:
            "https://th.bing.com/th/id/OIP.iwyrPt8G16N2--CM8rQzhgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
          rating: 4.3,
          reviews: 600,
          description: "American-style diner with burgers",
          location: "Lebanon",
        },
        {
          id: 4,
          name: "Sip Cafe",
          image:
            "https://colwynbay.info/wp-content/uploads/2024/04/Sip-Cafe-24-Conway-Rd-Colwyn-Bay-LL29-7HT.jpeg",
          rating: 4.4,
          reviews: 190,
          description: "Relaxing cafe with specialty drinks",
          location: "Beirut",
        },
        {
          id: 5,
          name: "Beit El Qamar",
          image:
            "https://tse2.mm.bing.net/th/id/OIP.6RJjjL-3amldJMciDntuSQHaFj?w=1200&h=900&rs=1&pid=ImgDetMain&o=7&rm=3",
          rating: 4.7,
          reviews: 140,
          description: "Charming historic cafe",
          location: "Deir El Qamar",
        },
      ],
      tourism: [
        {
          id: 1,
          name: "Jeita Grotto",
          image:
            "https://th.bing.com/th/id/OIP.m7maG6xNijiVyVWbrouMcQHaE7?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
          rating: 4.9,
          reviews: 800,
          description: "Famous natural caves",
          location: "Jeita",
        },
        {
          id: 2,
          name: "Byblos",
          image:
            "https://th.bing.com/th/id/OIP.zplrnb66VU0Xyba1v03s0QHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
          rating: 4.8,
          reviews: 600,
          description: "Ancient Phoenician city",
          location: "Jbeil",
        },
        {
          id: 3,
          name: "Baalbeck ",
          image:
            "https://tse3.mm.bing.net/th/id/OIP.i0yQVgshhvPolEarWoKOiAHaD5?rs=1&pid=ImgDetMain&o=7&rm=3",
          rating: 4.9,
          reviews: 550,
          description: "Roman temple complex",
          location: "Baalbeck",
        },
        {
          id: 4,
          name: "Raouché",
          image:
            "https://tse1.mm.bing.net/th/id/OIP.rr5G1vDWW2R3pIp_aleVbwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
          rating: 4.7,
          reviews: 480,
          description: "Pigeon Rocks landmark",
          location: "Beirut",
        },
        {
          id: 5,
          name: "Batroun Old Souk",
          image:
            "https://tse2.mm.bing.net/th/id/OIP.cIix_ZfzpiYfLVbPIH5Q7wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          rating: 4.6,
          reviews: 300,
          description: "Historic streets and nightlife",
          location: "Batroun",
        },
      ],
    },

    Turkey: {
      restaurants: [
        { id: 1, name: "Nusr-Et", image: "https://theworldkeys.com/wp-content/uploads/2023/08/Nusr-et-steakhouse-Ankara_theworldkeys_14-1024x768.webp", rating: 4.7, reviews: 250, description: "Famous steakhouse", location: "Istanbul" },
        { id: 2, name: "Mikla", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/46/0b/af/mikla.jpg?w=600&h=-1&s=1", rating: 4.6, reviews: 200, description: "Modern Turkish cuisine", location: "Istanbul" },
        { id: 3, name: "360 Istanbul", image: "https://tse3.mm.bing.net/th/id/OIP.Fmp_YZq1eDKFlCiiF9AzPwHaFj?w=1463&h=1098&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.5, reviews: 180, description: "Panoramic rooftop restaurant", location: "Istanbul" },
        { id: 4, name: "Asitane", image: "https://tse3.mm.bing.net/th/id/OIP.NMs4HxoTukkaGZ1oQSWRtgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.4, reviews: 150, description: "Ottoman cuisine", location: "Istanbul" },
        { id: 5, name: "Karaköy Lokantası", image: "https://th.bing.com/th/id/R.f3a20e76c4c2c91b9d92251be0b3de87?rik=ELgIw5MUYd8qXQ&pid=ImgRaw&r=0", rating: 4.3, reviews: 140, description: "Traditional Turkish restaurant", location: "Istanbul" },
      ],
      cafes: [
        { id: 1, name: "Mandabatmaz", image: "https://tse4.mm.bing.net/th/id/OIP.GutxCckRh5DBPbfuXcD7sgHaF1?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.6, reviews: 220, description: "Famous Turkish coffee", location: "Istanbul" },
        { id: 2, name: "Kronotrop", image: "https://tse3.mm.bing.net/th/id/OIP.5LnGT8Ko8CjIJCte_ElCoAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.5, reviews: 180, description: "Specialty coffee", location: "Istanbul" },
        { id: 3, name: "Petra Roasting", image: "https://tse1.mm.bing.net/th/id/OIP.PqnMMxeF1bn7vZoNjlCUigHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.4, reviews: 150, description: "Modern cafe", location: "Istanbul" },
        { id: 4, name: "Cafe Privato", image: "https://tse4.mm.bing.net/th/id/OIP.DbrlsIMxHj001Us5ujOeLwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.3, reviews: 120, description: "Cozy atmosphere", location: "Istanbul" },
        { id: 5, name: "Fazil Bey", image: "https://tse1.mm.bing.net/th/id/OIP.YjSOH60kX-tDbWfBEuy-aQHaJ3?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.2, reviews: 100, description: "Historic cafe", location: "Istanbul" },
      ],
      tourism: [
        { id: 1, name: "Hagia Sophia", image: "https://tse2.mm.bing.net/th/id/OIP.kLOtitNlPznpOL_SHAj6ugHaE8?w=626&h=418&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.9, reviews: 500, description: "Historic mosque/museum", location: "Istanbul" },
        { id: 2, name: "Blue Mosque", image: "https://media.istockphoto.com/id/1257004006/photo/blue-mosque-in-istanbul-at-night.jpg?s=170667a&w=0&k=20&c=lqrofxdyOy5AldMbcVIMnDHifxAkbg8c-2q7T3iQu8M=", rating: 4.8, reviews: 450, description: "Iconic mosque", location: "Istanbul" },
        { id: 3, name: "Cappadocia", image: "https://th.bing.com/th/id/OIP.ohXqj6Tsk3UvBXmXZBTsMAHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.9, reviews: 400, description: "Famous fairy chimneys", location: "Cappadocia" },
        { id: 4, name: "Topkapi Palace", image: "https://tse4.mm.bing.net/th/id/OIP.u4BbN0P20HBbZKhW8qkCVQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.7, reviews: 350, description: "Ottoman palace", location: "Istanbul" },
        { id: 5, name: "Grand Bazaar", image: "https://th.bing.com/th/id/OIP.h6quR119LIgINw7p1DtwVQHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.6, reviews: 300, description: "Historic market", location: "Istanbul" },
      ],
    },

    // ==================== FRANCE ====================
    France: {
      restaurants: [
        { id: 1, name: "Le Meurice", image: "https://tse4.mm.bing.net/th/id/OIP.nIUeaC07kDdrLg2MsGGX7gHaE7?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.8, reviews: 320, description: "Fine dining in Paris", location: "Paris" },
        { id: 2, name: "L'Ambroisie", image: "https://th.bing.com/th/id/OIP.YP4x_pJSRGKpY6-_BbRYGgHaFk?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.7, reviews: 210, description: "Gourmet French cuisine", location: "Paris" },
        { id: 3, name: "Epicure", image: "https://tse2.mm.bing.net/th/id/OIP.FTpYF1eE7-KpxpcPW77RBgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.6, reviews: 180, description: "Luxury French restaurant", location: "Paris" },
        { id: 4, name: "Le Jules Verne", image: "https://tse1.mm.bing.net/th/id/OIP.da5LU3orGR2x0yJHvYs3vQHaFF?w=1320&h=906&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.5, reviews: 150, description: "Dining with Eiffel Tower view", location: "Paris" },
        { id: 5, name: "Septime", image: "https://tse1.mm.bing.net/th/id/OIP.n3LSgwG5PeXruoQgJtzFXAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.4, reviews: 140, description: "Modern French cuisine", location: "Paris" },
      ],
      cafes: [
        { id: 1, name: "Café de Flore", image: "https://th.bing.com/th/id/OIP.V6_pphRqkUe43OFFnjnwfwHaEZ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.6, reviews: 300, description: "Historic Parisian cafe", location: "Paris" },
        { id: 2, name: "Les Deux Magots", image: "https://tse4.mm.bing.net/th/id/OIP.b1F7Mp8ROwmHXDNAkUwmfgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.5, reviews: 280, description: "Famous literary cafe", location: "Paris" },
        { id: 3, name: "Angelina", image: "https://tse4.mm.bing.net/th/id/OIP.JpWKukzVbz5kW6Rg16PhoQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.4, reviews: 250, description: "Hot chocolate and pastries", location: "Paris" },
        { id: 4, name: "Café Kitsuné", image: "https://th.bing.com/th/id/OIP.l9mbeOrT2uW7kDLxWRZyNwHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.3, reviews: 200, description: "Modern trendy cafe", location: "Paris" },
        { id: 5, name: "La Maison Rose", image: "https://th.bing.com/th/id/OIP.-KRpkfHdwicuXof7yy47uwHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.2, reviews: 150, description: "Charming cafe in Montmartre", location: "Paris" },
      ],
      tourism: [
        { id: 1, name: "Eiffel Tower", image: "https://tse1.mm.bing.net/th/id/OIP.V3zyVawtkwzeKBtIEtj2ewHaNK?w=1440&h=2560&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.9, reviews: 900, description: "Iconic landmark", location: "Paris" },
        { id: 2, name: "Louvre Museum", image: "https://th.bing.com/th/id/OIP.mM0hHCzE0dnE7q_rbnuW-AHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.8, reviews: 850, description: "World-famous museum", location: "Paris" },
        { id: 3, name: "Mont Saint-Michel", image: "https://tse4.mm.bing.net/th/id/OIP.OiS2MqxRBm6yFrktExQp2QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.7, reviews: 700, description: "Historic abbey", location: "Normandy" },
        { id: 4, name: "Palace of Versailles", image: "https://tse2.mm.bing.net/th/id/OIP.SEUCHlv_UiZdbsAK4uuhqgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.6, reviews: 600, description: "Royal palace", location: "Versailles" },
        { id: 5, name: "Notre-Dame Cathedral", image: "https://tse4.mm.bing.net/th/id/OIP.E4n3-zgKwOtUEzLY3RDOawHaJ4?w=675&h=900&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.5, reviews: 550, description: "Gothic cathedral", location: "Paris" },
      ],
    },

    // ==================== UAE ====================
    UAE: {
      restaurants: [
        { id: 1, name: "Pierchic", image: "https://tse1.mm.bing.net/th/id/OIP.g7VpWsZ_M-9GumZjik1uxgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.8, reviews: 350, description: "Seafood fine dining", location: "Dubai" },
        { id: 2, name: "Zuma", image: "https://tse1.mm.bing.net/th/id/OIP.VMiserzmXX-XggJ70gPKeAHaEa?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.7, reviews: 320, description: "Modern Japanese cuisine", location: "Dubai" },
        { id: 3, name: "Al Hadheerah", image: "https://th.bing.com/th/id/OIP.hxRPEmwriCdYYtdi-hBpEgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.6, reviews: 300, description: "Traditional Arabic cuisine", location: "Abu Dhabi" },
        { id: 4, name: "COYA", image: "https://tse1.mm.bing.net/th/id/OIP.c9X-GnIYJYsznXvvgokuyAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.5, reviews: 250, description: "Peruvian restaurant", location: "Dubai" },
        { id: 5, name: "La Petite Maison", image: "https://tse1.mm.bing.net/th/id/OIP.qPDQoN_xcCso8RZtmjdQGgHaD3?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.4, reviews: 200, description: "French Mediterranean cuisine", location: "Dubai" },
      ],
      cafes: [
        { id: 1, name: "Arabica Coffee", image: "https://th.bing.com/th/id/OIP.gEs-kCKheLDNq4xtdRYCNwAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.6, reviews: 260, description: "Specialty coffee", location: "Dubai" },
        { id: 2, name: "St. Regis Cafe", image: "https://tse2.mm.bing.net/th/id/OIP.3cRiZI4BXeNXDAQ0xMuP8wHaEo?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.5, reviews: 240, description: "Luxury cafe", location: "Abu Dhabi" },
        { id: 3, name: "Tom&Serg", image: "https://th.bing.com/th/id/OIP.6UZTGU87U7p6A1CcCplsSwHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.4, reviews: 220, description: "Trendy cafe", location: "Dubai" },
        { id: 4, name: "Nightjar Cafe", image: "https://tse3.mm.bing.net/th/id/OIP.JwktFwW-rVzDw099Dw9DVQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.3, reviews: 200, description: "Chill spot", location: "Dubai" },
        { id: 5, name: "The Sum of Us", image: "https://tse1.mm.bing.net/th/id/OIP.MCwfyITx5vNHktonYYURbQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.2, reviews: 180, description: "Artisan cafe", location: "Dubai" },
      ],
      tourism: [
        { id: 1, name: "Burj Khalifa", image: "https://cdn.pixabay.com/photo/2022/01/20/21/34/dubai-6953421_1280.jpg", rating: 4.9, reviews: 1000, description: "Tallest building in the world", location: "Dubai" },
        { id: 2, name: "Sheikh Zayed Mosque", image: "https://tse3.mm.bing.net/th/id/OIP.2FOzgECnJkLYosiVKtaD7wHaEo?w=1920&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.8, reviews: 900, description: "Iconic mosque", location: "Abu Dhabi" },
        { id: 3, name: "Dubai Mall", image: "https://th.bing.com/th/id/OIP.pAycLmu17o7-vzjmtzFlEgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.7, reviews: 800, description: "Huge shopping mall", location: "Dubai" },
        { id: 4, name: "Palm Jumeirah", image: "https://tse3.mm.bing.net/th/id/OIP.VOe2ZqMZpYj1gXtBGjPSxwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.6, reviews: 750, description: "Famous man-made island", location: "Dubai" },
        { id: 5, name: "Desert Safari", image: "https://tse1.mm.bing.net/th/id/OIP.cfk1U1Za3t4hIeEzfIVu2AHaFl?rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.5, reviews: 700, description: "Adventure experience", location: "Dubai" },
      ],
    },
  };

  return (
    <div className="best-picks-container">
      <h1>Best Picks ⭐</h1>

      {/* Step 1: Select Country */}
      {!selectedCountry && (
        <div className="country-buttons">
          {Object.keys(data).map((country) => (
            <button key={country} onClick={() => setSelectedCountry(country)}>
              {country}
            </button>
          ))}
        </div>
      )}

      {/* Step 2: Select Category */}
      {selectedCountry && !selectedCategory && (
        <div className="category-buttons">
          <button onClick={() => setSelectedCategory("restaurants")}>🍽️ Restaurants</button>
          <button onClick={() => setSelectedCategory("cafes")}>☕ Cafes</button>
          <button onClick={() => setSelectedCategory("tourism")}>🗺️ Tourism</button>
          <button onClick={() => setSelectedCountry(null)}>⬅ Back to Countries</button>
        </div>
      )}

      {/* Step 3: Show Cards */}
      {selectedCountry && selectedCategory && (
        <div className="category-list">
          <button className="back-button" onClick={() => setSelectedCategory(null)}>⬅ Back to Categories</button>
          <h2>{selectedCategory.toUpperCase()} - {selectedCountry}</h2>
          <div className="cards">
            {data[selectedCountry][selectedCategory].map((item) => (
              <div
                className="card"
                key={item.id}
                onClick={() => navigate("/PicksDetails", { state: item })}
              >
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Rating: {item.rating} ⭐ ({item.reviews} reviews)</p>
                <p>Location: {item.location}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default BestPicksInfo;
 