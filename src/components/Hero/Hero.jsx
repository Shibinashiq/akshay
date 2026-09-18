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
                <div 
                  className="hero-stat-icon" 
                  dangerouslySetInnerHTML={{ __html: stat.icon }} 
                />
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
              <span className="hero-float-card-icon" dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>' }} />
              150+ Destinations
            </div>
          </div>

          <div className="hero-float hero-float-2">
            <div className="hero-float-card">
              <span className="hero-float-card-icon" dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M10 6h4"/><circle cx="12" cy="12" r="2"/><path d="M8 18h8"/></svg>' }} />
              Visa in 3 Days
            </div>
          </div>

          <div className="hero-float hero-float-3">
            <div className="hero-float-card">
              <span className="hero-float-card-icon" dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' }} />
              4.9 Rated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
