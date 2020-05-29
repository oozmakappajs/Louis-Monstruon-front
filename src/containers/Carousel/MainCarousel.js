import React from 'react';

import Card from './Card';

import '../../assets/styles/containers/Carousel/MainCarousel.scss';

const MainCarousel = () => {
  return (
    <section className="featured MainCarousel">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default MainCarousel;
