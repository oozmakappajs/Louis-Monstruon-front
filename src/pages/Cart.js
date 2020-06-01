import React from 'react';
import swal from 'sweetalert';
import { getGlobalState } from '../Context';

import CartContainer from '../containers/CartContainer';
import SEO from '../components/elements/SEO';

import '../assets/styles/pages/cart.scss';

const Cart = (props) => {
  const [{ cart, settings: { theme } }, dispatch] = getGlobalState();

  const handleRemoveToCart = (payload) => {
    return dispatch({ type: 'REMOVE_TO_CART', payload });
  };

  const handleSetAmount = (payload) => {
    return dispatch({ type: 'SET_AMOUNT_OF_CART', payload });
  };

  const handleAddOneToCart = (payload) => {
    const product = cart.products.findIndex(((obj) => obj.id === payload.id));
    const newCart = cart.products;
    newCart[product].quantity = payload.quantity;
    return dispatch({ type: 'ALTER_QUANTITY_CART', payload: newCart });
  };

  // eslint-disable-next-line consistent-return
  const goToPayment = () => {
    if (cart.amount === 0) {
      return swal('You have no item in the cart', 'You can\'t buy 0 items', 'error');
    }
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
        cart={cart}
        removeToCart={handleRemoveToCart}
        addAmount={handleSetAmount}
        addOneToCart={handleAddOneToCart}
        goToPayment={goToPayment}
      />
    </>
  );
};

export default Cart;
