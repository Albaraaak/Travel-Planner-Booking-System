import { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

function Chatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I am LET'S GO Assistant. Ask me about packages, tickets, countries, cities, hotels, prices, or bookings ✈️",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/chatbot", {
        message: input,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: res.data.reply || "Sorry, I could not answer that.",
        },
      ]);
    } catch (error) {
      console.log("CHATBOT ERROR:", error.response?.data || error.message);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, the chatbot is not working right now. Please check the backend server or Gemini API key.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getSupportInbox = async () => {
    const token = sessionStorage.getItem("token") || localStorage.getItem("token");

    try {
      const res = await axios.get("http://localhost:3000/api/support/my-inbox", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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

            {loading && (
              <div className="bot-message">
                Thinking...
              </div>
            )}
          </div>

          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about countries, hotels, tickets, packages..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button onClick={sendMessage} disabled={loading}>
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;