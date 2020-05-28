import React from 'react';

import LogoImage from '../../assets/images/logo_2.png';

import '../../assets/styles/components/elements/Logo.scss';

const Logo = () => (
  <div className="Logo">
    <div className="Logo__img-container">
      <img className="Logo__img" src={LogoImage} alt="logo" />
    </div>
  </div>
);

export default Logo;
