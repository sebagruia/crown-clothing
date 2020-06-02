import {
  HIDE_REVEAL_DROPDOWN,
  ADD_ITEM,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ITEM,
  EMPTY_CART,
  FETCH_ALL_CART_ITEMS,
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
    case FETCH_ALL_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case EMPTY_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
