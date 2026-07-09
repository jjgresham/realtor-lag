import './Contact.css';
import professionalPhoto from '../assets/professional_photo_contact.jpg';

function Contact() {
  return (
    <div className="contact-page">
      <section className="section section-secondary">
        <h2>Let's Connect</h2>
        <p>Ready to find your dream home? Get in touch!</p>
      </section>

      <section className="contact-content section-tertiary">
        <div className="contact-container">
          {/* Agent Info Card */}
          <div className="agent-card">
            <img
              src={professionalPhoto}
              alt="Lauren Gresham"
              className="agent-photo"
            />
            <h2>Lauren Gresham</h2>
            <p className="agent-title">Real Estate Agent</p>
            <p className="agent-title">License #: 14253188</p>
            <p className="agent-bio">
              Former educator bringing dedication and attention to detail 
              to help you navigate your real estate journey.
            </p>
          </div>

          {/* Contact Details */}
          <div className="contact-details">
            <div className="contact-card">
              <h3>📞 Phone</h3>
              <a href="tel:+18013409064">(801) 340-9064</a>
              <p className="contact-note">Call or text anytime</p>
            </div>

            <div className="contact-card">
              <h3>✉️ Email</h3>
              <a href="mailto:lauren@nexthomegps.com">lauren@nexthomegps.com</a>
            </div>

            <div className="contact-card">
              <h3>🕒 Hours</h3>
              <p>Monday - Friday</p>
              <p>8:00 AM - 5:00 PM</p>
              <p className="contact-note">Flexible scheduling available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;