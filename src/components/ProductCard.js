import React from 'react';
import { Link } from 'react-router-dom';
import product from '../assets/images/products/dino2.jpg';

import '../assets/styles/components/ProductCard.scss';

const ProductCard = () => {
  return (
    <Link className="productCard" to="/man/pants/213413ed13">
      <div className="productCard__img-container">
        <img
          src={product}
          alt="carousel-small-img"
          className="productCard__img"
        />
      </div>
      <div className="productCard__details">
        <p className="productCard__title">Nombre del producto</p>
        <div className="productCard__info">
          <p className="productCard__info--price">$450.00</p>
          <p className="productCard__info--state">Nuevo</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
