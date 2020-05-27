import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartCard from '../components/CartCard';
import CartContainer from '../containers/CartContainer';
import '../assets/styles/pages/cart.scss';

const Cart = () => {
  return (
    <>
      <Header type="page">Carrito</Header>
      <main className="content">
        <section className="cart">
          <CartCard />
          <CartCard />
          <CartCard />
        </section>
        <section className="total_amount">
          <CartContainer />
        </section>
      </main>
      <Footer icons />
    </>
  );
};

export default Cart;
