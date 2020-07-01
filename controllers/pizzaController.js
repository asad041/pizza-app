const ObjectId = require('mongoose').Types.ObjectId;
const Pizza = require('../models/Pizza');

exports.get_pizzas = async (req, res) => {
  try {
    res.json({
      message: 'Available pizzas menu',
      pizzas: [],
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

exports.get_pizza = async (req, res) => {
  try {
    const pizza = req.pizza;
    res.json({
      message: 'Single pizza',
      pizza,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

// add pizza
exports.add_pizza = async (req, res) => {
  try {
    const { name, description, image, price } = req.body;

    const pizza = new Pizza({
      name,
      description,
      image,
      price,
    });

    await pizza.save();

    res.json({
      message: 'Single pizza',
      pizza,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

// pizza authentication middleware
exports.middlware__validate_pizza = (str) => {
  return async (req, res, next) => {
    try {
      const { _pizzaId: _id } = req[str];

      const isValid = ObjectId.isValid(_id);

      if (!isValid) {
        return res.status(400).json({
          statusMessage: 'FAILED',
          message: 'The provided id for pizza is incorrect',
        });
      }

      const pizza = await Pizza.findOne({ _id });

      if (!pizza) {
        return res.status(400).json({
          statusMessage: 'FAILED',
          message: 'Oops! we were unable to find the pizza',
        });
      }

      req.pizza = pizza;
      next();
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server error');
    }
  };
};
