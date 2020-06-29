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
      if (isExists) {
        const filteredCart = state.cart.map((pizza) =>
          pizza._id === payload._id
            ? { ...pizza, quantity: pizza.quantity + payload.quantity }
            : pizza
        );
        return {
          ...state,
          cart: filteredCart,
          quantity: state.quantity + payload.quantity,
          total: state.total + payload.price * payload.quantity,
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...payload, quantity: payload.quantity }],
        quantity: state.quantity + payload.quantity,
        total: state.total + payload.price * payload.quantity,
      };
    }

    case CONTEXT.UPDATE_CART: {
      const filtered = state.cart.filter((pizza) => pizza._id !== payload._id);
      const updatedQuantity = state.quantity - payload.quantity;
      const updatedTotal = state.total - payload.price * payload.quantity;
      return {
        ...state,
        cart: [...filtered, { ...payload, quantity: payload.quantity }],
        quantity: updatedQuantity + payload.quantity,
        total: updatedTotal + payload.price * payload.quantity,
      };
    }

    case CONTEXT.REMOVE_CART: {
      const isExists = state.cart.find((pizza) => pizza._id === payload._id);
      if (!isExists) {
        return state;
      }
      const filtered = state.cart.filter((pizza) => pizza._id !== payload._id);
      return {
        ...state,
        cart: filtered,
        quantity: state.quantity - isExists.quantity,
        total: state.total - payload.price * payload.quantity,
      };
    }

    default:
      return state;
  }
};
