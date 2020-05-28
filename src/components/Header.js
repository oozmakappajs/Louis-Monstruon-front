import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBackIos, FilterList, Search, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';

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
      {
        props.type === 'logo' && (
          <header className="header">
            <Link className="header__brand" to="/">
              LOUIS MONSTRUON
            </Link>
          </header>
        )
      }
      {
        props.type === 'page' && (
          <header className="header">
            <p className="header__page-name" to="/">
              {props.title}
            </p>
          </header>
        )
      }
      {
        props.type === 'twoIcons' && (
          <header className="header">
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
          <header className="header">
            <div className="header__container">
              <button type="button" className="header__icon" onClick={() => { handleGo('back'); }}>
                <ArrowBackIos className="header__icon--arrow" />
              </button>
              <p className="header__page-name header__page-name--arrow" to="/">
                {props.title}
              </p>
            </div>
          </header>
        )
      }
      {
        props.type === 'rightIcons' && (
          <header className="header">
            <div className="header__container">
              <p className="header__page-name header__page-name--arrow" to="/">
                {props.title}
              </p>
              <button type="button" className="header__icon" onClick={() => { handleGo(); }}>
                <Settings />
              </button>
            </div>
          </header>
        )
      }
      {
        props.type === 'back' && (
          <header className="header header--transparent modalView_header">
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
};

Header.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Header;
