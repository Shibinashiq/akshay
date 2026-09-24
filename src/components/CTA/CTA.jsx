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
          <a 
            href="https://wa.me/918075571005?text=Hi%20Roamway%20Tours%2C%20I%20want%20to%20plan%20my%20next%20adventure." 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            💬 WhatsApp Us Now
            <span className="btn-arrow">→</span>
          </a>
          <a href="tel:+918075571005" className="btn btn-white">
            📞 Call +91 8075571005
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
