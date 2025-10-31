import { Link } from 'react-router-dom';
import './Home.css';
import professionalPhoto from '../assets/professional_photo_home.jpg';


function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Nested By Lauren</h1>
          <p>Helping you find your perfect nest!</p>
          <Link to="/contact" className="cta-button">Let's Chat</Link>
        </div>
      </section>

      {/* Services Section */}
<section class="about-section">
                <img
                src={professionalPhoto}
                alt="Professional"
                className="logo"
              />
      <h2>
        Hi, I’m Lauren !
      </h2>
      <div>
        <p>
          I’m so excited to help others find their place to call home. While I’m a new real estate
          agent, my journey with real estate started long before I earned my license. I’ve spent
          years investing in and managing properties, working with rentals, and helping others
          navigate the market with confidence.
        </p>

        <p>
          I’ve always loved working with people and understanding what makes them feel comfortable
          and confident in their decisions. Whether I’m helping first-time buyers find the perfect
          fit, assisting investors in spotting great opportunities, or connecting with families
          looking for their next space to grow, I approach every relationship with care, honesty, and
          attention to detail.
        </p>

        <blockquote className="border-l-4 border-[#C0D1C2] bg-[#EFF3F0] text-[#4A6650] italic p-5 rounded-lg shadow-sm">
          “To me, real estate isn’t just about closing deals — it’s about helping people feel nested:
          secure, supported, and truly at home.”
        </blockquote>

        <p>
          When I’m not working, I love spending time with my family, exploring local neighborhoods,
          and staying inspired by new design and market trends. I’m passionate about what I do, and
          I’d love the opportunity to help you find your next home, investment, or space to grow.
        </p>
      </div>
  <div class="signature">– Lauren</div>
</section>


{/* 
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
      </section> */}
    </div>
  );
}

export default Home;
