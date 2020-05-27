import React from 'react';
import Button from '../components/elements/Button';
import product from '../assets/images/products/dino2.jpg';
import '../assets/styles/containers/ProductContainer.scss';
import IconButton from '../components/elements/IconButton';
import QuantityCounter from '../components/elements/QuantityCounter';
import PageSlider from './PageSlider';

const ProductContainer = () => {
  return (
    <div className="ProductContainer">
      <div>
        <img className="ProductContainer__img" src={product} alt="product" />
      </div>
      <PageSlider />
      <div className="ProductContainer__info">
        <div className="ProductContainer__info-price">
          <div className="ProductContainer__info-price-container">
            <p>Precio</p>
            <QuantityCounter />
          </div>
          <IconButton type="fav" className="ProductContainer__info-price--heart" />
        </div>
        <div className="ProductContainer__info-buttons">
          <div className="ProductContainer__info-buttons--btn">
            <Button type="success" />
          </div>
          <div className="ProductContainer__info-buttons--icon">
            <IconButton type="cart" isBuying />
          </div>
        </div>
      </div>
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
  );
};

export default ProductContainer;
