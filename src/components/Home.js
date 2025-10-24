import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import styles

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Slammed Detailing</h1>
          <p>Bringing out the best in your ride, one detail at a time.</p>
          <Link to="/pricing" className="cta-button">Book Now</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service">
            <h3>Auto Detailing</h3>
          </div>
          <div className="service">
            <h3>Ceramic Coatings</h3>
          </div>
          <div className="service">
            <h3>Paint Correction</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
