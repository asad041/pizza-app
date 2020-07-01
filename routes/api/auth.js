const express = require('express');
const router = express.Router();

const validator = require('../../middleware/validator');
const auth_controller = require('../../controllers/authController');
const {
  validateSignin,
  validateSignup,
} = require('../../models/UserValidation');
const auth = require('../../middleware/auth');

/**
 * @method POST
 * @route api/auth/signin
 * @access PUBLIC
 */
router.post('/signin', validateSignin, validator, auth_controller.signin);

/**
 * @method POST
 * @route api/auth/signup
 * @access PUBLIC
 */
router.post('/signup', validateSignup, validator, auth_controller.signup);

/**
 * @method GET
 * @route api/auth
 * @description user authentication
 * @access PUBLIC
 */
router.get('/', auth, auth_controller.authenticate);

module.exports = router;
