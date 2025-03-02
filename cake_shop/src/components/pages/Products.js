import React from 'react';
import Products from './HeaderContent/Product/Products';
import Footer from '../common/Footer';

const ProductsPage = () => {
  return (
    <div className="products-page">
      <Products />
      <Footer />
    </div>
  );
};

export default ProductsPage;
