const express = require('express');
const auth = require('../../middleware/auth');
const order_controller = require('../../controllers/OrderController');

const router = express.Router();

/**
 * @method GET
 * @route api/order
 * @description get all the orders
 * @access PUBLIC
 */
router.get('', auth, order_controller.get_orders);

/**
 * @method GET
 * @route api/order/:_orderId
 * @description get order by id
 * @access PUBLIC
 */
router.get('/:_orderId');

/**
 * @method POST
 * @route api/order
 * @description place an order
 * @access PUBLIC
 */
router.post('/', auth, order_controller.save_order);

module.exports = router;
