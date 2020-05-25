import React from 'react';
import '../assets/styles/main.scss';
import Card from '../components/Carousel/Card';
import SmallCard from '../components/Carousel/SmallCard';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <>
      <Card />
      <SmallCard />
      <ProductCard />
    </>
  );
};

export default Home;
