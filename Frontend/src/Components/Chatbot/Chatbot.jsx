import { useEffect, useState } from "react";
import axios from "axios";
import "./Chatbot.css";

function Chatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 Ask me about packages, tickets, destinations, prices, or bookings ✈️",
    },
  ]);

  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => setProducts(res.data.data || []))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3000/api/tickets")
      .then((res) => setTickets(res.data.data || []))
      .catch((err) => console.log(err));
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const token = localStorage.getItem("token");

    axios
      .post(
        "http://localhost:3000/api/support/send",
        {
          message: input,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("MESSAGE SAVED ✅", res.data);
      })
      .catch((err) => {
        console.log("SAVE ERROR ❌", err.response?.data || err.message);
      });

    const text = input.toLowerCase();

    let botReply =
      "I can help you with packages, tickets, prices, seats, destinations, payment methods, bookings, favorites, and profile support ✈️";

    const matchingPackages = products.filter(
      (p) =>
        p.title?.toLowerCase().includes(text) ||
        p.destination?.toLowerCase().includes(text)
    );

    const matchingTickets = tickets.filter(
      (t) =>
        t.to?.toLowerCase().includes(text) ||
        t.from?.toLowerCase().includes(text)
    );

    if (matchingPackages.length > 0 || matchingTickets.length > 0) {
      botReply = `I found these options for "${input}":\n\n`;

      if (matchingPackages.length > 0) {
        botReply += `📦 Packages:\n`;

        matchingPackages.forEach((p, index) => {
          botReply += `
${index + 1}. ${p.title}
🌍 Destination: ${p.destination}
💰 Price: $${p.price}
🕒 Duration: ${p.duration || "N/A"}
⭐ Rating: ${p.rating || "N/A"}

`;
        });
      }

      if (matchingTickets.length > 0) {
        botReply += `✈️ Tickets:\n`;

        matchingTickets.forEach((t, index) => {
          botReply += `
${index + 1}. ${t.from} → ${t.to}
💰 Price: $${t.price}
🪑 Seats: ${t.availableSeats}
🎟️ Class: ${t.type}
🔁 Type: ${t.travelType}
📅 Departure: ${t.departureDate}
${t.returnDate ? `📅 Return: ${t.returnDate}` : ""}

`;
        });
      }

      botReply += `You can open the related page to complete your booking ✅`;
    }

    if (text.includes("packages") || text.includes("package")) {
      if (products.length > 0) {
        botReply = `Here are some available packages:\n\n`;

        products.slice(0, 5).forEach((p, index) => {
          botReply += `
${index + 1}. ${p.title}
🌍 ${p.destination}
💰 $${p.price}
🕒 ${p.duration || "N/A"}

`;
        });

        botReply += `Go to Packages page to view all packages.`;
      } else {
        botReply = "No packages are available now.";
      }
    }

    if (text.includes("tickets") || text.includes("ticket")) {
      if (tickets.length > 0) {
        botReply = `Here are some available tickets:\n\n`;

        tickets.slice(0, 5).forEach((t, index) => {
          botReply += `
${index + 1}. ${t.from} → ${t.to}
💰 $${t.price}
🪑 Seats: ${t.availableSeats}
🎟️ ${t.type}

`;
        });

        botReply += `Go to Destinations page to view and book tickets.`;
      } else {
        botReply = "No tickets are available now.";
      }
    }

    if (text.includes("cheap") || text.includes("lowest")) {
      const cheapestPackage = [...products].sort(
        (a, b) => a.price - b.price
      )[0];

      const cheapestTicket = [...tickets].sort(
        (a, b) => a.price - b.price
      )[0];

      botReply = "Here are the cheapest options I found:\n\n";

      if (cheapestPackage) {
        botReply += `📦 Cheapest Package:
${cheapestPackage.title}
🌍 ${cheapestPackage.destination}
💰 $${cheapestPackage.price}

`;
      }

      if (cheapestTicket) {
        botReply += `✈️ Cheapest Ticket:
${cheapestTicket.from} → ${cheapestTicket.to}
💰 $${cheapestTicket.price}
🪑 Seats: ${cheapestTicket.availableSeats}
`;
      }
    }

    if (text.includes("payment")) {
      botReply =
        "You can pay using Whish Money, Western Union, or by visiting our office. Payment is selected in the Checkout page 💳";
    }

    if (text.includes("booking") || text.includes("book")) {
      botReply =
        "To book, open a package or ticket, press Book Now, choose payment method, then confirm. Your booking will appear in Profile with PDF export 📄";
    }

    if (text.includes("favorite") || text.includes("favourite")) {
      botReply =
        "Press the heart ❤️ on any package to save it. You can view saved packages in the Favorites page.";
    }

    if (text.includes("profile")) {
      botReply =
        "In Profile, you can view your information, bookings, favorites, change password, and export booking PDFs 👤";
    }

    setMessages([
      ...messages,
      userMessage,
      {
        sender: "bot",
        text: botReply,
      },
    ]);

    setInput("");
  };

  const getSupportInbox = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.get(
      "http://localhost:3000/api/support/my-inbox",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const inbox = res.data.data || [];

    if (inbox.length === 0) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "You have no support messages yet.",
        },
      ]);
      return;
    }

    const formattedInbox = inbox
      .map((item, index) => {
        const sentDate = new Date(item.createdAt).toLocaleString();
        const replyDate = item.updatedAt
          ? new Date(item.updatedAt).toLocaleString()
          : "No reply yet";

        return `
Support Request #${index + 1}

Your Message:
${item.message}

Admin Reply:
${item.reply || "No reply yet"}

Sent At:
${sentDate}

Reply At:
${item.reply ? replyDate : "No reply yet"}
`;
      })
      .join("\n-------------------------\n");

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: formattedInbox,
      },
    ]);
  } catch (err) {
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: "Please login first to view your support inbox.",
      },
    ]);
  }
};
  return (
    <>
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        🤖
      </button>

      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span>🤖 LET'S GO Assistant</span>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button className="support-inbox-btn" onClick={getSupportInbox}>
                Support Inbox
              </button>

              <button
                className="expand-btn"
                onClick={() =>
                  document
                    .querySelector(".chatbot-box")
                    .classList.toggle("expanded")
                }
              >
                ⛶
              </button>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "user" ? "user-message" : "bot-message"
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about tickets, packages..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;