import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getGlobalState } from '../Context';

import getData from '../hooks/getData';
import SEO from '../components/elements/SEO';

import '../assets/styles/pages/products.scss';

const Products = (props) => {
  const [{ settings: { theme } }] = getGlobalState();
  const { match: { params: { product } }, location: { pathname } } = props;
  const [products, setProducts] = useState([]);

  const titlePage = pathname.split('/', 2);

  useEffect(() => {
    (async () => {
      const getProducts = await getData(`api/v1/categories/${product}`);
      setProducts(getProducts.data);
    })();
  }, []);

  return (
    <>
      <SEO
        title={`${titlePage[1].toUpperCase()} | Louis Monstruon`}
        description="Description Category"
        kw="Stripe, Clothes, Store"
      />
      <section className={`products ${theme}`}>
        {
          products !== (null || undefined) &&
          products.map((item) => (
            <ProductCard key={item.id} product={item} url={pathname} />
          ))
        }
      </section>
    </>
  );
};

export default Products;

