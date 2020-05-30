import React from 'react';
import ProductCard from '../components/ProductCard';
import { getGlobalState } from '../Context';

import SEO from '../components/elements/SEO';

import '../assets/styles/pages/products.scss';

const Products = (props) => {
  const [{ settings: { theme } }] = getGlobalState();

  return (
    <>
      <SEO
        title="Category | Louis Monstruon"
        description="Description Category"
        kw="Stripe, Clothes, Store"
      />
      <section className={`products ${theme}`}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </>
  );
};

export default Products;

