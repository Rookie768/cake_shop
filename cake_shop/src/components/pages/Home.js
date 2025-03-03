import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="banner">
        <video autoPlay muted loop className="banner-video">
          <source src="./video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>Bring A Box Of <span className="highlight">Happiness Today</span></h1>
            <p>Order delicious cakes, pastries, and more from Monginis.</p>
            <a href="https://cakesonline.monginis.net" className="order-button">
              Order Now
            </a>
          </div>
        </div>
      </section>

      <section className="products">
        <h2>Our Bestsellers</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Cake" />
            <h3>Chocolate Truffle</h3>
            <p>Rich chocolate cake with truffle frosting.</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Pastry" />
            <h3>Rainbow Pastry</h3>
            <p>Soft layers of colorful delight.</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Burger" />
            <h3>Veg Burger</h3>
            <p>A delicious and fulfilling snack.</p>
          </div>
        </div>
      </section>

      <section className="delivery-options">
        <div className="option">
          <img
            src="/images/delivery.png" // Replace with actual image path
            alt="Delivery"
          />
          <h3>Delivering at your doorstep.</h3>
          <a href="https://cakesonline.monginis.net" className="order-button">
            Order Online
          </a>
        </div>
        <div className="option">
          <img
            src="/images/store.png" // Replace with actual image path
            alt="Store"
          />
          <h3>Monginis is now just a CLICK away!</h3>
          <a href="https://monginis.net/store-locator" className="store-button">
            Visit Our Nearest Store
          </a>
        </div>
      </section>

      <section className="products">
        <h2>Our Bestsellers</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Cake" />
            <h3>Chocolate Truffle</h3>
            <p>Rich chocolate cake with truffle frosting.</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Pastry" />
            <h3>Rainbow Pastry</h3>
            <p>Soft layers of colorful delight.</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Burger" />
            <h3>Veg Burger</h3>
            <p>A delicious and fulfilling snack.</p>
          </div>
        </div>
      </section>


      <section className="bestseller-categories">
        <h2>
          Shop By <span className="highlight">Bestseller Categories</span>
        </h2>
        <div className="category-list">
          <div className="category-card">
            <img
              src="/images/birthday-cake.png" // Replace with actual image path
              alt="Birthday Surprises"
            />
            <h3>Birthday Surprises</h3>
            <button className="view-all-button">View all</button>
          </div>
          <div className="category-card">
            <img
              src="/images/anniversary-cake.png" // Replace with actual image path
              alt="Anniversary Surprises"
            />
            <h3>Anniversary Surprises</h3>
            <button className="view-all-button">View all</button>
          </div>
        </div>
      </section>



      <section className="shop-category">
        <h2>
          Shop By <span className="highlight">Cake</span>
        </h2>
        <div className="category-list">
          <div className="category-card">
            <img
              src="/images/tall-fancy.png" // Replace with actual image path
              alt="Tall and Fancy Cakes"
            />
            <h3>TALL AND FANCY</h3>
          </div>
          <div className="category-card">
            <img
              src="/images/exotic-cakes.png" // Replace with actual image path
              alt="Exotic Cakes"
            />
            <h3>EXOTIC CAKES</h3>
          </div>
          <div className="category-card">
            <img
              src="/images/premium-cakes.png" // Replace with actual image path
              alt="Premium Cakes"
            />
            <h3>PREMIUM CAKES</h3>
          </div>
          <div className="category-card">
            <img
              src="/images/designer-cakes.png" // Replace with actual image path
              alt="Designer Cakes"
            />
            <h3>DESIGNER CAKES</h3>
          </div>
        </div>
        <button className="view-all-button">View all</button>
      </section>

      {/* Shop By 3D Cakes Section */}
      <section className="shop-category">
        <h2>
          Shop By <span className="highlight">3D Cakes</span>
        </h2>
        <button className="view-all-button">View all</button>
      </section>


      <section className="newsletter">
        <h2>
          Know The Sweet <span className="highlight">Deal First!</span>
        </h2>
        <p>Sign up to our newsletter and get to know the sweets first!</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
        <div className="cake-image">
          <img src="/images/cake.png" alt="Delicious Cake" />
        </div>
      </section>

      {/* Our Speciality Section */}
      <section className="speciality">
        <h2>
          Our <span className="highlight">Speciality</span>
        </h2>
        <div className="speciality-list">
          <div className="speciality-item">
            <img src="/icons/hygiene.png" alt="Safe & Hygienic Bakery" />
            <p>Safe & Hygienic Bakery</p>
          </div>
          <div className="speciality-item">
            <img src="/icons/delivery.png" alt="Delivery in 700+ Cities" />
            <p>Delivery in 700+ Cities</p>
          </div>
          <div className="speciality-item">
            <img src="/icons/trusted.png" alt="Trusted by 20 Million" />
            <p>Trusted by 20 Million</p>
          </div>
          <div className="speciality-item">
            <img src="/icons/service.png" alt="Services in 18000+ Pincodes" />
            <p>Services in 18000+ Pincodes</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
