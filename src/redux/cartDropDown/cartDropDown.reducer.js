import { HIDE_REVEAL_DROPDOWN, ADD_ITEM } from "./cartDropDown.action";
import { addItemToCart } from "./cart.utils";

const initialState = {
  visibility: false,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_REVEAL_DROPDOWN:
      return {
        ...state,
        visibility: action.payload,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;