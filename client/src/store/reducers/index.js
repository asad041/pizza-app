import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import context from './context';

export default combineReducers({
  context,
  form,
});
