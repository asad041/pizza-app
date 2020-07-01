import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import alert from './alert';
import context from './context';

export default combineReducers({
  alert,
  context,
  form,
});
