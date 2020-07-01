const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  try {
    // Get the token from the header
    const token = req.header('x-token');

    if (!token) {
      return res.status(401).json({ message: 'Authorization failed' });
    }

    const decoded = jwt.verify(token, config.get('JWTKey'));

    req.user = decoded.user;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: 'Authorization failed', details: error.message });
  }
};
