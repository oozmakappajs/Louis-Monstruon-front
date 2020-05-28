import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/elements/Logo.scss';
import LogoImage from '../../assets/images/logo_2.png';

const Logo = () => (
  <div className="Logo">
    <Link to="/" className="Logo__img-container">
      <img className="Logo__img" src={LogoImage} alt="logo" />
    </Link>
  </div>
);

export default Logo;
