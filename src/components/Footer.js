import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left side - Contact Info */}
        <span className="footer-contact">
          <h2>Contact</h2>
          <span>(801) 494-3655</span>
          <br></br>
          <span>nestedbylauren@gmail.com</span>
          <br></br>
          <span> Monday - Friday 8am to 5pm</span>
        </span>
        {/* Middle - Logo */}
        <div className="footer-logo">
          <img src="/logo.png" alt="Olympus Real Estate Logo" className="logo" />
        </div>
        {/* Right side - Social Icons */}
        <div className="footer-social">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Nested By Lauren | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
