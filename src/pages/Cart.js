import React from 'react';

import { getGlobalState } from '../Context';

import '../assets/styles/pages/cart.scss';

const Cart = (props) => {
  const [{ cart }, dispatch] = getGlobalState();

  const handleRemoveToCart = (payload) => {
    return dispatch({ type: 'REMOVE_TO_CART' }, payload);
  };

  return (
    <>
      <header className="header">
        <h2>Header</h2>
      </header>
      <main className="content">
        <section className="cart" cart={cart}>
          <div>
            <p onClick={() => handleRemoveToCart(2)}>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
          <div>
            <p>item cart</p>
          </div>
        </section>
        <section className="total_amount">
          <div>
            <p>subtotal</p>
          </div>
          <div>
            <p>iva</p>
          </div>
          <div>
            <p>total</p>
          </div>
          <div>
            <p>payment button</p>
          </div>
        </section>
      </main>
      <nav className="menu_navigation">
        <h2>Menu de Navegación</h2>
      </nav>
    </>
  );
};

export default Cart;
