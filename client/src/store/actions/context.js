import axios from 'axios';
import { SubmissionError } from 'redux-form';
import {
  CONTEXT,
  API_URLS,
  NOTIFICATION,
  SERVER_ERROR,
  setAlert,
} from '../actions';
import { setAuthToken, setAPIUrl } from '../../utils/utils';

setAPIUrl();

export const setContextStateProps = (payload) => (dispatch) => {
  dispatch({
    type: CONTEXT.SET_PROPS,
    payload,
  });
};

export const getMenuAction = () => async (dispatch) => {
  try {
    dispatch({ type: CONTEXT.SET_PROPS, payload: { gettingMenu: true } });
    const response = await axios.get(API_URLS.MENU);
    dispatch({ type: CONTEXT.GET_MENU, payload: response.data });
  } catch (error) {
    const { data } = error.response;
    const message = data && data.message ? data.message : SERVER_ERROR;
    dispatch(setAlert(message, NOTIFICATION.DANGER));
    dispatch({ type: CONTEXT.SET_PROPS, payload: { gettingMenu: false } });
  }
};

export const signinAction = (values) => async (dispatch) => {
  try {
    const response = await axios.post(API_URLS.SIGNIN, values);
    dispatch({ type: CONTEXT.SIGN_IN, payload: response.data });
    dispatch(setAlert('SUCCESS', NOTIFICATION.SUCCESS));
  } catch (error) {
    const { data } = error.response;
    if (data && data.errors) {
      throw new SubmissionError({ ...data.errors });
    } else {
      const message = data && data.message ? data.message : SERVER_ERROR;
      dispatch(setAlert(message, NOTIFICATION.DANGER));
      throw new SubmissionError({ _error: message });
    }
  }
};

export const getOrdersAction = () => async (dispatch) => {
  try {
    dispatch({ type: CONTEXT.SET_PROPS, payload: { gettingOrders: true } });
    setAuthToken();
    const response = await axios.get(API_URLS.ORDER);
    dispatch({ type: CONTEXT.GET_ORDERS, payload: response.data });
    dispatch({ type: CONTEXT.SET_PROPS, payload: { gettingOrders: false } });
  } catch (error) {
    const { data } = error.response;
    const message = data && data.message ? data.message : SERVER_ERROR;
    dispatch(setAlert(message, NOTIFICATION.DANGER));
    dispatch({ type: CONTEXT.SET_PROPS, payload: { gettingOrders: false } });
    // throw new SubmissionError({ _error: message });
  }
};

export const submitOrderAction = (values) => async (dispatch) => {
  try {
    setAuthToken();
    const response = await axios.post(API_URLS.ORDER, values);
    dispatch({ type: CONTEXT.ORDER_ADDED, payload: response.data });
    dispatch(setAlert(response.data.message, NOTIFICATION.SUCCESS));
  } catch (error) {
    const { data } = error.response;
    const message = data && data.message ? data.message : SERVER_ERROR;
    dispatch(setAlert(message, NOTIFICATION.DANGER));
    // throw new SubmissionError({ _error: message });
  }
};

export const signupAction = (values) => async (dispatch) => {
  try {
    const response = await axios.post(API_URLS.SIGNUP, values);
    dispatch({ type: CONTEXT.SIGN_UP, payload: response.data });
    dispatch(setAlert('SUCCESS', NOTIFICATION.SUCCESS));
  } catch (error) {
    const { data } = error.response;
    if (data && data.errors) {
      throw new SubmissionError({ ...data.errors });
    } else {
      const message = data && data.message ? data.message : SERVER_ERROR;
      dispatch(setAlert(message, NOTIFICATION.DANGER));
      throw new SubmissionError({ _error: message });
    }
  }
};

export const addToCartAction = (payload) => (dispatch) => {
  dispatch({
    type: CONTEXT.ADD_CART,
    payload,
  });
  dispatch(
    setAlert(
      `${payload.quantity} ${payload.name} has added successfully to your cart.`,
      NOTIFICATION.SUCCESS
    )
  );
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
