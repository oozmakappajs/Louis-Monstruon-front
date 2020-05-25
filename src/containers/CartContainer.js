import React from 'react';
import '../assets/styles/containers/CartContainer.scss';
import Button from '../components/elements/Button';
import CartCard from '../components/CartCard';

const CartContainer = () => {
  return (
    <div className="CartContainer">
      <CartCard />
      <CartCard />
      <div className="CartContainer__info">
        <div className="CartContainer__info-description">
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
        </div>
        <Button type="success" />
      </div>
    </div>
  );
};

export default CartContainer;
