import {createSelector} from "reselect";

// Input Selector -  takes the whole state as argument and returns only o piece of it - the one that we are interested in
const selectCart = state=> state.cartReducer;

// Output Selector -  takes as argument an array of Input or other Output selectors and a function that will return the value we want out of the selector
export const selectCartItems = createSelector([selectCart], cartReducer=>cartReducer.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems => cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,0
  ));