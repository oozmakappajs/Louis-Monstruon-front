import React from 'react';
import ProductCard from '../components/ProductCard';

import '../assets/styles/pages/products.scss';

const Products = () => {
  return (
    <section className="products">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default Products;

