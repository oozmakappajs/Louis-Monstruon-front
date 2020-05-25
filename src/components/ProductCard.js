import React from 'react';
import '../assets/styles/components/ProductCard.scss';
import product from '../assets/images/products/dino2.jpg';

const ProductCard = () => {
  return (
    <div className="productCard">
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
    </div>
  );
};

export default ProductCard;
