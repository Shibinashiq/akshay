import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Destinations from './components/Destinations/Destinations';
import Packages from './components/Packages/Packages';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Global 3D Floating Background Layer */}
      <div className="global-3d-background">
        <div className="bg-3d-element bg-3d-plane">✈️</div>
        <div className="bg-3d-element bg-3d-globe">🌍</div>
        <div className="bg-3d-element bg-3d-balloon">🎈</div>
        <div className="bg-3d-element bg-3d-cloud-1">☁️</div>
        <div className="bg-3d-element bg-3d-cloud-2">☁️</div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Packages />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

export default App;
