const util = require('util');
const { validationResult } = require('express-validator');

const validator = (req, res, next) => {
  try {
    // validate the request
    const errors = validationResult(req).array({ onlyFirstError: true });
    if (util.isArray(errors) && errors.length > 0) {
      const extractedErrors = [];
      errors.map((err) => extractedErrors.push({ [err.param]: err.msg }));
      return res.status(400).json({ errors: extractedErrors[0] });
    }

    return next();
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

module.exports = validator;
