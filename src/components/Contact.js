import React, { useEffect } from 'react';
import './Contact.css';

function Contact() {
  useEffect(() => {
    // Attach the map initialization to the global window object
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.5500, lng: -111.8900 },
        zoom: 9,
      });

      const cities = [
        { name: "Cedar Fort", lat: 40.3336, lng: -112.1060 },
        { name: "Eagle Mountain", lat: 40.2960, lng: -112.0230 },
        { name: "Saratoga Springs", lat: 40.3720, lng: -111.8585 },
        { name: "Lehi", lat: 40.4122, lng: -111.8508 },
        { name: "American Fork", lat: 40.3809, lng: -111.8134 },
        { name: "Highland", lat: 40.4193, lng: -111.7888 },
        { name: "Alpine", lat: 40.5226, lng: -111.7889 },
        { name: "Draper", lat: 40.5240, lng: -111.8630 },
        { name: "Bluffdale", lat: 40.5206, lng: -111.9968 },
        { name: "Herriman", lat: 40.5240, lng: -112.0310 },
        { name: "Riverton", lat: 40.5204, lng: -111.9391 },
        { name: "South Jordan", lat: 40.5663, lng: -111.8900 },
        { name: "Sandy", lat: 40.5720, lng: -111.8901 },
        { name: "West Jordan", lat: 40.6097, lng: -112.0010 },
        { name: "Midvale", lat: 40.6024, lng: -111.8909 },
        { name: "Cottonwood Heights", lat: 40.6071, lng: -111.8271 },
        { name: "Murray", lat: 40.6643, lng: -111.8910 },
        { name: "Taylorsville", lat: 40.6335, lng: -111.9440 },
        { name: "Holladay", lat: 40.6410, lng: -111.8271 },
      ];

      cities.forEach((city) => {
        new window.google.maps.Marker({
          position: { lat: city.lat, lng: city.lng },
          map: map,
          title: city.name,
        });
      });
    };

    // Load Google Maps script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
      </section>

      <section className="contact-info">
        <h2>Get In Touch</h2>
        <p>Have questions or want to schedule an appointment? Reach out to us!</p>

        <div className="contact-details">
          <div className="contact-item">
            <h3>Phone</h3>
            <p><a href="tel:+12088315748">(208) 831-5748</a></p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p><a href="mailto:801slammed-detailing@gmail.com">801slammed-detailing@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <h3>Hours</h3>
            <p>Monday - Friday 8am to 5pm</p>
            <p>Call or Text Booking Available Anytime!</p>
          </div>
        </div>
      </section>

  {/* Service Area Map */}
  <section className="service-area">
        <h2>Our Service Area</h2>
        <p>We proudly serve the following cities in Utah. Check the map below to see if you're within our reach!</p>
        <div id="map" style={{ height: '400px', width: '100%' }}></div>
        
        {/* List of cities */}
        <ul className="city-list">
          <li>Cedar Fort</li>
          <li>Eagle Mountain</li>
          <li>Saratoga Springs</li>
          <li>Lehi</li>
          <li>American Fork</li>
          <li>Highland</li>
          <li>Alpine</li>
          <li>Draper</li>
          <li>Bluffdale</li>
          <li>Herriman</li>
          <li>Riverton</li>
          <li>South Jordan</li>
          <li>Sandy</li>
          <li>West Jordan</li>
          <li>Midvale</li>
          <li>Cottonwood Heights</li>
          <li>Murray</li>
          <li>Taylorsville</li>
          <li>Holladay</li>
        </ul>
      </section>
    </div>
  );
}

export default Contact;
