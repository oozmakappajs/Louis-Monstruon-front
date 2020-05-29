import React from 'react';
import { Link } from 'react-router-dom';

import product from '../../assets/images/products/dino2.jpg';

import '../../assets/styles/containers/Carousel/Card.scss';

const Card = (props) => {
  return (
    <article className="MainCarousel-item">
      <Link to="/man/pants/213413ed13">
        <div className="Card">
          <img
            src={product}
            alt="carousel-img"
            className="Card__img"
          />
        </div>
      </Link>
    </article>
  );
};

export default Card;
