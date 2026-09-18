import { footerLinks } from '../../data/content';
import logoImg from '../../assets/logo.jpeg';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact" role="contentinfo">
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logoImg} alt="Roamway Tours Logo" className="footer-logo-img" />
          </div>
          <p className="footer-brand-desc">
            Your trusted travel partner for handcrafted holiday packages
            and seamless global visa services. Catch your dreams with Roamway Tours.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social" aria-label="Facebook">📘</a>
            <a href="#" className="footer-social" aria-label="Instagram">📷</a>
            <a href="#" className="footer-social" aria-label="Twitter">🐦</a>
            <a href="#" className="footer-social" aria-label="YouTube">▶️</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4 className="footer-column-title">Quick Links</h4>
          <div className="footer-links">
            {footerLinks.quickLinks.map((link, index) => (
              <a href={link.href} className="footer-link" key={index}>
                <span className="footer-link-arrow">→</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Destinations */}
        <div className="footer-column">
          <h4 className="footer-column-title">Destinations</h4>
          <div className="footer-links">
            {footerLinks.destinations.map((link, index) => (
              <a href={link.href} className="footer-link" key={index}>
                <span className="footer-link-arrow">→</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4 className="footer-column-title">Get in Touch</h4>

          <div className="footer-contact-item">
            <div className="footer-contact-icon">📍</div>
            <div>
              <div className="footer-contact-label">Address</div>
              <div className="footer-contact-text">{footerLinks.contact.address}</div>
            </div>
          </div>

          <div className="footer-contact-item">
            <div className="footer-contact-icon">📞</div>
            <div>
              <div className="footer-contact-label">Phone</div>
              <div className="footer-contact-text">{footerLinks.contact.phone}</div>
            </div>
          </div>

          <div className="footer-contact-item">
            <div className="footer-contact-icon">✉️</div>
            <div>
              <div className="footer-contact-label">Email</div>
              <div className="footer-contact-text">{footerLinks.contact.email}</div>
            </div>
          </div>

          <div className="footer-contact-item">
            <div className="footer-contact-icon">🕐</div>
            <div>
              <div className="footer-contact-label">Hours</div>
              <div className="footer-contact-text">{footerLinks.contact.hours}</div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <div className="footer-contact-label" style={{ marginBottom: '10px' }}>Newsletter</div>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="footer-newsletter-input"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="footer-newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            © {currentYear} <a href="#home">Roamway Tours</a>. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
