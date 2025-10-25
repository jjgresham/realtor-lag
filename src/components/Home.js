import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import styles

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Lauren Gresham Real Estate</h1>
          <p>Reach New Heights in Homeownership.</p>
          <Link to="/pricing" className="cta-button">Book Now</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-primary">
        <h2>Section One</h2>
        <div className="service-list">
          <div className="service">
            <h3>Selling</h3>
          </div>
          <div className="service">
            <h3>Buying</h3>
          </div>
          <div className="service">
            <h3>Talking</h3>
          </div>
        </div>
      </section>

            <section className="section section-secondary">
        <h2>Section Two</h2>
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

            <section className="section section-tertiary">
        <h2>Section Three</h2>
        <div className="service-list">
          <div className="service">
            <h3>Just a whole bunch of random text!</h3>
          </div>

        </div>
      </section>

            <section className="section section-quaternary">
        <h2>Section Four</h2>
        <div className="service-list">
          <div className="service">
            <h3>Auto Detailing</h3>
          </div>
          <div className="service">
            <h3>Ceramic Coatings</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
