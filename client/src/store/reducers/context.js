import { CONTEXT } from '../actions';

const initialState = {
  cart: [],
  quantity: 0,
  total: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONTEXT.SET_PROPS:
      return { ...state, ...payload };

    case CONTEXT.RESET_PROPS:
      return initialState;

    case CONTEXT.ADD_CART: {
      const isExists = state.cart.find((pizza) => pizza._id === payload._id);
      let filteredCart = [];
      if (isExists) {
        filteredCart = state.cart.map((pizza) =>
          pizza._id === payload._id
            ? { ...pizza, quantity: pizza.quantity + payload.quantity }
            : pizza
        );
      } else {
        filteredCart = [
          ...state.cart,
          { ...payload, quantity: payload.quantity },
        ];
      }
      return {
        ...state,
        cart: filteredCart,
        quantity: state.quantity + payload.quantity,
        total: state.total + payload.price * payload.quantity,
      };
    }

    case CONTEXT.UPDATE_CART: {
      console.log(payload);
      const index = state.cart.findIndex((pizza) => pizza._id === payload._id);
      const pizzaObject = state.cart[index];
      // const filtered = state.cart.filter((pizza) => pizza._id !== payload._id);
      const updatedQuantity = state.quantity - pizzaObject.quantity;
      const updatedTotal =
        state.total - pizzaObject.price * pizzaObject.quantity;
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, index),
          { ...state.cart[index], quantity: payload.quantity },
          ...state.cart.slice(index + 1),
        ],
        // cart: [...filtered, { ...payload, quantity: payload.quantity }],
        quantity: updatedQuantity + payload.quantity,
        total: updatedTotal + payload.price * payload.quantity,
      };
    }

    case CONTEXT.REMOVE_CART: {
      const isExists = state.cart.find((pizza) => pizza._id === payload._id);
      if (!isExists) {
        return state;
      }
      return {
        ...state,
        cart: state.cart.filter((pizza) => pizza._id !== payload._id),
        quantity: state.quantity - isExists.quantity,
        total: state.total - isExists.price * isExists.quantity,
      };
    }

    default:
      return state;
  }
};
