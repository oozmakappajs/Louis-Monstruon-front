import React from 'react';
import { getGlobalState } from '../../Context';

import SmallCard from './SmallCard';

import '../../assets/styles/containers/Carousel/SmallCarousel.scss';

const SmallCarousel = (props) => {
  const [{ settings: { theme } }] = getGlobalState();
  const { category } = props;

  return (
    <div className="categories-section">
      <h3 className="categories-title">{category.name}</h3>
      <div className={`SmallCarousel ${theme}`}>
        <SmallCard url={`/${category.name}/${category.id}`} description={category.description} />
      </div>
    </div>
  );
};

export default SmallCarousel;
