const ObjectId = require('mongoose').Types.ObjectId;
const Order = require('../models/Order');
const { getOrderStatus } = require('../utils/utils');

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
    const { _id: _userId } = req.user;

    const orders = await Order.aggregate([
      {
        $match: { _userId: ObjectId(_userId) },
      },
      {
        $addFields: {
          pizza: { $ifNull: ['$pizza', []] },
        },
      },
      {
        $lookup: {
          from: 'pizzas',
          localField: 'pizzas._pizzaId',
          foreignField: '_id',
          as: 'details',
        },
      },
      {
        $project: {
          status: 1,
          pizzas: {
            quantity: 1,
            price: 1,
            _pizzaId: 1,
          },
          createdAt: 1,
          updatedAt: 1,
          details: { name: 1, description: 1, image: 1 },
        },
      },
    ]);

    let result = [];
    let total = 0;
    orders.map((doc) => {
      let subTotal = 0;
      doc.pizzas.map((pizza) => {
        subTotal = subTotal + pizza.quantity * pizza.price;
      });
      let pizzas = [];
      for (let i in doc.pizzas) {
        let price = doc.pizzas[i].price;
        pizzas.push({
          ...doc.pizzas[i],
          price: price.toString(),
          ...doc.details[i],
        });
      }
      result.push({
        _id: doc._id,
        status: getOrderStatus(doc.status),
        pizzas,
        total: total + subTotal,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
      });
    });

    res.json({
      message: 'Orders found',
      orders: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

exports.save_order = async (req, res) => {
  try {
    const { _id: _userId } = req.user;
    const { pizzas, comments } = req.body;

    if (!pizzas || pizzas.length < 1) {
      return res.status(400).json({
        message: "Oops, something went wrong, you can't submit an empty order",
      });
    }

    const order = new Order({
      _userId,
      pizzas,
      status: 'pending',
      ...(comments && { comments }),
    });

    await order.save();

    res.json({
      message: 'Your order has been submitted successfully',
      order,
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
