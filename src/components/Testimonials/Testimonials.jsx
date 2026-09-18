import { useState, useEffect, useRef, useCallback } from 'react';
import { testimonials } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.css';

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useScrollReveal();
  const intervalRef = useRef(null);

  // Create slides of 3 testimonials each
  const slidesCount = Math.ceil(testimonials.length / 3);
  const slides = Array.from({ length: slidesCount }, (_, i) =>
    testimonials.slice(i * 3, i * 3 + 3)
  );

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-slide
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalRef.current);
  }, [nextSlide]);

  // Pause on hover
  const handleMouseEnter = () => clearInterval(intervalRef.current);
  const handleMouseLeave = () => {
    intervalRef.current = setInterval(nextSlide, 5000);
  };

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

      <div
        className="testimonials-carousel reveal-scale reveal-delay-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="testimonials-track-wrapper">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slideGroup, slideIndex) => (
              <div className="testimonial-slide" key={slideIndex}>
                {slideGroup.map((testimonial) => (
                  <div className="testimonial-card" key={testimonial.id}>
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
            ))}
          </div>
        </div>

        <div className="testimonials-nav">
          <button
            className="testimonials-btn"
            onClick={prevSlide}
            aria-label="Previous testimonials"
          >
            ←
          </button>
          <div className="testimonials-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`testimonials-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            className="testimonials-btn"
            onClick={nextSlide}
            aria-label="Next testimonials"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
