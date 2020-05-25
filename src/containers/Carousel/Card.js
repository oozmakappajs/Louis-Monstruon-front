import React from 'react';
import '../../assets/styles/containers/Carousel/Card.scss';
import product from '../../assets/images/products/dino2.jpg';

const Card = () => {
  return (
    <div className="Card">
      <img
        src={product}
        alt="carousel-img"
        className="Card__img"
      />
    </div>
  );
};

export default Card;
