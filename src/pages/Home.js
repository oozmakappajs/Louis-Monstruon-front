import React from 'react';
import '../assets/styles/main.scss';
import MainCarousel from '../containers/Carousel/MainCarousel';
import SmallCarousel from '../containers/Carousel/SmallCarousel';
import ProductCard from '../components/ProductCard';
import Tag from '../components/elements/Tag';
import Button from '../components/elements/Button';
import IconButton from '../components/elements/IconButton';
import Range from '../components/elements/Range';
import Modal from '../containers/Modal';
import QuantityCounter from '../components/elements/QuantityCounter';

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
        <IconButton type="fav" />
        <IconButton type="fav" isFav />
        <IconButton type="cart" />
        <QuantityCounter />
      </div>
    </>
  );
};

export default Home;
