import React from 'react';
import { Link } from 'react-router-dom';

import product from '../../assets/images/products/dino2.jpg';

import '../../assets/styles/containers/Carousel/SmallCard.scss';

const SmallCard = (props) => {
  return (
    <article className="SmallCarousel-item">
      <Link to="/man/pants">
        <div className="smallCard">
          <img
            src={product}
            alt="carousel-small-img"
            className="smallCard__img"
          />
          <p className="smallCard__title">Tipo de prenda</p>
        </div>
      </Link>
    </article>
  );
};

export default SmallCard;
