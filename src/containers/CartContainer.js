import React, { useEffect } from 'react';

import CartCard from '../components/CartCard';
import Button from '../components/elements/Button';

import '../assets/styles/containers/CartContainer.scss';

const CartContainer = (props) => {
  const { theme, cart, removeToCart, addAmount, addOneToCart, goToPayment } = props;
  const handleSumSubtotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity);
    const sum = cart.products.reduce(reducer, 0);
    return sum.toFixed(2);
  };

  const handleCalcIva = (subtotal) => {
    const iva = 0.16 * subtotal;
    return iva.toFixed(2);
  };

  const subtotalCart = handleSumSubtotal();
  const ivaCart = handleCalcIva(subtotalCart);
  const totalCart = parseFloat(subtotalCart) + parseFloat(ivaCart);

  useEffect(() => {
    addAmount(Number.parseFloat(totalCart).toFixed(2));
  }, [totalCart]);

  return (
    <>
      <div className={`cart ${theme}`}>
        {
          cart.products !== (null || undefined) &&
          cart.products.map((item, index) => <CartCard key={item.id} item={item} remove={removeToCart} addOneToCart={addOneToCart} index={index} />)
        }
      </div>
      <div className={`total_amount ${theme} CartContainer__info`}>
        <div className="CartContainer__info-description">
          <div className="CartContainer__info-item">
            <p>Subtotal</p>
            <p>
              $
              {' '}
              {subtotalCart}
            </p>
          </div>
          <div className="CartContainer__info-item">
            <p>Iva</p>
            <p>
              $
              {' '}
              {ivaCart}
            </p>
          </div>
          <div className="CartContainer__info-item CartContainer__info-item--total">
            <p>Total</p>
            <p>
              $
              {' '}
              {totalCart.toFixed(2)}
            </p>
          </div>
        </div>
        <Button name="success" action={goToPayment}>Pagar</Button>
      </div>
    </>
  );
};

export default CartContainer;
