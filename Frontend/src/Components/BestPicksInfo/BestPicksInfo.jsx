import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BestPicksInfo.css";

function BestPicksInfo() {
  const navigate = useNavigate();

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ================= COUNTRY MAIN IMAGES =================

  const countryImages = {
    Lebanon:
      "https://www.lebanontraveler.com/wp-content/uploads/2025/03/123.jpg",

    Turkey:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa",

    UAE:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  };

  // ================= FLAGS =================

  const flags = {
    Lebanon: "https://flagcdn.com/w320/lb.png",
    Turkey: "https://flagcdn.com/w320/tr.png",
    UAE: "https://flagcdn.com/w320/ae.png",
  };

  // ================= DATA =================

  const data = {
    Lebanon: {
      restaurants: [
        {
          id: 1,
          name: "Em Sherif",
          image:
            "https://chrisansprojects.com/demo/B&S/B&S/Em-sherif/assets/images/banner/restaurant/res-location-02.webp",
          flag: flags.Lebanon,
          rating: 4.8,
          reviews: 320,
          description: "Luxury Lebanese fine dining experience",
          location: "Beirut, Lebanon",
          price: "$$$$",
          time: "10 AM - 12 PM",
          extra: "Live music • Rooftop • VIP Tables",
        },

        {
          id: 2,
          name: "Baron",
          image:
            "https://date-night-dinner.com/wp-content/uploads/2023/08/the-baron-restaurant.jpg",
          flag: flags.Lebanon,
          rating: 4.6,
          reviews: 210,
          description: "Modern Armenian-Lebanese fusion cuisine",
          location: "Mar Mikhael, Beirut",
          price: "$$$",
          time: "11 AM - 1 AM",
          extra: "Cocktails • Outdoor seating",
        },

        {
          id: 3,
          name: "Al Falamanki",
          image:
            "https://ucarecdn.com/123f8ccf-567d-4b3f-9d75-4962f04471f9//-/preview/850x500/",
          flag: flags.Lebanon,
          rating: 4.5,
          reviews: 400,
          description: "Traditional Lebanese atmosphere and food",
          location: "Beirut, Lebanon",
          price: "$$",
          time: "9 AM - 2 AM",
          extra: "Shisha • Outdoor garden",
        },

        {
          id: 4,
          name: "Liza",
          image:
            "https://res.cloudinary.com/tf-lab/image/upload/w_600,h_310,c_fill,g_auto:subject,q_auto,f_auto/restaurant/d2e2e204-954e-48af-b423-b9cab2b5247b/58134bc1-08d9-4559-80b1-b70a5cc01f19.jpg",
          flag: flags.Lebanon,
          rating: 4.7,
          reviews: 180,
          description: "Elegant Lebanese dining in a palace setting",
          location: "Ashrafieh, Beirut",
          price: "$$$$",
          time: "12 PM - 11 PM",
          extra: "Luxury atmosphere • Fine dining",
        },

        {
          id: 5,
          name: "Shams",
          image:
            "https://restaurantalshams.com/wp-content/uploads/2023/12/vibe-e1703257117147.jpg",
          flag: flags.Lebanon,
          rating: 4.4,
          reviews: 150,
          description: "Traditional Lebanese and Armenian cuisine",
          location: "Anjar, Lebanon",
          price: "$$$",
          time: "10 AM - 11 PM",
          extra: "Mountain views • Family place",
        },
      ],

      cafes: [
        {
          id: 1,
          name: "Urbanista",
          image:
            "https://tse4.mm.bing.net/th/id/OIP.5IxDfTjjjERuVH3m1xE0wwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
          flag: flags.Lebanon,
          rating: 4.5,
          reviews: 260,
          description: "Cozy modern cafe with books and coffee",
          location: "Hamra, Beirut",
          price: "$$",
          time: "8 AM - 12 AM",
          extra: "Co-working • Desserts",
        },

        {
          id: 2,
          name: "Cafe Younes",
          image:
            "https://tourtoreview.com/wp-content/uploads/2022/02/Cafe-Younes-1.webp",
          flag: flags.Lebanon,
          rating: 4.6,
          reviews: 500,
          description: "Famous Lebanese coffee chain",
          location: "Multiple locations",
          price: "$$",
          time: "24 Hours",
          extra: "Premium coffee • Fast service",
        },

        {
          id: 3,
          name: "Roadster Diner",
          image:
            "https://th.bing.com/th/id/OIP.iwyrPt8G16N2--CM8rQzhgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
          flag: flags.Lebanon,
          rating: 4.3,
          reviews: 600,
          description: "American-style diner with burgers",
          location: "Lebanon",
          price: "$$",
          time: "10 AM - 1 AM",
          extra: "Milkshakes • Burgers",
        },

        {
          id: 4,
          name: "Sip Cafe",
          image:
            "https://colwynbay.info/wp-content/uploads/2024/04/Sip-Cafe-24-Conway-Rd-Colwyn-Bay-LL29-7HT.jpeg",
          flag: flags.Lebanon,
          rating: 4.4,
          reviews: 190,
          description: "Relaxing cafe with specialty drinks",
          location: "Beirut",
          price: "$$",
          time: "9 AM - 11 PM",
          extra: "Specialty drinks • Calm vibes",
        },

        {
          id: 5,
          name: "Beit El Qamar",
          image:
            "https://tse2.mm.bing.net/th/id/OIP.6RJjjL-3amldJMciDntuSQHaFj?w=1200&h=900&rs=1&pid=ImgDetMain&o=7&rm=3",
          flag: flags.Lebanon,
          rating: 4.7,
          reviews: 140,
          description: "Charming historic cafe",
          location: "Deir El Qamar",
          price: "$$$",
          time: "9 AM - 10 PM",
          extra: "Historic vibes • Nature",
        },
      ],

      tourism: [
        {
          id: 1,
          name: "Jeita Grotto",
          image:
            "https://th.bing.com/th/id/OIP.m7maG6xNijiVyVWbrouMcQHaE7?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
          flag: flags.Lebanon,
          rating: 4.9,
          reviews: 800,
          description: "Famous natural caves",
          location: "Jeita",
          price: "$15",
          time: "9 AM - 5 PM",
          extra: "Boat ride • Nature",
        },

        {
          id: 2,
          name: "Byblos",
          image:
            "https://th.bing.com/th/id/OIP.zplrnb66VU0Xyba1v03s0QHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
          flag: flags.Lebanon,
          rating: 4.8,
          reviews: 600,
          description: "Ancient Phoenician city",
          location: "Jbeil",
          price: "Free",
          time: "All day",
          extra: "Historic port • Souks",
        },

        {
          id: 3,
          name: "Baalbeck",
          image:
            "https://tse3.mm.bing.net/th/id/OIP.i0yQVgshhvPolEarWoKOiAHaD5?rs=1&pid=ImgDetMain&o=7&rm=3",
          flag: flags.Lebanon,
          rating: 4.9,
          reviews: 550,
          description: "Roman temple complex",
          location: "Baalbeck",
          price: "$10",
          time: "8 AM - 6 PM",
          extra: "UNESCO site • Festivals",
        },

        {
          id: 4,
          name: "Raouché",
          image:
            "https://tse1.mm.bing.net/th/id/OIP.rr5G1vDWW2R3pIp_aleVbwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
          flag: flags.Lebanon,
          rating: 4.7,
          reviews: 480,
          description: "Pigeon Rocks landmark",
          location: "Beirut",
          price: "Free",
          time: "All day",
          extra: "Sea views • Sunset",
        },

        {
          id: 5,
          name: "Batroun Old Souk",
          image:
            "https://tse2.mm.bing.net/th/id/OIP.cIix_ZfzpiYfLVbPIH5Q7wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          flag: flags.Lebanon,
          rating: 4.6,
          reviews: 300,
          description: "Historic streets and nightlife",
          location: "Batroun",
          price: "Free",
          time: "All day",
          extra: "Beach • Nightlife",
        },
      ],
    },
    // ================= TURKEY =================

Turkey: {
  restaurants: [
    {
      id: 1,
      name: "Nusr-Et",
      image:
        "https://wallpapercave.com/wp/wp9191677.jpg",
      flag: flags.Turkey,
      rating: 4.7,
      reviews: 250,
      description: "Famous luxury steakhouse",
      location: "Istanbul",
      price: "$$$$",
      time: "12 PM - 1 AM",
      extra: "Premium steaks • Luxury dining",
    },

    {
      id: 2,
      name: "Mikla",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/46/0b/af/mikla.jpg?w=600&h=-1&s=1",
      flag: flags.Turkey,
      rating: 4.6,
      reviews: 200,
      description: "Modern Turkish cuisine",
      location: "Istanbul",
      price: "$$$",
      time: "5 PM - 12 AM",
      extra: "Rooftop • Bosphorus view",
    },

    {
      id: 3,
      name: "360 Istanbul",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.Fmp_YZq1eDKFlCiiF9AzPwHaFj?w=1463&h=1098&rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.Turkey,
      rating: 4.5,
      reviews: 180,
      description: "Panoramic rooftop restaurant",
      location: "Istanbul",
      price: "$$$",
      time: "4 PM - 2 AM",
      extra: "Live music • Rooftop",
    },

    {
      id: 4,
      name: "Asitane",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.NMs4HxoTukkaGZ1oQSWRtgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.Turkey,
      rating: 4.4,
      reviews: 150,
      description: "Authentic Ottoman cuisine",
      location: "Istanbul",
      price: "$$$",
      time: "11 AM - 11 PM",
      extra: "Historic atmosphere",
    },

    {
      id: 5,
      name: "Karaköy Lokantası",
      image:
        "https://th.bing.com/th/id/R.f3a20e76c4c2c91b9d92251be0b3de87?rik=ELgIw5MUYd8qXQ&pid=ImgRaw&r=0",
      flag: flags.Turkey,
      rating: 4.3,
      reviews: 140,
      description: "Traditional Turkish restaurant",
      location: "Istanbul",
      price: "$$",
      time: "10 AM - 12 AM",
      extra: "Seafood • Turkish dishes",
    },
  ],

  cafes: [
    {
      id: 1,
      name: "Mandabatmaz",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.GutxCckRh5DBPbfuXcD7sgHaF1?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.Turkey,
      rating: 4.6,
      reviews: 220,
      description: "Famous Turkish coffee",
      location: "Istanbul",
      price: "$$",
      time: "8 AM - 11 PM",
      extra: "Traditional Turkish coffee",
    },

    {
      id: 2,
      name: "Kronotrop",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.5LnGT8Ko8CjIJCte_ElCoAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.Turkey,
      rating: 4.5,
      reviews: 180,
      description: "Specialty coffee shop",
      location: "Istanbul",
      price: "$$",
      time: "8 AM - 10 PM",
      extra: "Modern vibes • Desserts",
    },

    {
      id: 3,
      name: "Petra Roasting",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.PqnMMxeF1bn7vZoNjlCUigHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.Turkey,
      rating: 4.4,
      reviews: 150,
      description: "Modern cafe",
      location: "Istanbul",
      price: "$$",
      time: "9 AM - 11 PM",
      extra: "Coffee beans • Snacks",
    },

    {
      id: 4,
      name: "Cafe Privato",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.DbrlsIMxHj001Us5ujOeLwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.Turkey,
      rating: 4.3,
      reviews: 120,
      description: "Cozy atmosphere",
      location: "Istanbul",
      price: "$$",
      time: "8 AM - 10 PM",
      extra: "Breakfast • Tea",
    },

    {
      id: 5,
      name: "Fazil Bey",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.YjSOH60kX-tDbWfBEuy-aQHaJ3?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.Turkey,
      rating: 4.2,
      reviews: 100,
      description: "Historic Turkish cafe",
      location: "Istanbul",
      price: "$",
      time: "9 AM - 11 PM",
      extra: "Historic vibes",
    },
  ],

  tourism: [
    {
      id: 1,
      name: "Hagia Sophia",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.kLOtitNlPznpOL_SHAj6ugHaE8?w=626&h=418&rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.Turkey,
      rating: 4.9,
      reviews: 500,
      description: "Historic mosque and museum",
      location: "Istanbul",
      price: "$20",
      time: "9 AM - 7 PM",
      extra: "UNESCO site",
    },

    {
      id: 2,
      name: "Blue Mosque",
      image:
        "https://media.istockphoto.com/id/1257004006/photo/blue-mosque-in-istanbul-at-night.jpg?s=170667a&w=0&k=20&c=lqrofxdyOy5AldMbcVIMnDHifxAkbg8c-2q7T3iQu8M=",
      flag: flags.Turkey,
      rating: 4.8,
      reviews: 450,
      description: "Iconic Ottoman mosque",
      location: "Istanbul",
      price: "Free",
      time: "All day",
      extra: "Islamic architecture",
    },

    {
      id: 3,
      name: "Cappadocia",
      image:
        "https://th.bing.com/th/id/OIP.ohXqj6Tsk3UvBXmXZBTsMAHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.Turkey,
      rating: 4.9,
      reviews: 400,
      description: "Famous fairy chimneys",
      location: "Cappadocia",
      price: "$80",
      time: "All day",
      extra: "Hot air balloons",
    },

    {
      id: 4,
      name: "Topkapi Palace",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.u4BbN0P20HBbZKhW8qkCVQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.Turkey,
      rating: 4.7,
      reviews: 350,
      description: "Ottoman imperial palace",
      location: "Istanbul",
      price: "$15",
      time: "9 AM - 6 PM",
      extra: "Historic artifacts",
    },

    {
      id: 5,
      name: "Grand Bazaar",
      image:
        "https://th.bing.com/th/id/OIP.h6quR119LIgINw7p1DtwVQHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.Turkey,
      rating: 4.6,
      reviews: 300,
      description: "Historic shopping market",
      location: "Istanbul",
      price: "Free",
      time: "8 AM - 8 PM",
      extra: "Traditional shops",
    },
  ],
},
// ================= UAE =================

UAE: {
  restaurants: [
    {
      id: 1,
      name: "Pierchic",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.g7VpWsZ_M-9GumZjik1uxgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.UAE,
      rating: 4.8,
      reviews: 350,
      description: "Luxury seafood fine dining",
      location: "Dubai",
      price: "$$$$",
      time: "1 PM - 12 AM",
      extra: "Sea view • Romantic atmosphere",
    },

    {
      id: 2,
      name: "Zuma",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.VMiserzmXX-XggJ70gPKeAHaEa?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.UAE,
      rating: 4.7,
      reviews: 320,
      description: "Modern Japanese cuisine",
      location: "Dubai",
      price: "$$$$",
      time: "12 PM - 1 AM",
      extra: "Luxury dining • Sushi",
    },

    {
      id: 3,
      name: "Al Hadheerah",
      image:
        "https://th.bing.com/th/id/OIP.hxRPEmwriCdYYtdi-hBpEgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.UAE,
      rating: 4.6,
      reviews: 300,
      description: "Traditional Arabic cuisine",
      location: "Abu Dhabi",
      price: "$$$",
      time: "5 PM - 12 AM",
      extra: "Desert vibes • Live shows",
    },

    {
      id: 4,
      name: "COYA",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.c9X-GnIYJYsznXvvgokuyAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.UAE,
      rating: 4.5,
      reviews: 250,
      description: "Peruvian luxury restaurant",
      location: "Dubai",
      price: "$$$$",
      time: "1 PM - 1 AM",
      extra: "Live DJ • Luxury interior",
    },

    {
      id: 5,
      name: "La Petite Maison",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.qPDQoN_xcCso8RZtmjdQGgHaD3?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.UAE,
      rating: 4.4,
      reviews: 200,
      description: "French Mediterranean cuisine",
      location: "Dubai",
      price: "$$$",
      time: "12 PM - 12 AM",
      extra: "Elegant atmosphere",
    },
  ],

  cafes: [
    {
      id: 1,
      name: "Arabica Coffee",
      image:
        "https://th.bing.com/th/id/OIP.gEs-kCKheLDNq4xtdRYCNwAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.UAE,
      rating: 4.6,
      reviews: 260,
      description: "Specialty coffee cafe",
      location: "Dubai",
      price: "$$",
      time: "7 AM - 12 AM",
      extra: "Premium coffee • Modern design",
    },

    {
      id: 2,
      name: "St. Regis Cafe",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.3cRiZI4BXeNXDAQ0xMuP8wHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.UAE,
      rating: 4.5,
      reviews: 240,
      description: "Luxury cafe and desserts",
      location: "Abu Dhabi",
      price: "$$$",
      time: "8 AM - 11 PM",
      extra: "Luxury atmosphere",
    },

    {
      id: 3,
      name: "Tom&Serg",
      image:
        "https://th.bing.com/th/id/OIP.6UZTGU87U7p6A1CcCplsSwHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.UAE,
      rating: 4.4,
      reviews: 220,
      description: "Trendy industrial-style cafe",
      location: "Dubai",
      price: "$$",
      time: "8 AM - 10 PM",
      extra: "Brunch • Specialty coffee",
    },

    {
      id: 4,
      name: "Nightjar Cafe",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.JwktFwW-rVzDw099Dw9DVQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.UAE,
      rating: 4.3,
      reviews: 200,
      description: "Relaxing cafe with modern vibes",
      location: "Dubai",
      price: "$$",
      time: "9 AM - 12 AM",
      extra: "Desserts • Chill music",
    },

    {
      id: 5,
      name: "The Sum of Us",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.MCwfyITx5vNHktonYYURbQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.UAE,
      rating: 4.2,
      reviews: 180,
      description: "Artisan coffee and bakery",
      location: "Dubai",
      price: "$$",
      time: "7 AM - 11 PM",
      extra: "Bakery • Breakfast",
    },
  ],

  tourism: [
    {
      id: 1,
      name: "Burj Khalifa",
      image:
        "https://cdn.pixabay.com/photo/2022/01/20/21/34/dubai-6953421_1280.jpg",
      flag: flags.UAE,
      rating: 4.9,
      reviews: 1000,
      description: "Tallest building in the world",
      location: "Dubai",
      price: "$45",
      time: "10 AM - 12 AM",
      extra: "Sky view • Luxury experience",
    },

    {
      id: 2,
      name: "Sheikh Zayed Mosque",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.2FOzgECnJkLYosiVKtaD7wHaEo?w=1920&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.UAE,
      rating: 4.8,
      reviews: 900,
      description: "Famous white mosque",
      location: "Abu Dhabi",
      price: "Free",
      time: "9 AM - 10 PM",
      extra: "Islamic architecture",
    },

    {
      id: 3,
      name: "Dubai Mall",
      image:
        "https://th.bing.com/th/id/OIP.pAycLmu17o7-vzjmtzFlEgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.UAE,
      rating: 4.7,
      reviews: 800,
      description: "Huge luxury shopping mall",
      location: "Dubai",
      price: "Free",
      time: "10 AM - 1 AM",
      extra: "Aquarium • Shopping",
    },

    {
      id: 4,
      name: "Palm Jumeirah",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.VOe2ZqMZpYj1gXtBGjPSxwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.UAE,
      rating: 4.6,
      reviews: 750,
      description: "Famous man-made island",
      location: "Dubai",
      price: "Free",
      time: "All day",
      extra: "Luxury hotels • Beaches",
    },

    {
      id: 5,
      name: "Desert Safari",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.cfk1U1Za3t4hIeEzfIVu2AHaFl?rs=1&pid=ImgDetMain&o=7&rm=3",
      flag: flags.UAE,
      rating: 4.5,
      reviews: 700,
      description: "Adventure desert experience",
      location: "Dubai",
      price: "$70",
      time: "3 PM - 10 PM",
      extra: "Camel ride • Sandboarding",
    },
  ],
},

    
  };

  return (
    <div className="best-picks-container">
      <h1 className="main-title">Best Picks ⭐</h1>

      {!selectedCategory && (
        <div className="countries-grid">
          {Object.keys(data).map((country) => (
            <div className="country-card" key={country}>
              <img
                className="country-main-image"
                src={countryImages[country]}
                alt={country}
              />

              <div className="overlay"></div>

              <h2>{country}</h2>

              <div className="country-card-buttons">
                <button
                  onClick={() => {
                    setSelectedCountry(country);
                    setSelectedCategory("restaurants");
                  }}
                >
                  🍽 Restaurants
                </button>

                <button
                  onClick={() => {
                    setSelectedCountry(country);
                    setSelectedCategory("cafes");
                  }}
                >
                  ☕ Cafes
                </button>

                <button
                  onClick={() => {
                    setSelectedCountry(country);
                    setSelectedCategory("tourism");
                  }}
                >
                  🗺 Tourism
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedCountry && selectedCategory && (
        <div className="category-list">
          <button
            className="back-button"
            onClick={() => {
              setSelectedCountry(null);
              setSelectedCategory(null);
            }}
          >
            ⬅ Back
          </button>

          <h2 className="category-title">
            {selectedCategory.toUpperCase()} - {selectedCountry}
          </h2>

          <div className="cards">
            {data[selectedCountry][selectedCategory].map((item) => (
              <div
                className="card"
                key={item.id}
                onClick={() =>
                  navigate("/PicksDetails", {
                    state: item,
                  })
                }
              >
                <div className="card-image-wrapper">
                  <img
                    className="main-image"
                    src={item.image}
                    alt={item.name}
                  />

                  <img
                    className="flag-image"
                    src={item.flag}
                    alt="flag"
                  />

                  <span className="category-badge">
                    {selectedCategory}
                  </span>
                </div>
                <div className="card-content">
  <div className="card-top">
    <h3>{item.name}</h3>
  </div>

  <p className="description">
    {item.description}
  </p>

  <div className="info-row">
    <span>⭐ {item.rating}</span>

    <span>{item.reviews} reviews</span>
  </div>

  <div className="info-row">
    <span>📍 {item.location}</span>

    <span>🕒 {item.time}</span>
  </div>

  {/* PRICE RANGE */}
  <div className="price-range">
    💰 Price Range: <strong>{item.price}</strong>
  </div>

  <p className="extra-info">
    {item.extra}
  </p>

  <button className="view-btn">
    View Details →
  </button>
</div>

              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BestPicksInfo;