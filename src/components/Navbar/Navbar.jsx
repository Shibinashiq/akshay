import { useState, useEffect } from 'react';
import { navLinks } from '../../data/content';
import logoImg from '../../assets/logo.jpeg';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLinkClick = (label, href) => {
    setActiveLink(label);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#home" className="navbar-logo" aria-label="Roamway Tours - Catch Your Dreams">
          <img src={logoImg} alt="Roamway Tours Logo" className="navbar-logo-img" />
        </a>

        {/* Desktop Links */}
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

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <a href="https://wa.me/15551234567" className="navbar-whatsapp" aria-label="WhatsApp Us">
            <span className="navbar-whatsapp-icon">💬</span>
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`navbar-mobile-btn ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Fullscreen Animated Mobile Menu */}
      <div className={`navbar-mobile-fullscreen ${mobileOpen ? 'active' : ''}`} role="dialog" aria-label="Mobile navigation menu">
        
        {/* Travel Animations */}
        <div className="mobile-bg-animations">
          <div className="cloud cloud-1">☁️</div>
          <div className="cloud cloud-2">☁️</div>
          <div className="cloud cloud-3">☁️</div>
          <div className="flying-plane">✈️</div>
        </div>

        <div className="navbar-mobile-fullscreen-inner">
          <div className="navbar-mobile-fullscreen-links">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`navbar-mobile-fullscreen-link ${activeLink === link.label ? 'active' : ''}`}
                style={{ '--delay': `${0.2 + (index * 0.1)}s` }}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.label, link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="navbar-mobile-fullscreen-actions">
            <a href="https://wa.me/15551234567" className="navbar-whatsapp" onClick={() => setMobileOpen(false)}>
              <span className="navbar-whatsapp-icon">💬</span>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
