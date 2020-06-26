const express = require('express');
const router = express.Router();

/**
 * @method GET
 * @route api/order
 * @description get all the orders
 * @access PUBLIC
 */
router.get('');

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
router.post('/');

module.exports = router;
