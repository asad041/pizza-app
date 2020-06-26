const mongoose = require('mongoose');
const { getOrderStatus, setOrderStatus } = require('../utils/utils');

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    _userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    pizzas: [
      {
        _pizzaId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'pizza',
        },
        quantity: { type: Number, default: 0, required: true },
        rate: { type: Schema.Types.Decimal128, default: 0 },
      },
    ],
    status: {
      type: Number,
      required: true,
      default: 0,
      set: setOrderStatus,
      get: getOrderStatus,
    },
    comments: {
      type: String,
      trim: true,
      maxlength: 400,
    },
  },
  {
    timestamps: true,
    toObject: { getters: true, virtuals: true },
    toJSON: { getters: true, virtuals: true },
  }
);

const Order = mongoose.model('order', orderSchema);
module.exports = Order;
