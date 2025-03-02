import React from 'react';
import './Products.css';

const Products = () => {
  const cakeImages = Array.from({ length: 26 }, (_, i) => ({
    id: i + 1,
    src: `/cake/cake (${i + 1}).png`,
    name: `Delicious Cake ${i + 1}`,
    price: `$${(Math.random() * (50 - 20) + 20).toFixed(2)}`,
  }));

  // Add the special cakes with jpg extension
  const specialCakes = [
    {
      id: 27,
      src: '/cake/2025-01-27.jpg',
      name: 'Special Celebration Cake',
      price: '$65.00',
    },
    {
      id: 28,
      src: '/cake/2025-01-27 (1).jpg',
      name: 'Premium Wedding Cake',
      price: '$85.00',
    },
    {
      id: 29,
      src: '/cake/2025-01-27 (2).jpg',
      name: 'Luxury Party Cake',
      price: '$75.00',
    },
  ];

  const allCakes = [...cakeImages, ...specialCakes];

  const handleContactClick = () => {
    window.location.href = 'tel:+1234567890'; // Replace with your actual phone number
  };

  return (
    <div className="products-container">
      <h2 className="products-title">Our Delicious Cakes</h2>
      <div className="products-grid">
        {allCakes.map((cake) => (
          <div key={cake.id} className="product-card">
            <div className="product-image-container">
              <img src={cake.src} alt={cake.name} className="product-image" />
              <div className="product-overlay">
                <button onClick={handleContactClick} className="contact-btn">
                  Contact Us
                  <span className="phone-icon">📞</span>
                </button>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{cake.name}</h3>
              <p className="product-price">{cake.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;