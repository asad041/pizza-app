export const SERVER_ERROR =
  "Something is technically wrong. Thanks for noticing - we're going to fix it up and have things back to normal soon.";

export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const NOTIFICATION = {
  SUCCESS: 'success',
  DANGER: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

// context
export const CONTEXT = {
  SET_PROPS: 'SET_PROPS',
  RESET_PROPS: 'RESET_PROPS',
  ADD_CART: 'ADD_CART',
  UPDATE_CART: 'UPDATE_CART',
  REMOVE_CART: 'REMOVE_CART',
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  ORDER_ADDED: 'ORDER_ADDED',
};

export const API_URLS = {
  AUTH: '/api/auth',
  SIGNIN: '/api/auth/signin',
  SIGNUP: '/api/auth/signup',
  ORDER: '/api/order',
};
