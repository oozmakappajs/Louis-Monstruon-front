import React from 'react';
import { getGlobalState } from '../Context';

import ProductContainer from '../containers/ProductContainer';

import '../assets/styles/pages/product.scss';

const Product = (props) => {
  const [{ isAuth, settings: { theme } }, dispatch] = getGlobalState();

  const handleLike = () => {
    if (!isAuth) {
      props.history.push('/login');
    }
  };

  const handleAddToCart = (payload) => {
    return dispatch({ type: 'ADD_TO_CART', payload });
  };

  const goToPayment = () => {
    props.history.push(`/payment?items=${item.id}`);
  };

  return (
    <ProductContainer
      addToCart={handleAddToCart}
      goToPayment={goToPayment}
      like={handleLike}
      theme={theme}
    />
  );
};

export default Product;
