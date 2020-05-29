import React from 'react';

import Button from '../components/elements/Button';
import IconButton from '../components/elements/IconButton';
import QuantityCounter from '../components/elements/QuantityCounter';
import PageSlider from './PageSlider';
import product from '../assets/images/products/dino2.jpg';

import '../assets/styles/components/ProductActions.scss';

const ProductContainer = (props) => {
  const { addToCart, goToPayment, like } = props;

  const item = {
    id: '2a34a',
    name: 'Producto 2',
    count: 1,
  };

  return (
    <section className="product ProductContainer">
      <div className="product_galery">
        <img className="ProductContainer__img" src={product} alt="product" />
        <PageSlider />
      </div>
      <div className="product_actions ProductContainer__info">
        <div className="ProductContainer__info-price">
          <div className="ProductContainer__info-price-container">
            <p className="ProductContainer__info-price-text">Precio</p>
            <QuantityCounter />
          </div>
          <IconButton type="fav" action={like} className="ProductContainer__info-price--heart" />
        </div>
        <div className="ProductContainer__info-buttons">
          <div className="ProductContainer__info-buttons--btn">
            <Button name="success" action={goToPayment}>Comprar ahora</Button>
          </div>
          <div className="ProductContainer__info-buttons--icon">
            <IconButton type="cart" action={() => { addToCart(item); }} isBuying />
          </div>
        </div>
      </div>
      <div className="product_description">
        <p className="ProductContainer__text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur.
        </p>
      </div>
    </section>
  );
};

export default ProductContainer;
