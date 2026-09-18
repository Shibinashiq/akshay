import { heroStats } from '../../data/content';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home" aria-label="Hero section">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge hero-animate hero-animate-1">
            <span className="hero-badge-icon">✨</span>
            Roamway Tours — Catch Your Dreams
          </div>

          <h1 className="hero-title hero-animate hero-animate-2">
            Discover the World{' '}
            <span className="hero-title-highlight">Travel Visa-Free</span>
          </h1>

          <p className="hero-description hero-animate hero-animate-3">
            Your one-stop destination for handcrafted holiday packages
            and seamless global visa services — so you spend less time
            planning and more time exploring.
          </p>

          <div className="hero-cta hero-animate hero-animate-4">
            <a href="#packages" className="btn btn-primary">
              Explore Holidays
              <span className="btn-arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-outline">
              Apply for Visa
              <span className="btn-arrow">→</span>
            </a>
          </div>

          <div className="hero-stats hero-animate hero-animate-5">
            {heroStats.map((stat, index) => (
              <div className="hero-stat" key={index}>
                <div className="hero-stat-icon">{stat.icon}</div>
                <div>
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual hero-animate-visual">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=700&fit=crop"
            alt="Traveler exploring the world"
            className="hero-image-main"
            loading="eager"
          />

          {/* Floating Cards */}
          <div className="hero-float hero-float-1">
            <div className="hero-float-card">
              <span className="hero-float-card-icon">📍</span>
              150+ Destinations
            </div>
          </div>

          <div className="hero-float hero-float-2">
            <div className="hero-float-card">
              <span className="hero-float-card-icon">🛂</span>
              Visa in 3 Days
            </div>
          </div>

          <div className="hero-float hero-float-3">
            <div className="hero-float-card">
              <span className="hero-float-card-icon">⭐</span>
              4.9 Rated
            </div>
          </div>

          {/* Dashed flight path */}
          <div className="hero-flight-path">
            <span className="hero-plane-icon">✈️</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
