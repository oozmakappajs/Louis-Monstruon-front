import React from 'react';
import '../assets/styles/components/SearchCard.scss';
import product from '../assets/images/products/dino2.jpg';

const SearchCard = () => {
  return (
    <div className="SearchCard">
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
    </div>
  );
};

export default SearchCard;
