import './Contact.css'; // Import styles
import professionalPhoto from '../assets/professional_photo.png'; // ✅ import the image


function Contact() {

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
      </section>

      <section className="contact-info">
        <p>Have questions or want to schedule an appointment? Reach out to us!</p>

        <div className="contact-details">
          <div className="contact-item">
              <img
                src={professionalPhoto} // ✅ use imported variable
                alt="Professional Photo"
                className="logo"
              />
            <h3>Phone</h3>
            <p><a href="tel:+12088315748">(208) 831-5748</a></p>

            <h3>Email</h3>
            <p><a href="mailto:801slammed-detailing@gmail.com">801slammed-detailing@gmail.com</a></p>

            <h3>Hours</h3>
            <p>Monday - Friday 8am to 5pm</p>
            <p>Call or Text Booking Available Anytime!</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;
