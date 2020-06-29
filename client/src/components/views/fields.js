import {
  validateForm,
  required,
  format,
  email,
  length,
} from 'redux-form-validators';

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const namingRegex = /^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/;
const phoneRegex = /^\d{1,12}$/;

export const USER_INFORMATION_FORM = {
  fullname: {
    label: 'Fullname',
    name: 'fullname',
    type: 'text',
    placeholder: 'Your name',
    required: true,
  },
  phone: {
    label: 'phone',
    name: 'phone',
    type: 'text',
    placeholder: 'Cell no.',
    required: true,
  },
  email: {
    label: 'Email address',
    name: 'email',
    type: 'email',
    placeholder: 'email@example.com',
    required: true,
  },
  address: {
    label: 'Delivery Address',
    name: 'address',
    type: 'textarea',
    placeholder: 'Enter your full address (city, street no, building no)',
    required: true,
  },
};

export const PAYMENT_METHODS_FORM = {};

export const validateUserForm = validateForm({
  fullname: [
    required(),
    format({ with: namingRegex, message: 'invalid format' }),
  ],
  phone: [required(), format({ with: phoneRegex, message: 'invalid format' })],
  email: [required(), email()],
  address: [required(), length({ min: 2, max: 50 })],
});
