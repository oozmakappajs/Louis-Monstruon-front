import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBackIos, FilterList, Search, SettingsOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import IsOffline from './elements/IsOffline';

const Header = (props) => {

  const handleGo = (type) => {
    if (type === 'back') {
      props.history.goBack();
    } else {
      props.history.push('/settings');
    }
  };

  return (
    <>
      <IsOffline>Estas navegando sin conexion | Offline</IsOffline>
      {
        props.type === 'logo' && (
          <header className={`header ${props.theme}`}>
            <Link className="header__page-name header__page-name--arrow pl header__brand" to="/">
              LOUIS MONSTRUON
            </Link>
            <button type="button" className="header__icon" onClick={() => { handleGo(); }}>
              <SettingsOutlined />
            </button>
          </header>
        )
      }
      {
        props.type === 'page' && (
          <header className={`header ${props.theme}`}>
            <p className="header__page-name" to="/">
              {props.title}
            </p>
          </header>
        )
      }
      {
        props.type === 'twoIcons' && (
          <header className={`header ${props.theme}`}>
            <div className="header__container">
              <button type="button" className="header__icon" onClick={() => { handleGo('back'); }}>
                <ArrowBackIos className="header__icon--arrow" />
              </button>
              <p className="header__page-name" to="/">
                Categorias
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
          <header className={`header ${props.theme}`}>
            <div className="header__container">
              <button type="button" className="header__icon" onClick={() => { handleGo('back'); }}>
                <ArrowBackIos className="header__icon--arrow" />
              </button>
              <p className="header__page-name header__page-name--arrow pr" to="/">
                {props.title}
              </p>
            </div>
          </header>
        )
      }
      {
        props.type === 'rightIcons' && (
          <header className={`header ${props.theme}`}>
            <div className="header__container">
              <p className="header__page-name header__page-name--arrow pl" to="/">
                {props.title}
              </p>
              <button type="button" className="header__icon" onClick={() => { handleGo(); }}>
                <SettingsOutlined />
              </button>
            </div>
          </header>
        )
      }
      {
        props.type === 'back' && (
          <header className={`header ${props.theme} modalView_header`}>
            <div className="header__container">
              <button type="button" className="header__icon" onClick={() => { handleGo('back'); }}>
                <ArrowBackIos className="header__icon--arrow" />
              </button>
            </div>
          </header>
        )
      }
      {
        props.type === 'search' && (
          <header className={`header header__search ${props.theme}`}>
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
};

Header.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Header;
