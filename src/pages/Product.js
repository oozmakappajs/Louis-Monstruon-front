import React from 'react';
import { getGlobalState } from '../Context';

import SEO from '../components/elements/SEO';
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
    props.history.push('/payment');
  };

  return (
    <>
      <SEO
        title="Product | Louis Monstruon"
        description="Description Product"
        kw="Stripe, Clothes, Store"
      />
      <ProductContainer
        addToCart={handleAddToCart}
        goToPayment={goToPayment}
        like={handleLike}
        theme={theme}
      />
    </>
  );
};

export default Product;
