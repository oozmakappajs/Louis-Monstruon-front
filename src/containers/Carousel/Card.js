import React from 'react';
import { Link } from 'react-router-dom';

import useNearScreen from '../../hooks/useNearScreen';

import '../../assets/styles/containers/Carousel/Card.scss';

const Card = (props) => {
  const [show, element] = useNearScreen();

  return (
    <article ref={element} className="MainCarousel-item">
      {
        show && (
          <Link to={props.url}>
            <div className="Card">
              <img
                src={props.item.image}
                alt="carousel-img"
                className="Card__img"
              />
            </div>
          </Link>
        )
      }
    </article>
  );
};

export default Card;
