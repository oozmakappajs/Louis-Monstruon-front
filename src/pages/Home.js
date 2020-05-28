import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainCarousel from '../containers/Carousel/MainCarousel';
import SmallCarousel from '../containers/Carousel/SmallCarousel';
import Title from '../components/elements/Title';
import '../assets/styles/main.scss';
import '../assets/styles/pages/home.scss';

const Home = () => {
  return (
    <>
      <Header type="logo"> LOUIS MONSTRUON</Header>
      <main className="content">
        <section className="featured">
          <MainCarousel />
        </section>
        <section className="categories">
          <Title>Mujer</Title>
          <SmallCarousel />
          <Title>Hombre</Title>
          <SmallCarousel />
          <Title>Niño</Title>
          <SmallCarousel />
        </section>
      </main>
      <Footer icons />
    </>
  );
};

export default Home;
