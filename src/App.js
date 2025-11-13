import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import MortgageCalculator from './components/MortgageCalculator';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      console.log("Toggling menu:", !prev); // Debug log
      return !prev;
    });
  };

  const closeMenu = () => {
    console.log("Closing menu"); // Debug log
    setMenuOpen(false);
  };

  return (
    <Router>

      <div className="container">
        {/* Top Info Strip*/}
        <div class="top-strip">
          <span class="strip-span"> ✆ 801-494-3655</span>
          <span class="strip-span"> ✉ nestedbylauren@gmail.com</span>
          <span class="strip-span"> Lic # 14253188</span>
          <span class="strip-span"> More Than Just an Agent—Your Trusted Partner and Counselor Through Every Real Estate Decision</span>
        </div>

        <header className="header">
          <img
            src="/main-logo.png"
            alt="Olympus Real Estate Logo"
            className="logo"
          />

          {/* Hamburger Button */}
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>

          {/* Navigation Menu */}
          <nav className={menuOpen ? "nav open" : "nav"}>
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="https://www.utahrealestate.com/index/public.index" onClick={closeMenu}>
                  MLS Listings
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Contact Me
                </Link>
              </li>
              <li>
                <Link to="/mortgage-calculator" onClick={closeMenu}>
                  Mortgage Calculator
                </Link>
              </li>
             <li>
                <Link to="/gallery" onClick={closeMenu}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
          </Routes>
        </main>

          {/* Footer */}
          <Footer />

      </div>
    </Router>
  );
}

export default App;
