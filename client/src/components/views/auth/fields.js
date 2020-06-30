import {
  email,
  format,
  length,
  required,
  validateForm,
  addValidator,
} from 'redux-form-validators';

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const namingRegex = /^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/;
const phoneRegex = /^\d{1,12}$/;

const matches = addValidator({
  validator: (options, value, allValues) => {
    if (value !== allValues[0][options.matchWith]) {
      return {
        id: `form.errors.${options.field}`,
        defaultMessage: `Does't match with the ${options.matchWith} field`,
      };
    }
  },
});

export const signupValidator = validateForm({
  fullname: [
    required(),
    format({ with: namingRegex, message: 'Must only be alphabetical chars' }),
  ],
  email: [required(), email()],
  phone: [required()],
  address: [required(), length({ min: 3, max: 100 })],
  password: [
    required(),
    length({ min: 8, max: 20 }),
    format({
      with: passwordRegex,
      message: 'Must use at least one letter, one number and one special chars',
    }),
  ],
  confirmPassword: [
    required(),
    matches({ field: 'confirmPassword', matchWith: 'password' }),
  ],
});

export const SIGNUP_FORM = {
  fullname: {
    label: 'Full name',
    name: 'fullname',
    type: 'text',
    placeholder: 'Your Fullname',
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    placeholder: 'example@company.com',
    required: true,
  },
  phone: {
    label: 'Phone no',
    name: 'phone',
    type: 'text',
    placeholder: 'Cell no.',
    required: true,
  },
  address: {
    label: 'Address',
    name: 'address',
    type: 'textarea',
    placeholder: 'Please enter your full address',
    required: true,
  },
  password: {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: null,
    required: true,
    minLength: 8,
    maxLength: 20,
  },
  confirmPassword: {
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
    placeholder: null,
    required: true,
    minLength: 8,
    maxLength: 20,
  },
};

export const signinValidator = validateForm({
  email: [required(), email()],
  password: [required()],
});

export const SIGNIN_FORM = {
  email: {
    label: 'Email address',
    name: 'email',
    type: 'email',
    placeholder: 'example@company.com',
    required: true,
  },
  password: {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: null,
    required: true,
  },
};
