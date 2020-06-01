import React, { useEffect } from 'react';
import { getGlobalState } from '../Context';

import getData from '../hooks/getData';
import SEO from '../components/elements/SEO';
import ProductContainer from '../containers/ProductContainer';

import '../assets/styles/pages/product.scss';

const Product = (props) => {
  const [{ isAuth, settings: { theme }, productAct }, dispatch] = getGlobalState();
  const { match: { params: { id } }, location: { pathname } } = props;

  const productSlug = id.split('-', 1);
  const productId = productSlug[0];

  useEffect(() => {
    (async () => {
      const getProduct = await getData(`api/v1/products/${productId}`);
      dispatch({ type: 'SET_PRODUCT_ACT', payload: getProduct });
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

  const goToPayment = (product) => {
    const iva = product.price * 0.16;
    const total = iva + product.price;

    dispatch({ type: 'SET_AMOUNT_OF_CART', payload: parseFloat(total).toFixed(2) });
    handleAddToCart(product);
    props.history.push('/payment');
  };

  return (
    <>
      <SEO
        title={`${productAct.name} | Louis Monstruon`}
        description={`${productAct.long_desc}`}
        kw="Stripe, Clothes, Store"
      />
      {
        productAct !== (null || undefined) && (
          <ProductContainer
            addToCart={handleAddToCart}
            goToPayment={goToPayment}
            like={handleLike}
            theme={theme}
            product={productAct}
            url={pathname}
          />
        )
      }
    </>
  );
};

export default Product;
