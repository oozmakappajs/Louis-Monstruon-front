import React from 'react';
import '../assets/styles/main.scss';
import MainCarousel from '../containers/Carousel/MainCarousel';
import SmallCarousel from '../containers/Carousel/SmallCarousel';
import ProductCard from '../components/ProductCard';
import Tag from '../components/elements/Tag';
import Button from '../components/elements/Button';
import Range from '../components/elements/Range';
import Modal from '../containers/Modal';

const Home = () => {
  return (
    <>
      <MainCarousel />
      <SmallCarousel />
      <ProductCard />
      <div>
        <Button />
        <Tag />
        <Range />
        <Modal modal />
      </div>
    </>
  );
};

export default Home;
