import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link className="header__brand" to="/">
        LOUIS MONSTRUON
      </Link>
    </header>
  );
};

export default Header;
