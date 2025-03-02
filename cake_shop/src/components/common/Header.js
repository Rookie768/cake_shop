import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="/logo.png" alt="Monginis Logo" />
      </div>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="/" className="active">Home</a>
        <a href="/products">Our Products</a>
        <a href="/about">About Us</a>
        
        <div className="dropdown">
          <a href="/franchise">Become a Franchise <span className="arrow">▼</span></a>
          {/* Dropdown content (if needed) */}
          <div className="dropdown-content">
            <a href="/apply">Apply Now</a>
            <a href="/benefits">Benefits</a>
          </div>
        </div>
        
      </nav>
    </header>
  );
};

export default Header;
