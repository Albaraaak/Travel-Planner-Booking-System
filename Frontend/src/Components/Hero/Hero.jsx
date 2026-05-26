import "./Hero.css";

function Hero() {
  return (
    <div className="home">
      <h1 className="title">Explore the World 🌍</h1>

      <div className="image-grid">
        {[
          ["https://cdn.pixabay.com/photo/2015/10/01/16/30/globe-967305_640.jpg", "Explore The World"],
          ["https://soyacincau.com/wp-content/uploads/2022/07/220721-malaysia-airlines-737-800-NG-economy-01-1024x734.jpg", "Luxury Flights"],
          ["https://img.freepik.com/premium-photo/miniature-aircraft-cruising-colorful-world-map-depicting-travel-international-relations_95891-24910.jpg", "Global Adventures"],
          ["https://cdn.pixabay.com/photo/2018/02/03/16/12/passport-3127934_1280.jpg", "Visa & Passport"],
          ["https://cdn.sriggle.tech/kantents/production/1/1345/06/ce100e07-fc5b-485e-8cd3-45f74d02f45f.png", "Smart Booking"],
          ["https://www.israk.my/wp-content/uploads/a-modern-meeting-room-booking-system-displayed-on-a-tablet-for-easy-room-reservations-002.webp", "Easy Reservations"],
          ["https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8d336594987973.5ee2b83d8bfa7.png", "Airport Security"],
          ["https://img.freepik.com/premium-photo/airport-terminal-interior_780608-3807.jpg", "Premium Lounges"],
          ["https://images.stockcake.com/public/a/6/0/a6020e26-32d2-46b7-a913-c6c8bb7bab4d_large/airport-morning-hustle-stockcake.jpg", "Worldwide Destinations"],
        ].map(([img, title], index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt={title} />
            <div className="gallery-overlay">
              <h3>{title}</h3>
            </div>
          </div>
        ))}
      </div>

      <section className="cinematic-section">
        <div className="cinematic-content">
          <span>LET'S GO EXPERIENCE</span>
          <h2>Travel feels better when everything is planned perfectly.</h2>
          <p>
            From flights and packages to booking receipts and secure payments,
            LET'S GO gives travelers a smooth and trusted experience from start
            to finish.
          </p>
        </div>
      </section>
            <section className="trailer-section">
  <div className="trailer-text">
    <span>TRAVEL TRAILER</span>
    <h2>Feel the journey before you book.</h2>
    <p>
      Watch a short travel preview and get inspired for your next adventure.
    </p>
  </div>

  <div className="trailer-video">
    <iframe
      src="https://www.youtube.com/embed/Scxs7L0vhZ4"
      title="Travel Trailer"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>
      <section className="why-us">
        <div className="why-us-content">
          <span className="section-label">WHY CHOOSE US</span>
          <h2>Designed for easy, safe, and comfortable travel.</h2>
          <p>
            We help users discover destinations, book packages, save favorites,
            manage their profile, and export professional booking receipts.
          </p>

          <ul>
            <li>Trusted by 1,000+ Travelers</li>
            <li>100% Secure Booking</li>
            <li>24/7 Support</li>
            <li>Best Price Guarantee</li>
            <li>Instant Confirmation</li>
            <li>Luxury & Comfort</li>
          </ul>
        </div>

        <div className="why-us-image">
          <img
            src="https://img.freepik.com/premium-photo/plane-flying-planet-earth-with-planet-background_779834-1380.jpg?w=2000"
            alt="Earth"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;