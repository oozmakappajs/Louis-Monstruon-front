import React from 'react';

import CartCard from '../components/CartCard';
import Button from '../components/elements/Button';

import '../assets/styles/containers/CartContainer.scss';

const CartContainer = () => {
  return (
    <>
      <div className="cart">
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
      <div className="total_amount CartContainer__info">
        <div className="CartContainer__info-description">
          <div className="CartContainer__info-item">
            <p>Subtotal</p>
            <p>$ 99.00</p>
          </div>
          <div className="CartContainer__info-item">
            <p>Iva</p>
            <p>$ 99.00</p>
          </div>
          <div className="CartContainer__info-item CartContainer__info-item--total">
            <p>Total</p>
            <p>$ 99.00</p>
          </div>
        </div>
        <Button name="success">Pagar</Button>
      </div>
    </>
  );
};

export default CartContainer;
