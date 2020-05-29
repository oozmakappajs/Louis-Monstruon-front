import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/SearchCard.scss';
import product from '../assets/images/products/dino2.jpg';

const SearchCard = () => {
  return (
    <Link to="/:category/:product/:id" className="SearchCard">
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
  );
};

export default SearchCard;
