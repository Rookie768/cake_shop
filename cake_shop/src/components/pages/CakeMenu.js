import React from 'react';
import Cakes from './HeaderContent/Product/Cakes';
import Footer from '../common/Footer';
import "./CakeMenu.css";
import useDynamicBackgroundColor from '../common/DynmicBgColor'; // Adjusted to match the file name

const CakeMenu = () => {
  const backgroundColor = useDynamicBackgroundColor();


  return (
    <div className="products-page" style={{ backgroundColor }}>
      <Cakes />
      <Footer />
    </div>
  );
};

export default CakeMenu;
