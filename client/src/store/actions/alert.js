import { v4 as uuidv4 } from 'uuid';
import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from './index';

export const setAlert = (message, type, timeout = 5000, dismiss = true) => (
  dispatch
) => {
  const id = uuidv4();

  dispatch({
    type: SET_NOTIFICATION,
    payload: { message, type, id, dismiss },
  });

  setTimeout(
    () => dispatch({ type: REMOVE_NOTIFICATION, payload: id }),
    timeout
  );
};
