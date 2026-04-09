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
        { name: "France", description:"Paris, the Eiffel Tower, French cuisine and vineyards." },
        { name: "Italy" , description:"Rome, Venice, art, architecture and delicious pasta." },
        { name: "Spain" , description:"Flamenco culture, beaches, tapas, and historic cities."},
        { name: "Portugal" , description:"Lisbon, Porto, beautiful coastlines, and port wine."},
        { name: "Germany", description:"" },
        { name: "Russia", description:"" },
        { name: "United Kingdom", description:"" },
        { name: "Greece", description:"" },
      ]
    },
    {
      continent: "Asia",
      image: "https://images.unsplash.com/photo-1768746382323-621bccddf7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhJTIwdGVtcGxlcyUyMHBhZ29kYXxlbnwxfHx8fDE3NzIxMTQ2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Asia is a vast continent blending ancient traditions with modern innovation. From the bustling streets of Tokyo and Dubai to serene temples and Himalayan peaks, the diversity is astonishing. The food, festivals, and cultural heritage are world-renowned. Adventure, history, and modern life exist side by side across its countries.",
      countries: [
        { name: "Lebanon", description:"Beirut, mountains, Mediterranean coast, and rich history."},
        { name: "Saudi Aarabia", description:"Historic sites, deserts, and Islamic heritage." },
        { name: "United Arab Emirates", description:"Dubai, Abu Dhabi, luxury architecture and desert adventures." },
        { name: "Qatar", description:"Doha skyline, modern culture, and desert landscapes." },
        { name: "Japan", description:"" },
        { name: "Thailand", description:"" },
        { name: "China" , description:""},
        { name: "India", description:"" },
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
        { name: "USA", description:"New York, national parks, beaches, and cities full of life." },
        { name: "Canada", description:"Toronto, Vancouver, Rocky Mountains, and lakes." },
        { name: "Mexico" , description:"Beaches, ancient ruins, and vibrant culture."},
        { name: "Costa Rica", description:"Rainforests, volcanoes, and wildlife adventures."},
        { name: "Cuba ", description:""},
        { name: "Panama", description:""},
        { name: "Haiti", description:""},
        { name: "Bahamas", description:""},
      ]
    },
    {
      continent: "South America",
      image: "https://images.unsplash.com/photo-1589228769717-605083eb3c9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGFtZXJpY2ElMjBtYWNodSUyMHBpY2NodXxlbnwxfHx8fDE3NzIxMTQ2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "South America is a land of color, rhythm, and natural wonders. Explore the Amazon rainforest, Andes mountains, and vibrant cities full of culture and festivals. From tango in Argentina to beaches in Brazil, adventure and diversity abound. Each country has its own unique charm, history, and landscapes that are unforgettable to travelers.",
      countries: [
        { name: "Brazil" , description:"Rio de Janeiro, Amazon rainforest, samba culture."},
        { name: "Colombia", description:"Cartagena, coffee regions, mountains and festivals." },
        { name: "Peru" , description:"Machu Picchu, Inca culture, and Andes mountains."},
        { name: "Argentina", description:"Buenos Aires, tango, glaciers, and Patagonian landscapes." },
        { name: "Chile" , description:""},
        { name: "Uruguay" , description:""},
        { name: "Bolivia" , description:""},
        { name: "Venezuela" , description:""},
      ]
    },
    {
      continent: "Australia",
      image: "https://images.unsplash.com/photo-1718185795639-c442aff612cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXN0cmFsaWElMjBzeWRuZXklMjBvcGVyYSUyMGhvdXNlfGVufDF8fHx8MTc3MjAyOTkyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Australia is a land of contrasts, from the cosmopolitan cities like Sydney and Melbourne to the remote outback and Great Barrier Reef. Explore stunning beaches, unique wildlife, and vibrant Aboriginal culture. Its natural beauty, adventure activities, and laid-back lifestyle make it a must-see destination. Every region offers something different, from tropical islands to snowy mountains.",
      countries: [
        { name: "Australia" , description:"Sydney Opera House, Great Barrier Reef, outback adventures."},
        { name: "New Zealand", description:"Mountains, fjords, Maori culture, and Lord of the Rings scenery."},
        { name: "Fiji" , description:"Tropical beaches, coral reefs, and island resorts."},
        { name: "Tahiti", description:"Tropical beaches, coral reefs, and island resorts."},
        { name: "Vanuatu", description:""},
        { name: "Samoa", description:""},
        { name: "Tonga", description:""},
        { name: "Palau", description:""},
      ]
    },
  ];
  return (
    <>
      <Header/>

      <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
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
{continents.filter((item) =>

   item.continent.toLowerCase().includes(search.toLowerCase()) ||
    item.countries?.some(country =>
      country.name.toLowerCase().includes(search.toLowerCase())
    ))
  .map((Product) => (
    <ContinentCard key={Product.continent} {...Product} />
))}

<Footer/>
</div>
</>
  )
}
export default Destination;
