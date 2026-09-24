import { destinations } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Destinations.css';

function Destinations() {
  const sectionRef = useScrollReveal();

  return (
    <section className="destinations" id="destinations" ref={sectionRef} aria-label="Popular Destinations">
      <div className="destinations-header reveal">
        <p className="section-subtitle">Popular Destinations</p>
        <h2 className="section-title">Explore Dream Destinations</h2>
        <p className="section-description">
          From tropical beaches to vibrant cities, discover handpicked destinations
          that promise unforgettable experiences and memories.
        </p>
      </div>

      {/* Mobile Swipe Hint Badge */}
      <div className="mobile-swipe-hint">
        <span>👈 Swipe to Explore Destinations 👉</span>
      </div>

      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <article
            key={dest.id}
            className={`destination-card reveal-scale reveal-delay-${(index % 3) + 1}`}
          >
            <div className="destination-card-image">
              <img src={dest.image} alt={`${dest.name}, ${dest.country}`} loading="lazy" />
              <span className="destination-card-duration">🕐 {dest.duration}</span>
              <span className="destination-card-rating">⭐ {dest.rating}</span>
            </div>
            <div className="destination-card-content">
              <p className="destination-card-location">{dest.country}</p>
              <h3 className="destination-card-name">{dest.name}</h3>
              <p className="destination-card-desc">{dest.description}</p>
              <div className="destination-card-footer">
                <span className="destination-card-price">{dest.price}</span>
                <a href="#contact" className="destination-card-btn">
                  Explore →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
