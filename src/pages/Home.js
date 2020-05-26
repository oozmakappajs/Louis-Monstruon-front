import React from 'react';
import MainCarousel from '../containers/Carousel/MainCarousel';
import SmallCarousel from '../containers/Carousel/SmallCarousel';
import '../assets/styles/main.scss';
import '../assets/styles/pages/home.scss';

const Home = () => {
  return (
    <>
      <MainCarousel />
      <p>Mujer</p>
      <SmallCarousel />
      <p>Hombre</p>
      <SmallCarousel />
      <p>Niño</p>
      <SmallCarousel />
    </>
  );
};

export default Home;
