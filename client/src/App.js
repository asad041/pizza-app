import React from 'react';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

import store from './store';
import Layout from './layouts/Layout';
import Notification from './layouts/Notification';
import { setAPIUrl } from './utils/utils';

import 'bootstrap/dist/css/bootstrap.min.css';

setAPIUrl();

function App() {
  return (
    <Provider store={store}>
      <ToastProvider placement='bottom-right'>
        <Notification />
        <Layout />
      </ToastProvider>
    </Provider>
  );
}

export default App;
