const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizzaSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      maxlength: 100,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 255,
    },
    image: {
      type: String,
    },
    price: {
      type: Schema.Types.Decimal128,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
    toObject: { getters: true, virtuals: true },
    toJSON: { getters: true, virtuals: true },
  }
);

const Pizza = mongoose.model('pizza', pizzaSchema);
module.exports = Pizza;
