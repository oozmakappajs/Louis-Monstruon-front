import React from 'react';
import { getGlobalState } from '../Context';

import CartContainer from '../containers/CartContainer';

import '../assets/styles/pages/cart.scss';

const Cart = (props) => {
  const [{ cart }, dispatch] = getGlobalState();

  const handleRemoveToCart = (payload) => {
    return dispatch({ type: 'REMOVE_TO_CART' }, payload);
  };

  return (
    <CartContainer cartItems={cart} removeToCart={handleRemoveToCart} />
  );
};

export default Cart;
