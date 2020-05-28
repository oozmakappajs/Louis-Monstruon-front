import React from 'react';

import QuantityCounter from './elements/QuantityCounter';
import IconButton from './elements/IconButton';
import product from '../assets/images/products/dino2.jpg';

import '../assets/styles/components/CartCard.scss';

const CartCard = () => {
  return (
    <div className="CartCard">
      <div className="CartCard__img-container">
        <img
          src={product}
          alt="CartCard-img"
          className="CartCard__img"
        />
      </div>
      <div className="CartCard__details">
        <p className="CartCard__title">Nombre</p>
        <p className="CartCard__price">precio</p>
        <QuantityCounter />
      </div>
      <div className="CartCard__delete">
        <IconButton type="delete" />
      </div>
    </div>
  );
};

export default CartCard;
