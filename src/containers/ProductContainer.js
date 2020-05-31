import React from 'react';

import Button from '../components/elements/Button';
import IconButton from '../components/elements/IconButton';
import QuantityCounter from '../components/elements/QuantityCounter';
import PageSlider from './PageSlider';

import '../assets/styles/components/ProductActions.scss';

const ProductContainer = (props) => {
  const { addToCart, goToPayment, like, theme, product } = props;

  return (
    <section className={`product ${theme} ProductContainer`}>
      <div className="product_galery">
        <img className="ProductContainer__img" src={product.image} alt={product.name} />
        <PageSlider />
      </div>
      <div className="product_actions ProductContainer__info">
        <div className="ProductContainer__info-price">
          <div className="ProductContainer__info-price-container">
            <p className="ProductContainer__info-price-text">
              $
              {product.price}
            </p>
            <QuantityCounter />
          </div>
          <IconButton type="fav" action={like} className="ProductContainer__info-price--heart" />
        </div>
        <div className="ProductContainer__info-buttons">
          <div className="ProductContainer__info-buttons--btn">
            <Button name="success" action={goToPayment}>Comprar ahora</Button>
          </div>
          <div className="ProductContainer__info-buttons--icon">
            <IconButton type="cart" action={() => { addToCart(product); }} isBuying />
          </div>
        </div>
      </div>
      <div className="product_description">
        <p className="ProductContainer__text">
          {product.long_desc}
        </p>
      </div>
    </section>
  );
};

export default ProductContainer;
