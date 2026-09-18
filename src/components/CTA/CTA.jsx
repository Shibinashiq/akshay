import { useScrollReveal } from '../../hooks/useScrollReveal';
import './CTA.css';

function CTA() {
  const sectionRef = useScrollReveal(0.2);

  return (
    <section className="cta-banner" ref={sectionRef} id="contact" aria-label="Call to action">
      <div className="cta-banner-container">
        <span className="cta-subtitle reveal">START YOUR JOURNEY TODAY</span>
        <h2 className="cta-banner-title reveal reveal-delay-1">
          Ready for Your Next <span>Adventure?</span>
        </h2>
        <p className="cta-banner-description reveal reveal-delay-2">
          Let us craft the perfect journey for you. From planning to landing,
          we handle everything — so you can focus on making memories that last a lifetime.
        </p>
        <div className="cta-banner-actions reveal reveal-delay-3">
          <a href="#packages" className="btn btn-primary">
            Start Planning Today
            <span className="btn-arrow">→</span>
          </a>
          <a href="tel:+15551234567" className="btn btn-white">
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
