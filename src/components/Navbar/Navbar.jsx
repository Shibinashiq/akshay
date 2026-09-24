import { useState, useEffect } from 'react';
import { navLinks } from '../../data/content';
import logoImg from '../../assets/logo.jpeg';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (label, href) => {
    setActiveLink(label);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/918075571005?text=Hi%20Roamway%20Tours%2C%20I%20would%20like%20to%20inquire%20about%20holiday%20packages%20and%20visa%20services.";

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#home" className="navbar-logo" aria-label="Roamway Tours - Catch Your Dreams">
          <img src={logoImg} alt="Roamway Tours Logo" className="navbar-logo-img" />
        </a>

        {/* Desktop Nav Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar-link ${activeLink === link.label ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.label, link.href);
              }}
            >
              {link.label}
              {link.hasDropdown && <span className="navbar-link-chevron">▼</span>}
              {link.badge && <span className="navbar-link-badge">{link.badge}</span>}
            </a>
          ))}
        </div>

        {/* Direct WhatsApp Contact Action (Visible on Mobile & Desktop) */}
        <div className="navbar-actions">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="navbar-whatsapp" 
            aria-label="Contact us on WhatsApp 8075571005"
          >
            <span className="navbar-whatsapp-icon">💬</span>
            <span className="navbar-whatsapp-text">WhatsApp Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
