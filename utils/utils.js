const config = require('config');

const orderStatus = config.get('orderStatus');

const setOrderStatus = (string) =>
  orderStatus.findIndex((value) => value === string);
const getOrderStatus = (number) => orderStatus[parseInt(number)];

module.exports = {
  setOrderStatus,
  getOrderStatus,
};
