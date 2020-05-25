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
        <Button type="success" />
        <Button type="error" />
        <Button type="blue" />
        <Button type="gradient" />
        <Tag />
        <Range />
        <Modal modal />
      </div>
    </>
  );
};

export default Home;
