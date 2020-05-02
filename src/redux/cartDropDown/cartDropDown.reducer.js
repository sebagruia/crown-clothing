import {
  HIDE_REVEAL_DROPDOWN,
  ADD_ITEM,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ITEM,
} from "./cartDropDown.action";
import { addItemToCart, removeItem } from "./cart.utils";

const initialState = {
  visibility: false,
  cartItems: [],
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
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
