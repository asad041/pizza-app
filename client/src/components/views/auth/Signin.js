import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { signinAction } from '../../../store/actions';
import InputField from '../../common/InputField';
import SubmitButton from '../../common/SubmitButton';
import { SIGNIN_FORM, signinValidator } from './fields';

const Signin = ({ submitting, invalid, handleSubmit }) => {
  const dispatch = useDispatch();

  return (
    <form
      className='needs-validation'
      onSubmit={handleSubmit((values) => dispatch(signinAction(values)))}
    >
      <Field {...SIGNIN_FORM.email} component={InputField} />
      <Field {...SIGNIN_FORM.password} component={InputField} />
      <SubmitButton
        text='Signin into account'
        submitting={submitting}
        disabled={invalid}
      />
    </form>
  );
};

Signin.propTypes = {
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'siginForm',
  validate: signinValidator,
})(Signin);
