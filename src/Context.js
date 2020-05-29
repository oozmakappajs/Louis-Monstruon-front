import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export const Provider = ({ reducer, children }) => {
  let isAuth;
  let user;
  let theme;

  if (window.localStorage.getItem('theme')) {
    theme = window.localStorage.getItem('theme');
  } else {
    theme = 'light';
  }

  if (window.sessionStorage.getItem('token') && window.sessionStorage.getItem('user')) {
    isAuth = true;
    user = JSON.parse(window.sessionStorage.getItem('user'));
  } else {
    isAuth = false;
    user = {};
  }

  const initialState = {
    isAuth,
    user,
    cart: [],
    notifications: [],
    settings: {
      theme,
      notificationPermisions: false,
    },
    categories: [],
    featured: [],
  };

  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Context.Provider>
  );
};

export const getGlobalState = () => useContext(Context);

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  reducer: PropTypes.func.isRequired,
};
