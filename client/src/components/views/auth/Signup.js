import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import InputField from '../../common/InputField';
import TextareaField from '../../common/TextareaField';
import SubmitButton from '../../common/SubmitButton';
import { signupAction } from '../../../store/actions';
import { SIGNUP_FORM, signupValidator } from './fields';

const Signup = ({ submitting, invalid, handleSubmit }) => {
  const dispatch = useDispatch();

  return (
    <form
      className='needs-validation'
      onSubmit={handleSubmit((values) => dispatch(signupAction(values)))}
    >
      <Field {...SIGNUP_FORM.fullname} component={InputField} />
      <Field {...SIGNUP_FORM.email} component={InputField} />
      <Field {...SIGNUP_FORM.phone} component={InputField} />
      <Field {...SIGNUP_FORM.address} component={TextareaField} />
      <hr />
      <Field {...SIGNUP_FORM.password} component={InputField} />
      <Field {...SIGNUP_FORM.confirmPassword} component={InputField} />
      <SubmitButton
        text='Create an account'
        submitting={submitting}
        disabled={invalid}
      />
    </form>
  );
};

Signup.propTypes = {
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'signupForm',
  validate: signupValidator,
})(Signup);
