import { useState } from "react";
import "./faq.css";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a ticket?",
      answer:
        "Choose your destination, select a ticket, and complete the booking process securely through checkout. Also you can enter packages page and see what package is available and you like it",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes, you can contact support or manage your booking from your profile page.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We currently support  online payment services like WHISH/OMT, and office payment methods.",
    },
    {
      question: "How do I receive my ticket?",
      answer:
        "After successful booking, your ticket will appear in your profile and can be downloaded as a PDF.",
    },
    {
      question: "Can I book round-trip tickets?",
      answer:
        "Yes, both one-way and round-trip tickets are available depending on the selected destination.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact our support team through the Contact page available in the navigation bar.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>
          Find answers to the most common questions about bookings, payments,
          tickets, and support.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{item.question}</h3>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;