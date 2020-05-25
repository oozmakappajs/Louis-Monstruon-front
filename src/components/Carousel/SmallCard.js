import React from 'react';
import '../../assets/styles/components/Carousel/SmallCard.scss';
import product from '../../assets/images/products/dino2.jpg';

const SmallCard = () => {
  return (
    <div className="smallCard">
      <img
        src={product}
        alt="carousel-small-img"
        className="smallCard__img"
      />
      <p className="smallCard__title">Tipo de prenda</p>
    </div>
  );
};

export default SmallCard;
