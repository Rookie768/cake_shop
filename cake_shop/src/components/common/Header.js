import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="/logo.png" alt="Monginis Logo" />
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="#home" className="active">Home</a>
        <a href="#products">Our Products</a>
        <a href="#about">About Us</a>
        <a href="#history">Our History</a>
        <div className="dropdown">
          <a href="#franchise">Become a Franchise <span className="arrow">▼</span></a>
          {/* Dropdown content (if needed) */}
          <div className="dropdown-content">
            <a href="#apply">Apply Now</a>
            <a href="#benefits">Benefits</a>
          </div>
        </div>
        <a href="#blogs">Blogs</a>
        <a href="#wedding-cakes">Wedding Cakes</a>
      </nav>
    </header>
  );
};

export default Header;
