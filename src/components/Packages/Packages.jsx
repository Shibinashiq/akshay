import { useState } from 'react';
import { packages } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Packages.css';

function Packages() {
  const sectionRef = useScrollReveal();
  const [filter, setFilter] = useState('all');

  const filteredPackages = filter === 'popular' 
    ? packages.filter(p => p.popular) 
    : packages;

  return (
    <section className="packages" id="packages" ref={sectionRef} aria-label="Travel Packages">
      <div className="packages-header reveal">
        <p className="section-subtitle">Travel Packages</p>
        <h2 className="section-title">Choose Your Perfect Getaway</h2>
        <p className="section-description">
          Whether you're looking for budget-friendly adventures or luxurious escapes,
          we have the perfect package tailored just for you.
        </p>
      </div>

      {/* Modern Mobile Filter Tabs */}
      <div className="packages-mobile-tabs">
        <button 
          className={`package-tab-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          ✨ All Holiday Deals
        </button>
        <button 
          className={`package-tab-btn ${filter === 'popular' ? 'active' : ''}`}
          onClick={() => setFilter('popular')}
        >
          🔥 Most Popular
        </button>
      </div>

      <div className="packages-grid">
        {filteredPackages.map((pkg, index) => (
          <article
            key={pkg.id}
            className={`package-card ${pkg.popular ? 'popular' : ''} reveal reveal-delay-${index + 1}`}
          >
            {pkg.popular && <span className="package-popular-badge">Most Popular</span>}

            <div className="package-card-image">
              <img src={pkg.image} alt={pkg.title} loading="lazy" />
              <span className="package-card-tier">{pkg.tier}</span>
            </div>

            <div className="package-card-content">
              <h3 className="package-card-title">{pkg.title}</h3>

              <div className="package-card-meta">
                <span className="package-card-meta-item">
                  <span className="package-card-meta-icon">📍</span>
                  {pkg.destination}
                </span>
                <span className="package-card-meta-item">
                  <span className="package-card-meta-icon">🕐</span>
                  {pkg.duration}
                </span>
              </div>

              <div className="package-card-highlights">
                {pkg.highlights.map((highlight, i) => (
                  <div className="package-card-highlight" key={i}>
                    <span className="package-card-highlight-icon">✓</span>
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="package-card-footer">
                <div className="package-card-price">
                  <span className="package-card-price-label">Starting from</span>
                  <span className="package-card-price-value">{pkg.price}</span>
                </div>
                <a href="#contact" className="package-card-btn">
                  Book Now →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Packages;
