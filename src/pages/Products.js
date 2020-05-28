import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Modal from '../containers/Modal';
import '../assets/styles/pages/products.scss';

const Products = () => {
  return (
    <>
      <Header type="twoIcons">Categoria</Header>
      <main className="content">
        <section className="products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </main>
      <Footer icons />
      <Modal modal />
    </>
  );
};

export default Products;

