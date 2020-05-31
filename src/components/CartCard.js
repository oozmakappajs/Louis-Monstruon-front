import React from 'react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

import useNearScreen from '../hooks/useNearScreen';
import QuantityCounter from './elements/QuantityCounter';
import IconButton from './elements/IconButton';

import '../assets/styles/components/CartCard.scss';

const CartCard = (props) => {
  const [show, element] = useNearScreen();
  const { item, remove, addOneToCart, index } = props;

  const handleCount = (operation) => {
    let product;
    if (operation > item.stock) {
      swal('There are not enough products', 'Maximum capacity reached', 'error');
      product = {
        id: item.id,
        quantity: item.stock,
      };
    } else {
      product = {
        id: item.id,
        quantity: operation,
      };
    }
    addOneToCart(product);
  };

  return (
    <article ref={element} className="CartCard">
      {
        show && (
          <div className="CartCard__container">
            <Link to={item.url} className="CartCard__img-container">
              <img
                src={item.image}
                alt={item.name}
                className="CartCard__img"
              />
            </Link>
            <div className="CartCard__details">
              <p className="CartCard__title">{item.name}</p>
              <p className="CartCard__price">
                $
                {' '}
                {item.price}
              </p>
              <QuantityCounter count={item.quantity} action={handleCount} />
            </div>
            <div className="CartCard__delete">
              <IconButton type="delete" action={() => { remove(index); }} />
            </div>
          </div>
        )
      }
    </article>
  );
};

export default CartCard;
