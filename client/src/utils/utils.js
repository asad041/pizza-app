import axios from 'axios';
import moment from 'moment';

export const isIterableArray = (array) =>
  Array.isArray(array) && !!array.length;

export const setAPIUrl = () => {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'http://15.206.146.98'
      : 'http://localhost:5000';
  axios.defaults.baseURL = baseUrl;
};

export const setAuthToken = (token) => {
  const xToken = token
    ? token
    : localStorage.xToken
    ? localStorage.xToken
    : null;
  if (xToken) {
    axios.defaults.headers.common['x-token'] = xToken;
  } else {
    delete axios.defaults.headers.common['x-token'];
  }
};

// MMM D, YYYY h:mm a
export const dateFormatter = (inputDate, format = 'MMM D, YYYY') => {
  // if (!moment.isDate(inputDate)) {
  //   return inputDate;
  // }
  return moment(inputDate).format(format);
};
