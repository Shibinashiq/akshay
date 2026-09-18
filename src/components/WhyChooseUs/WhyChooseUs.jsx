import { whyChooseUs } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './WhyChooseUs.css';

function WhyChooseUs() {
  const sectionRef = useScrollReveal();

  return (
    <section className="why-choose" id="why-choose" ref={sectionRef} aria-label="Why Choose Us">
      <div className="why-choose-container">
        {/* Left Content */}
        <div className="why-choose-content reveal-left">
          <p className="section-subtitle">Why Choose Us</p>
          <h2 className="section-title">We Make Travel Easy, Safe & Unforgettable</h2>
          <p className="why-choose-text">
            With over 12 years of expertise, we've perfected the art of creating
            seamless travel experiences. From visa processing to luxury accommodations,
            every detail is handled with care.
          </p>

          <div className="why-choose-features">
            {whyChooseUs.map((feature, index) => (
              <div
                key={index}
                className={`why-choose-feature reveal reveal-delay-${index + 1}`}
              >
                <div className="why-choose-feature-icon">{feature.icon}</div>
                <h4 className="why-choose-feature-title">{feature.title}</h4>
                <p className="why-choose-feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="why-choose-visual reveal-right reveal-delay-2">
          <div className="why-choose-accent"></div>
          <div className="why-choose-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=500&fit=crop"
              alt="Happy travelers exploring a beautiful destination"
              loading="lazy"
            />
          </div>
          <div className="why-choose-float-stat">
            <div className="why-choose-float-stat-icon">🏆</div>
            <div>
              <div className="why-choose-float-stat-value">12+ Years</div>
              <div className="why-choose-float-stat-label">of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
