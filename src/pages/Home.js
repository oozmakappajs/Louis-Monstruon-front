import React from 'react';
import MainCarousel from '../containers/Carousel/MainCarousel';
import SmallCarousel from '../containers/Carousel/SmallCarousel';
import '../assets/styles/pages/home.scss';

const Home = (props) => {
  return (
    <>
      <MainCarousel />
      <section className="categories">
        <SmallCarousel sectionName="Mujer" />
        <SmallCarousel sectionName="Hombre" />
        <SmallCarousel sectionName="Niño" />
        <SmallCarousel sectionName="Accesorios" />
      </section>
    </>
  );
};

export default Home;
