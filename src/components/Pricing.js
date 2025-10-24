import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <h1>Services & Pricing</h1>
      </section>

      <section className="pricing-intro">
        <h2>Our Detailing Packages</h2>
        <p>Choose from our range of detailing services to keep your vehicle looking brand new.</p>
      </section>

      <section className="pricing-table">
        <div className="pricing-card">
          <h3>Exterior Detail</h3>
          <p className="price">From $155</p>
          <ul>
            <li>Hand Wash & Foam Bath</li>
            <li>Bug & Tar Removal</li>
            <li>Wheels & Tires Cleaned</li>
            <li>Protective Wax or Sealant</li>
            <li>Iron/Rust Particle Removal</li>
            <li>Clay Bar</li>
            <li>Streak Free Glass</li>
            <li>Polish & Scratch Removal</li>
            <li>Ceramic Coating Paint Protection</li>
            <li>Engine Detail</li>
            <li>Headlight Restoration</li>
          </ul>
        </div>

        <div className="pricing-card highlight">
          <h3>Full Interior & Exterior Detail</h3>
          <p className="price">From $295</p>
          <p>ALL Interior & Exterior Features Plus:</p>
          <ul>
            <li>Wax & Paint Sealant</li>
            <li>Deep Interior Cleaning</li>
            <li>Satisfaction Guranteed!</li>
          </ul>
        </div>

        <div className="pricing-card">
          <h3>Interior Detail</h3>
          <p className="price">From $195</p>
          <ul>
            <li>Detailed Vacuum & Wipe Down</li>
            <li>Trash Removal</li>
            <li>Carpet & Upholstery Shampoo</li>
            <li>Hot Water Extraction</li>
            <li>Steam Cleaning</li>
            <li>Odor Removal/Ozone Treatment</li>
            <li>Leather Conditioning</li>
            <li>Door Jamb Cleaning</li>
            <li>Stain Removal</li>
          </ul>
        </div>
      </section>

      <section className="cta-section">
        <p>Not sure which package is right for you? Contact us for a personalized recommendation!</p>
        <a href="/contact" className="cta-button">Get a Quote</a>
      </section>
    </div>
  );
}

export default Pricing;
