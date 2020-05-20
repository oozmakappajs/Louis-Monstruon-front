import React from 'react';
import '../assets/styles/main.scss';
import logo from '../assets/images/logo_1.png';

const Home = () => {
  return (
    <>
      <h1>HELLO OOZMAKAPPA.JS</h1>
      <p> Here goes the logo baby</p>
      <div className="image-container">
        <img src={logo} alt="logo" />
      </div>
    </>
  );
};

export default Home;
