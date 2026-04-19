import ContinentCard from "../Components/ContinentCard/ContinentCard"
import Footer from "../Components/Footer/Footer";
import Header  from "../Components/Header/Header"
import { useLocation } from "react-router-dom";
import { useState } from "react";
function Destination (){
  const location = useLocation();
  const state= location.state;
  const [search, setSearch] = useState("");
 const continents = [
    {
      continent: "Europe",
      image: "https://images.unsplash.com/photo-1761472871829-9c4a2411dc35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGUlMjBsYW5kbWFya3MlMjBlaWZmZWwlMjB0b3dlcnxlbnwxfHx8fDE3NzIxMTQ2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Europe is a continent full of timeless charm and living art. From historic cities like Paris, Rome, and Berlin to breathtaking landscapes like the Alps, Europe offers endless exploration. Its rich culture, museums, and cuisine make it a top destination for travelers. Every country has its own unique traditions and stories waiting to be discovered.",
      countries: [
        { name: "France",continent:"Europe", description:"Paris, the Eiffel Tower, French cuisine and vineyards." },
        { name: "Italy" , continent:"Europe", description:"Rome, Venice, art, architecture and delicious pasta." },
        { name: "Spain" , continent:"Europe" ,description:"Flamenco culture, beaches, tapas, and historic cities."},
        { name: "Portugal" , continent:"Europe" ,description:"Lisbon, Porto, beautiful coastlines, and port wine."},
        { name: "Germany",  continent:"Europe" ,description:"" },
        { name: "Russia", continent:"Europe" , description:"" },
        { name: "United Kingdom", continent:"Europe" , description:"" },
        { name: "Greece", continent:"Europe" , description:"" },
      ]
    },
    {
      continent: "Asia",
      image: "https://images.unsplash.com/photo-1768746382323-621bccddf7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhJTIwdGVtcGxlcyUyMHBhZ29kYXxlbnwxfHx8fDE3NzIxMTQ2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Asia is a vast continent blending ancient traditions with modern innovation. From the bustling streets of Tokyo and Dubai to serene temples and Himalayan peaks, the diversity is astonishing. The food, festivals, and cultural heritage are world-renowned. Adventure, history, and modern life exist side by side across its countries.",
      countries: [
        { name: "Lebanon", continent:"Asia" , description:"Beirut, mountains, Mediterranean coast, and rich history."},
        { name: "Saudi Aarabia", continent:"Asia" , description:"Historic sites, deserts, and Islamic heritage." },
        { name: "United Arab Emirates", continent:"Asia" , description:"Dubai, Abu Dhabi, luxury architecture and desert adventures." },
        { name: "Qatar", continent:"Asia" , description:"Doha skyline, modern culture, and desert landscapes." },
        { name: "Japan", continent:"Asia" , description:"" },
        { name: "Thailand", continent:"Asia" , description:"" },
        { name: "China" ,  continent:"Asia" ,description:""},
        { name: "India",  continent:"Asia" ,description:"" },
      ]
    },
    {
      continent: "Africa",
      image: "https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBzYWZhcmklMjB3aWxkbGlmZXxlbnwxfHx8fDE3NzIwNzI0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Africa is a land of raw beauty and endless soul. Its vast savannas, deserts, rainforests, and mountains host incredible wildlife and scenery. Ancient cultures, historic cities, and vibrant music and art are everywhere. From safaris to coastal beaches, Africa offers unique experiences for every traveler.",
      countries: [
        { name: "South Africa", description:"Cape Town, wildlife safaris, and scenic coastlines." },
        { name: "Kenya", description:"Savannah safaris, Nairobi, and the Great Rift Valley." },
        { name: "Morocco" , description:"Savannah safaris, Nairobi, and the Great Rift Valley."},
        { name: "Egypt", description:"Pyramids, Nile River, ancient history, and culture." },
        { name: "Gabon", description:"" },
        { name: "Algeria", description:"" },
        { name: "Senegal", description:"" },
        { name: "Tunisia", description:"" },
      ]
    },
    {
      continent: "North America",
      image: "https://images.unsplash.com/photo-1702028975812-df2c1fbd20d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aCUyMGFtZXJpY2ElMjBncmFuZCUyMGNhbnlvbnxlbnwxfHx8fDE3NzIxMTQ2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "North America is a continent of vast landscapes and vibrant cities. From the skyscrapers of New York to the natural wonders of the Rockies and Grand Canyon, adventure awaits. Its rich cultural diversity, world-famous landmarks, and bustling metropolises make it a must-visit destination. Each country offers unique experiences, cuisine, and history to explore.",
      countries: [
        { name: "USA",continent:"North America" , description:"New York, national parks, beaches, and cities full of life." },
        { name: "Canada",continent:"North America" , description:"Toronto, Vancouver, Rocky Mountains, and lakes." },
        { name: "Mexico" ,continent:"North America" , description:"Beaches, ancient ruins, and vibrant culture."},
        { name: "Costa Rica",continent:"North America" , description:"Rainforests, volcanoes, and wildlife adventures."},
        { name: "Cuba ",continent:"North America" , description:""},
        { name: "Panama",continent:"North America" , description:""},
        { name: "Haiti", continent:"North America" ,description:""},
        { name: "Bahamas", continent:"North America" ,description:""},
      ]
    },
    {
      continent: "South America",
      image: "https://images.unsplash.com/photo-1589228769717-605083eb3c9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGFtZXJpY2ElMjBtYWNodSUyMHBpY2NodXxlbnwxfHx8fDE3NzIxMTQ2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "South America is a land of color, rhythm, and natural wonders. Explore the Amazon rainforest, Andes mountains, and vibrant cities full of culture and festivals. From tango in Argentina to beaches in Brazil, adventure and diversity abound. Each country has its own unique charm, history, and landscapes that are unforgettable to travelers.",
      countries: [
        { name: "Brazil" ,continent:"Sourh America" , description:"Rio de Janeiro, Amazon rainforest, samba culture."},
        { name: "Colombia",continent:"Sourh America" , description:"Cartagena, coffee regions, mountains and festivals." },
        { name: "Peru" ,continent:"Sourh America" ,description:"Machu Picchu, Inca culture, and Andes mountains."},
        { name: "Argentina",continent:"Sourh America" , description:"Buenos Aires, tango, glaciers, and Patagonian landscapes." },
        { name: "Chile" , continent:"Sourh America" ,description:""},
        { name: "Uruguay" , continent:"Sourh America" ,description:""},
        { name: "Bolivia" , continent:"Sourh America" ,description:""},
        { name: "Venezuela" , continent:"Sourh America" ,description:""},
      ]
    },
    {
      continent: "Australia",
      image: "https://images.unsplash.com/photo-1718185795639-c442aff612cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXN0cmFsaWElMjBzeWRuZXklMjBvcGVyYSUyMGhvdXNlfGVufDF8fHx8MTc3MjAyOTkyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Australia is a land of contrasts, from the cosmopolitan cities like Sydney and Melbourne to the remote outback and Great Barrier Reef. Explore stunning beaches, unique wildlife, and vibrant Aboriginal culture. Its natural beauty, adventure activities, and laid-back lifestyle make it a must-see destination. Every region offers something different, from tropical islands to snowy mountains.",
      countries: [
        { name: "Australia" , continent:"Australia " ,description:"Sydney Opera House, Great Barrier Reef, outback adventures."},
        { name: "New Zealand",continent:"Australia " , description:"Mountains, fjords, Maori culture, and Lord of the Rings scenery."},
        { name: "Fiji" , continent:"Australia " ,description:"Tropical beaches, coral reefs, and island resorts."},
        { name: "Tahiti",continent:"Australia " , description:"Tropical beaches, coral reefs, and island resorts."},
        { name: "Vanuatu",continent:"Australia " , description:""},
        { name: "Samoa",continent:"Australia " , description:""},
        { name: "Tonga",continent:"Australia " ,description:""},
        { name: "Palau", continent:"Australia " ,description:""},
      ]
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
      <Header />

      <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
        
        {/* SEARCH INPUT */}
        <input
          type="text"
          placeholder="Search countries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        {filteredContinents.length === 0 && filteredTickets.length === 0 ? (
  <p style={{ textAlign: "center", color: "red" }}>
    No results found 😢
  </p>
) : (
  <>
    {filteredContinents.map((continent) => (
      <ContinentCard
        key={continent.continent}
        {...continent}
      />
    ))}

    {/* OPTIONAL: show ticket results */}
   
   
  </>
)}

        <Footer />
      </div>
    </>
  );
}

export default Destination;