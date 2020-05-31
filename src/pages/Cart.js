import React from 'react';
import { getGlobalState } from '../Context';

import CartContainer from '../containers/CartContainer';
import SEO from '../components/elements/SEO';

import '../assets/styles/pages/cart.scss';

const Cart = (props) => {
  const [{ cart, settings: { theme } }, dispatch] = getGlobalState();

  const handleRemoveToCart = (payload) => {
    return dispatch({ type: 'REMOVE_TO_CART' }, payload);
  };

  const goToPayment = () => {
    props.history.push('/payment');
  };

  return (
    <>
      <SEO
        title="Cart | Louis Monstruon"
        description="Description Cart"
        kw="Stripe, Clothes, Store"
      />
      <CartContainer
        theme={theme}
        cartItems={cart}
        removeToCart={handleRemoveToCart}
        goToPayment={goToPayment}
      />
    </>
  );
};

export default Cart;
