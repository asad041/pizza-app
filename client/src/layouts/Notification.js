import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

// eslint-disable-next-line
const Notification = ({ content }) => {
  const alerts = useSelector((state) => state.alert);
  const { addToast } = useToasts();

  useEffect(() => {
    alerts.map((alert) => {
      const { message, type, dismiss } = alert;
      addToast(message, {
        appearance: type,
        autoDismiss: dismiss ? dismiss : true,
      });
    });
  }, [alerts, addToast]);

  return <Fragment></Fragment>;
};

Notification.propTypes = {
  contents: PropTypes.string,
};

export default Notification;
