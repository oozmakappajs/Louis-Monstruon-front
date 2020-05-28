import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBackIos, FilterList, Search, SettingsOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = (props) => (
  <>
    {
      props.type === 'logo' && (
        <header className="header">
          <Link className="header__brand" to="/">
            {props.children}
          </Link>
        </header>
      )
    }
    {
      props.type === 'page' && (
        <header className="header">
          <p className="header__page-name" to="/">
            {props.children}
          </p>
        </header>
      )
    }
    {
      props.type === 'twoIcons' && (
        <header className="header">
          <div className="header__container">
            <Link className="header__icon" to="/">
              <ArrowBackIos className="header__icon--arrow" />
            </Link>
            <p className="header__page-name" to="/">
              {props.children}
            </p>
            <Link className="header__icon header__icon--list" to="/">
              <FilterList />
            </Link>
          </div>
        </header>
      )
    }
    {
      props.type === 'leftIcons' && (
        <header className="header">
          <div className="header__container header__container-arrow">
            <Link className="header__icon header__icon-arrow" to="/">
              <ArrowBackIos className="header__icon--arrow" />
            </Link>
            <p className="header__page-name header__page-name--arrow" to="/">
              {props.children}
            </p>
          </div>
        </header>
      )
    }
    {
      props.type === 'rightIcon' && (
        <header className="header">
          <div className="header__container header__container-arrow">
            <p className="header__page-name header__page-name--arrow" to="/">
              {props.children}
            </p>
            <Link className="header__icon header__icon-settings" to="/">
              <SettingsOutlined />
            </Link>
          </div>
        </header>
      )
    }
    {
      props.type === 'back' && (
        <header className="header header--transparent ">
          <div className="header__container">
            <Link className="header__icon" to="/">
              <ArrowBackIos className="header__icon--arrow" />
            </Link>
          </div>
        </header>
      )
    }
    {
      props.type === 'search' && (
        <header className="header header__search">
          <div className="header__search--bar-container">
            <input type="text" placeholder="Buscar" className="header__search--bar" />
            <Search />
          </div>
          <Link className="header__icon header__icon--list header__search--icon" to="/">
            <FilterList />
          </Link>
        </header>
      )
    }
  </>
);

Header.propTypes = {
  type: PropTypes.string,
};

export default Header;
