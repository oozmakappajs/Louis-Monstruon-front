import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export const Provider = ({ reducer, children }) => {
  let isAuth;
  let user;
  let productsCart;
  let amountCart;
  let theme;

  if (window.localStorage.getItem('theme')) {
    theme = window.localStorage.getItem('theme');
  } else {
    theme = 'light';
  }

  if (window.localStorage.getItem('cart')) {
    productsCart = JSON.parse(window.localStorage.getItem('cart'));
  } else {
    productsCart = [];
  }
  if (window.localStorage.getItem('amount')) {
    amountCart = Number.parseFloat(window.localStorage.getItem('amount'));
  } else {
    amountCart = [];
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
    cart: {
      products: productsCart,
      amount: amountCart,
    },
    notifications: [],
    settings: {
      theme,
      notificationPermisions: false,
    },
    categories: [],
    featured: [],
    productAct: {},
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
