import { CONTEXT } from '../actions';

export const setContextStateProps = (payload) => (dispatch) => {
  dispatch({
    type: CONTEXT.SET_PROPS,
    payload,
  });
};

export const signinAction = (values) => (dispatch) => {
  dispatch({
    type: CONTEXT.SIGN_IN,
  });
};

export const signupAction = (values) => (dispatch) => {
  dispatch({
    type: CONTEXT.SIGN_UP,
  });
};

export const addToCartAction = (payload) => (dispatch) => {
  dispatch({
    type: CONTEXT.ADD_CART,
    payload,
  });
};

export const updateCartAction = (payload) => (dispatch) => {
  dispatch({
    type: CONTEXT.UPDATE_CART,
    payload,
  });
};

export const removeFromCartAction = (payload) => (dispatch) => {
  dispatch({
    type: CONTEXT.REMOVE_CART,
    payload,
  });
};
