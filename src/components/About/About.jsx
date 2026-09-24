import { aboutStats } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import globalVisaPkgImg from '../../assets/globalvisaandpackage.png';
import './About.css';

function About() {
  const sectionRef = useScrollReveal();

  return (
    <section className="about" id="about" ref={sectionRef} aria-label="About Us">
      <div className="about-container">
        {/* Image Collage */}
        <div className="about-visual reveal-left">
          <div className="about-visual-accent"></div>
          <div className="about-image about-image-featured">
            <img
              src={globalVisaPkgImg}
              alt="Global Visa and Package - Roamway Tours"
              loading="lazy"
            />
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
              alt="Mountain lake landscape"
              loading="lazy"
            />
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=300&fit=crop"
              alt="Scenic boat on water"
              loading="lazy"
            />
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=350&fit=crop"
              alt="Tropical beach"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="about-content reveal-right">
          <p className="section-subtitle">About Us</p>
          <h2 className="section-title">Your Trusted Global Visa & Package Partner</h2>
          <p className="about-text">
            Founded with a passion for exploration, Roamway Tours has grown from a small
            travel consultancy to one of the most trusted names in global visa processing and holiday packages. We
            believe that travel is not just about destinations — it's about the seamless experiences,
            connections, and memories you create along the way. Catch your dreams with us.
          </p>
          <p className="about-text">
            Our dedicated team of travel experts works tirelessly to craft personalized
            itineraries and fast 3-day visa processing that match your dreams, budget, and travel style. From visa
            documentation to luxury accommodations, we handle every detail so you can
            focus on what matters — enjoying the journey.
          </p>

          <div className="about-stats">
            {aboutStats.map((stat, index) => (
              <div key={index} className={`about-stat reveal-scale reveal-delay-${index + 1}`}>
                <div className="about-stat-value">{stat.value}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <a href="https://wa.me/918075571005" target="_blank" rel="noopener noreferrer" className="btn btn-primary reveal reveal-delay-5">
            Get Visa & Package Details →
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
