import React from 'react';
import '../styles/scss/main.scss';
import logo from '../assets/logo/logo_1.png';

const Home = () => {
  return (
    <>
     <h1>HELLO OOZMAKAPPA.JS</h1>
      <p> Here goes the logo baby</p>
      <div class='image-container'>
        <img src={logo} alt="logo"/>
      </div>
    </>
  )
}

export default Home;
