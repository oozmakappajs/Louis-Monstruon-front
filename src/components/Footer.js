import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HomeOutlined,
  LocalGroceryStoreOutlined,
  NotificationsOutlined,
  PersonOutlined,
  SearchOutlined } from '@material-ui/icons';
import '../assets/styles/components/Footer.scss';

const Footer = (props) => (
  <>
    {
      props.icons ? (
        <footer className="Footer">
          <Link className="Footer__icon" to="/">
            <HomeOutlined />
          </Link>
          <Link className="Footer__icon" to="/notifications">
            <NotificationsOutlined />
          </Link>
          <Link className="Footer__icon" to="/cart">
            <LocalGroceryStoreOutlined />
          </Link>
          <Link className="Footer__icon" to="/search">
            <SearchOutlined />
          </Link>
          <Link className="Footer__icon" to="/profile/:username">
            <PersonOutlined />
          </Link>
        </footer>
      ) : (
        <footer className="Footer Footer__transparent">
          <Link className="Footer__terms" to="/">
            {props.children}
          </Link>
        </footer>
      )
    }
  </>
);

Footer.propTypes = {
  icons: PropTypes.bool,
};

export default Footer;
