import React from 'react';
import '../assets/styles/main.scss';
import MainCarousel from '../components/Carousel/MainCarousel';
import SmallCarousel from '../components/Carousel/SmallCarousel';
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
