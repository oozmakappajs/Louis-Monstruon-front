import React from 'react';
import { Link } from 'react-router-dom';

import useNearScreen from '../hooks/useNearScreen';

import '../assets/styles/components/ProductCard.scss';

const ProductCard = (props) => {
  const { product, url } = props;
  const [show, element] = useNearScreen();

  const slug = `${product.id}-${product.name.toLowerCase().split(' ').join('-')}`;

  return (
    <article ref={element} className="productCard">
      {
        show && (
          <Link to={`${url}/${slug}`}>
            <div className="productCard__img-container">
              <img
                src={product.image}
                alt="carousel-small-img"
                className="productCard__img"
              />
            </div>
            <div className="productCard__details">
              <p className="productCard__title">{product.name}</p>
              <div className="productCard__info">
                <p className="productCard__info--price">
                  $
                  {product.price}
                </p>
                <p className="productCard__info--state">
                  {product.stock >= 10 && 'In stock'}
                  {product.stock < 10 && 'For running out'}
                  {product.stock === 0 && 'Out of stock'}
                </p>
              </div>
            </div>
          </Link>
        )
      }
    </article>
  );
};

export default ProductCard;
