import React from 'react';
import { Link } from 'react-router-dom';

import LogoImage from '../../assets/images/logo_2.png';

import '../../assets/styles/components/elements/Logo.scss';

const LogoComponent = (props) => (
  <div className="Logo">
    <Link to="/" className="Logo__img-container">
      <img className="Logo__img" src={LogoImage} alt="logo" />
    </Link>
  </div>
);

const Logo = React.memo(LogoComponent);

export default Logo;
