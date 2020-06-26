const Order = require('../models/Order');

exports.get_order = async (req, res) => {
  try {
    const order = req.order;
    res.json({
      message: 'Single order',
      order,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

exports.get_orders = async (req, res) => {
  try {
    res.json({
      message: 'Orders found',
      orders: [],
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

exports.save_order = async (req, res) => {
  try {
    res.json({
      message: 'Your order has been submitted successfully',
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

// order authentication middleware
exports.middlware__validate_order = (str) => {
  return async (req, res, next) => {
    try {
      const { _orderId: _id } = req[str];

      const isValid = ObjectId.isValid(_id);

      if (!isValid) {
        return res.status(400).json({
          statusMessage: 'FAILED',
          message: 'Oops, we were unable to find the order',
        });
      }

      const order = await Order.findOne({ _id });

      if (!order) {
        return res.status(400).json({
          statusMessage: 'FAILED',
          message: 'Oops! we were unable to find the order',
        });
      }

      req.order = order;
      next();
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server error');
    }
  };
};
