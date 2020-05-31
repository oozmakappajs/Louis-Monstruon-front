import React from 'react';
import { Link } from 'react-router-dom';

import useNearScreen from '../hooks/useNearScreen';
import product from '../assets/images/products/dino2.jpg';
import QuantityCounter from './elements/QuantityCounter';
import IconButton from './elements/IconButton';

import '../assets/styles/components/CartCard.scss';

const CartCard = () => {
  const [show, element] = useNearScreen();

  return (
    <article ref={element} className="CartCard">
      {
        show && (
          <Link to="/:category/:product/:id">
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
          </Link>
        )
      }
    </article>
  );
};

export default CartCard;
