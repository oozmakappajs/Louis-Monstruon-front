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
        categories: [...state.categories, action.payload],
      };
    case 'GET_FEATURED':
      return {
        ...state,
        featured: [...state.featured, action.payload],
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_TO_CART':
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default reducer;
