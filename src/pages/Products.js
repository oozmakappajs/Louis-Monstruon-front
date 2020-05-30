import React from 'react';
import ProductCard from '../components/ProductCard';
import { getGlobalState } from '../Context';

import '../assets/styles/pages/products.scss';

const Products = (props) => {
  const [{ settings: { theme } }] = getGlobalState();

  return (
    <section className={`products ${theme}`}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default Products;

