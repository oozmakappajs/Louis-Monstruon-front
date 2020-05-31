import React, { useState, useEffect } from 'react';
import { getGlobalState } from '../Context';

import getData from '../hooks/getData';
import SEO from '../components/elements/SEO';
import ProductContainer from '../containers/ProductContainer';

import '../assets/styles/pages/product.scss';

const Product = (props) => {
  const [{ isAuth, settings: { theme } }, dispatch] = getGlobalState();
  const { match: { params: { id } } } = props;
  const [product, setProduct] = useState({});

  const productSlug = id.split('-', 1);
  const productId = productSlug[0];

  useEffect(() => {
    (async () => {
      const getProduct = await getData(`api/v1/products/${productId}`);
      setProduct(getProduct);
    })();
  }, []);

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
        title={`${product.name} | Louis Monstruon`}
        description={`${product.long_desc}`}
        kw="Stripe, Clothes, Store"
      />
      {
        product !== (null || undefined) && (
          <ProductContainer
            addToCart={handleAddToCart}
            goToPayment={goToPayment}
            like={handleLike}
            theme={theme}
            product={product}
          />
        )
      }
    </>
  );
};

export default Product;
