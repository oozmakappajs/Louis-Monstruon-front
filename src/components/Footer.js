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
      ) : (
        <footer className="Footer">
          <Link className="Footer__terms" to="/">
            terms and Conditions
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
