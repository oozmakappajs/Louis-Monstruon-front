import React from 'react';
import '../assets/styles/main.scss';
import MainCarousel from '../containers/Carousel/MainCarousel';
import SmallCarousel from '../containers/Carousel/SmallCarousel';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <>
      <MainCarousel />
      <SmallCarousel />
      <ProductCard />
    </>
  );
};

export default Home;
