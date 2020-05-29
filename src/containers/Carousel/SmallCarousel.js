import React from 'react';

import SmallCard from './SmallCard';

import '../../assets/styles/containers/Carousel/SmallCarousel.scss';

const SmallCarousel = (props) => {
  return (
    <div className="categories-section">
      <h3 className="categories-title">{props.sectionName}</h3>
      <div className="SmallCarousel">
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
