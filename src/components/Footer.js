import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, LocalGroceryStoreOutlined, NotificationsOutlined, PersonOutlined, SearchOutlined } from '@material-ui/icons';
import '../assets/styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <Link className="Footer__icon" to="/">
        <HomeOutlined />
      </Link>
      <Link className="Footer__icon" to="/">
        <NotificationsOutlined />
      </Link>
      <Link className="Footer__icon" to="/">
        <LocalGroceryStoreOutlined />
      </Link>
      <Link className="Footer__icon" to="/">
        <SearchOutlined />
      </Link>
      <Link className="Footer__icon" to="/">
        <PersonOutlined />
      </Link>
    </footer>
  );
};

export default Footer;
