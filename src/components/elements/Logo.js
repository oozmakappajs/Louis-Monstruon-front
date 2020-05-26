import React from 'react';
import '../../assets/styles/components/elements/Logo.scss';
import LogoImage from '../../assets/images/logo_2.png';

const Logo = () => (
  <div className="Logo">
    <div className="Logo__img-container">
      <img className="Logo__img" src={LogoImage} alt="logo" />
    </div>
  </div>
);

export default Logo;
