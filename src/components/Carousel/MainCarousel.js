import React from 'react';
import '../../assets/styles/components/Carousel/MainCarousel.scss';
import Card from './Card';

const MainCarousel = () => {
  return (
    <div className="MainCarousel">
      <div className="MainCarousel__container">
        <div className="MainCarousel-item">
          <Card />
        </div>
        <div className="MainCarousel-item">
          <Card />
        </div>
        <div className="MainCarousel-item">
          <Card />
        </div>
        <div className="MainCarousel-item">
          <Card />
        </div>
        <div className="MainCarousel-item">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
