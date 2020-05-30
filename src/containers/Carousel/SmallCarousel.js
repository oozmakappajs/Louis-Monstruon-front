import React from 'react';
import { getGlobalState } from '../../Context';

import SmallCard from './SmallCard';

import '../../assets/styles/containers/Carousel/SmallCarousel.scss';

const SmallCarousel = (props) => {
  const [{ settings: { theme } }] = getGlobalState();

  return (
    <div className="categories-section">
      <h3 className="categories-title">{props.sectionName}</h3>
      <div className={`SmallCarousel ${theme}`}>
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  );
};

export default SmallCarousel;
