import './Footer.css';
 function Footer() {
  return (
     <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info-block">
            <h2 className="contact-heading">Contact Us</h2>

            <ul className="contact-details">
              <li>
                <span className="contact-icon">📍</span>
                Lebanon, Bekaa , Masnaa Road
              </li>

              <li>
                <span className="contact-icon">📞</span>
                +961 76 410 829
              </li>

              <li>
                <span className="contact-icon">✉️</span>
                baraaabk1234@gmail.com
              </li>
            </ul>

            <div className="social-icons">
              <a href="#" className="social-icon">🌐</a>
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">📷</a>
            </div>
          </div>

          <div className="contact-info-block">
            <h2 className="contact-heading">Working Hours</h2>

            <ul className="contact-details">
              <li>Monday - Friday: 9AM - 6PM</li>
              <li>Saturday: 10AM - 4PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

        

    
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Let's GO</h3>
            <p className="footer-description"><b>
            Your trusted partner for unforgettable travel experiences around the world. Book with confidence and create memories that last a lifetime.
            </b></p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/help">Help Center</a></li>
            </ul>
          </div>
          </div>
        
        
        <div className="footer-bottom">
          <p>&copy;{new Date().getFullYear()} <b>Let's GO . All rights reserved.</b></p>
          <p>Designed with ❤️ for travelers</p>
        </div> 
      </div>
      
    </footer>
       </div>
      </section>

  );
}
export default Footer;