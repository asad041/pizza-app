const express = require('express');
const router = express.Router();

const pizza_controller = require('../../controllers/pizzaController');

/**
 * @method POST
 * @route api/pizza
 * @description add pizza to the menu
 * @access PUBLIC
 */
router.post('/', pizza_controller.add_pizza);

/**
 * @method GET
 * @route api/pizza
 * @description get all the avialable pizzas
 * @access PUBLIC
 */
router.get('/', pizza_controller.get_pizzas);

/**
 * @method GET
 * @route api/pizza/:_pizzaId
 * @description get a single pizza
 * @access PUBLIC
 */
router.get(
  '/:_pizzaId',
  pizza_controller.middlware__validate_pizza('params'),
  pizza_controller.get_pizza
);

module.exports = router;
