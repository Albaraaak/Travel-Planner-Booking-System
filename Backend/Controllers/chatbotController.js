const { GoogleGenAI } = require("@google/genai");
const Product = require("../models/Product");
const Ticket = require("../models/Ticket");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const askChatbot = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const products = await Product.find().lean();
    const tickets = await Ticket.find().lean();

    const productsText = products.length
      ? products
          .map(
            (p, index) => `
Package ${index + 1}:
Title: ${p.title}
Destination: ${p.destination}
Price: $${p.price}
Duration: ${p.duration || "N/A"}
Rating: ${p.rating || "N/A"}
Available: ${p.available ? "Yes" : "No"}
`
          )
          .join("\n")
      : "No packages currently available.";

    const ticketsText = tickets.length
      ? tickets
          .map(
            (t, index) => `
Ticket ${index + 1}:
From: ${t.from}
To: ${t.to}
Price: $${t.price}
Available Seats: ${t.availableSeats}
Class: ${t.type}
Travel Type: ${t.travelType}
Departure Date: ${t.departureDate}
Return Date: ${t.returnDate || "N/A"}
`
          )
          .join("\n")
      : "No tickets currently available.";

    const prompt = `
You are LET'S GO Assistant, the official chatbot for a travel booking website.

Your job:
1. Answer questions about packages and tickets using the database data below.
2. If the user asks about a country, city, hotel, tourist place, airport, travel advice, weather-style travel tips, or general destination information, answer using your general travel knowledge.
3. If the user asks if LET'S GO has a specific package or ticket, check the database data first.
4. If it is not found in the database, clearly say that LET'S GO does not currently have it, then still provide helpful general travel information.
5. Be friendly, short, clear, and helpful.
6. Do not invent packages or tickets as if they exist in the database.
7. Mention prices only if they exist in the database.
8. If user asks how to book, tell them: open the package or ticket, press Book Now, choose payment method, confirm booking, then view it in Profile.

Available LET'S GO packages:
${productsText}

Available LET'S GO tickets:
${ticketsText}

User question:
${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const reply =
      response.text ||
      "Sorry, I could not generate an answer right now. Please try again.";

    res.status(200).json({
      success: true,
      reply,
    });
  } catch (error) {
    console.log("GEMINI CHATBOT ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Chatbot failed",
      error: error.message,
    });
  }
};

module.exports = {
  askChatbot,
};