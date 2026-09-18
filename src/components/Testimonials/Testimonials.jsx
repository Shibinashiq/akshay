import { testimonials } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.css';

function Testimonials() {
  const sectionRef = useScrollReveal();

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`testimonial-star ${i < rating ? '' : 'empty'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef} aria-label="Customer Testimonials">
      <div className="testimonials-header reveal">
        <p className="section-subtitle">Testimonials</p>
        <h2 className="section-title">What Our Travellers Say</h2>
        <p className="section-description">
          Real stories from real travelers who trusted us to make their
          dream vacations come true.
        </p>
      </div>

      {/* Premium Infinite Marquee Pattern */}
      <div className="testimonials-marquee-container reveal-scale reveal-delay-2">
        <div className="testimonials-marquee-track">
          {/* Duplicate the array to create a seamless infinite scrolling effect */}
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div className="testimonial-card" key={`${testimonial.id}-${index}`}>
              <div className="testimonial-stars">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                  loading="lazy"
                />
                <div>
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-location">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
