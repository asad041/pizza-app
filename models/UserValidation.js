const { check } = require('express-validator');
const User = require('./User');

const check_password = () => {
  return check(
    'password',
    'The password must be 8+ chars long and contain a number'
  )
    .not()
    .isEmpty()
    .withMessage('The password is required')
    .bail()
    .isLength({ min: 8 })
    .withMessage('The password must contain at least 8 characters')
    .bail()
    .isLength({ max: 20 })
    .withMessage('The password can contain max 20 characters')
    .bail()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    .withMessage(
      'Must use at least one letter, one number and one special character'
    )
    .bail()
    .not()
    .isIn(['pass1234', 'password', 'god12345'])
    .withMessage('Do not use a common word as the password');
};

const check_confirm_password = () => {
  return check('confirmPassword', 'The confirm password is required')
    .not()
    .isEmpty()
    .bail()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('The confirm password does not match the password');
      }
      return true;
    });
};

const validateSignin = [
  check('email', 'email is required')
    .not()
    .isEmpty()
    .bail()
    .isEmail()
    .withMessage('Make sure email format is correct')
    .bail(),
  check('password', 'password is required').not().isEmpty().bail(),
];

const validateSignup = [
  check('fullname', 'The fullname is required')
    .not()
    .isEmpty()
    .bail()
    .isLength({ min: 2 })
    .withMessage('Must be at least 2 characters long')
    .bail()
    .isLength({ max: 255 })
    .withMessage('Must be less than 255 characters')
    .bail()
    .matches(/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/)
    .withMessage('Must be only alphabetical characters')
    .bail(),
  check('email', 'The email is required')
    .not()
    .isEmpty()
    .bail()
    .isEmail()
    .withMessage('Make sure email format is correct')
    .custom((email) => {
      return User.findOne({ email }).then((user) => {
        if (user) {
          return Promise.reject('The email address already in use');
        }
      });
    }),
  check('phone', 'The phone no. is required').not().isEmpty(),
  check('address', 'The address is required')
    .not()
    .isEmpty()
    .bail()
    .isLength({ min: 2 })
    .withMessage('Must be at least 2 characters long')
    .bail()
    .isLength({ max: 255 })
    .withMessage('Must be less than 255 characters'),
  check_password(),
  check_confirm_password(),
];

module.exports = {
  validateSignin,
  validateSignup,
};
