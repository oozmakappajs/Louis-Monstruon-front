const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      window.localStorage.setItem('theme', action.payload);
      return {
        ...state,
        settings: {
          ...state.settings,
          theme: action.payload,
        },
      };
    case 'SET_AUTHORIZATION':
      window.sessionStorage.setItem('token', action.payload.token);
      window.sessionStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
      };
    case 'REMOVE_AUTHORIZATION':
      window.sessionStorage.removeItem('token');
      window.sessionStorage.removeItem('user');
      return {
        ...state,
        isAuth: false,
        user: {},
      };
    case 'TOGGLE_NOTIFICATIONS':
      return {
        ...state,
        settings: {
          ...state.settings,
          notificationPermisions: !state.settings.notificationPermisions,
        },
      };
    case 'GET_NOTIFICATIONS':
      return {
        ...state,
        notifications: action.payload,
      };
    case 'REMOVE_NOTIFICATIONS':
      return {
        ...state,
        notifications: action.payload,
      };
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    case 'GET_FEATURED':
      return {
        ...state,
        featured: action.payload,
      };
    case 'ADD_TO_CART':
      window.localStorage.setItem('cart', JSON.stringify([...state.cart.products, action.payload]));
      return {
        ...state,
        cart: {
          ...state.cart,
          products: [...state.cart.products, action.payload],
        },
      };
    case 'ALTER_QUANTITY_CART':
      window.localStorage.setItem('cart', JSON.stringify(action.payload));
      return {
        ...state,
        cart: {
          ...state.cart,
          products: action.payload,
        },
      };
    case 'SET_AMOUNT_OF_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          amount: Number.parseFloat(action.payload),
        },
      };
    case 'REMOVE_TO_CART':
      window.localStorage.setItem('cart', JSON.stringify(state.cart.products.filter((item, index) => index !== action.payload)));
      return {
        ...state,
        cart: {
          ...state.cart,
          products: state.cart.products.filter((item, index) => index !== action.payload),
        },
      };
    case 'SET_PRODUCT_ACT':
      return {
        ...state,
        productAct: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
