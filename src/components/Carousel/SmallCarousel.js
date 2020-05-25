import React from 'react';
import '../../assets/styles/components/Carousel/SmallCarousel.scss';
import SmallCard from './SmallCard';

const SmallCarousel = () => {
  return (
    <div className="SmallCarousel">
      <div className="SmallCarousel__container">
        <div className="SmallCarousel-item">
          <SmallCard />
        </div>
        <div className="SmallCarousel-item">
          <SmallCard />
        </div>
        <div className="SmallCarousel-item">
          <SmallCard />
        </div>
        <div className="SmallCarousel-item">
          <SmallCard />
        </div>
        <div className="SmallCarousel-item">
          <SmallCard />
        </div>
        <div className="SmallCarousel-item">
          <SmallCard />
        </div>
      </div>
    </div>
  );
};

export default SmallCarousel;
