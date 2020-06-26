import { CONTEXT } from '../actions';

export const setContextStateProps = (payload) => (dispatch) => {
  dispatch({
    type: CONTEXT.SET_PROPS,
    payload,
  });
};

export const addToCartAction = (payload) => (dispatch) => {
  dispatch({
    type: CONTEXT.ADD_CART,
    payload,
  });
};
