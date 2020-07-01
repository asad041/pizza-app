const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
      trim: true,
      sparse: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
      maxlength: 255,
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

const User = mongoose.model('user', userSchema);
module.exports = User;
