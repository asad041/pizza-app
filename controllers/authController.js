const config = require('config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

// authenticate the current user
exports.authenticate = async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await User.findOne({ _id }).select('-password');

    if (!user) {
      return res.status(400).json({ message: 'Authentication failed' });
    } else if (!user.isActive) {
      return res.status(400).json({
        message:
          'your account has been disabled in the Pizza point Platform, please contact the support team',
      });
    }

    const payload = {
      user: {
        _id: user._id,
        fullname: user.fullname,
      },
    };

    jwt.sign(
      payload,
      config.get('JWTKey'),
      { expiresIn: config.get('JWTExpires') },
      (err, token) => {
        if (err) throw err;
        res.json({ user, token });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

// signin
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: 'We were unable to find a user with that email',
      });
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.status(400).json({
        message: 'Incorrect email address or password',
      });
    }

    if (!user.isActive) {
      return res.status(400).json({
        message: 'Your account has been suspended by the pizza point',
      });
    }

    delete user['password'];

    const payload = {
      user: {
        _id: user._id,
        fullname: user.fullname,
      },
    };

    jwt.sign(
      payload,
      config.get('JWTKey'),
      { expiresIn: config.get('JWTExpires') },
      (err, token) => {
        if (err) throw err;
        res.json({ user, token });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

// sign up
exports.signup = async (req, res) => {
  try {
    const { fullname, email, password, phone, address } = req.body;

    let user = new User({
      fullname,
      email,
      password,
      phone,
      address,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    delete user['password'];

    const payload = {
      user: {
        _id: user._id,
        fullname: user.fullname,
      },
    };

    jwt.sign(
      payload,
      config.get('JWTKey'),
      { expiresIn: config.get('JWTExpires') },
      (err, token) => {
        if (err) throw err;
        res.json({ user, token });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};
