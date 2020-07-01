import axios from 'axios';

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
