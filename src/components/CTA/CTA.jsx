import { useScrollReveal } from '../../hooks/useScrollReveal';
import './CTA.css';

function CTA() {
  const sectionRef = useScrollReveal(0.2);

  return (
    <section className="cta-banner" ref={sectionRef} aria-label="Call to action">
      {/* Decorative Elements */}
      <span className="cta-banner-decor cta-banner-decor-1">✈️</span>
      <span className="cta-banner-decor cta-banner-decor-2">🌍</span>

      <div className="cta-banner-container">
        {/* Premium 3D Hologram Scene */}
        <div className="cta-premium-3d-scene reveal-scale">
          <div className="cta-3d-ring"></div>
          <div className="cta-3d-ring-2"></div>
          <div className="cta-3d-flight-wrapper">
            <span className="premium-flight">✈️</span>
          </div>
        </div>
        <h2 className="cta-banner-title reveal reveal-delay-1">
          Ready for Your Next <span>Adventure?</span>
        </h2>
        <p className="cta-banner-description reveal reveal-delay-2">
          Let us craft the perfect journey for you. From planning to landing,
          we handle everything — so you can focus on making memories that last a lifetime.
        </p>
        <div className="cta-banner-actions reveal reveal-delay-3">
          <a href="#contact" className="btn btn-primary">
            Start Planning Today
            <span className="btn-arrow">→</span>
          </a>
          <a href="tel:+15551234567" className="btn btn-white">
            📞 Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
