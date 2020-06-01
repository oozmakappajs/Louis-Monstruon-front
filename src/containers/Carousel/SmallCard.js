import React from 'react';
import { Link } from 'react-router-dom';

import useNearScreen from '../../hooks/useNearScreen';
import product from '../../assets/images/products/dino2.jpg';

import '../../assets/styles/containers/Carousel/SmallCard.scss';

const SmallCard = (props) => {
  const [show, element] = useNearScreen();

  return (
    <article ref={element} className="SmallCarousel-item">
      {
        show && (
          <Link to={props.url} aria-label="Category card">
            <div className="smallCard">
              <img
                src={product}
                alt="carousel-small-img"
                className="smallCard__img"
              />
              <p className="smallCard__title">{props.description}</p>
            </div>
          </Link>
        )
      }
    </article>
  );
};

export default SmallCard;
