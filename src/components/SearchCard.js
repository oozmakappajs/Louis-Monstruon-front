import React from 'react';
import { Link } from 'react-router-dom';

import useNearScreen from '../hooks/useNearScreen';
import product from '../assets/images/products/dino2.jpg';

import '../assets/styles/components/SearchCard.scss';

const SearchCard = (props) => {
  const [show, element] = useNearScreen();

  return (
    <article ref={element} className="SearchCard">
      {
        show && (
          <Link to="/:category/:product/:id">
            <div className="SearchCard__img-container">
              <img
                src={product}
                alt="SearchCard-img"
                className="SearchCard__img"
              />
            </div>
            <div className="SearchCard__details">
              <p className="SearchCard__title">Nombre</p>
              <p className="SearchCard__price">precio</p>
            </div>
          </Link>
        )
      }
    </article>
  );
};

export default SearchCard;
