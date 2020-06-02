import { firestore } from "../../firebase/firebase.utils";
export const HIDE_REVEAL_DROPDOWN = "HIDE_REVEAL_DROPDOWN";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const EMPTY_CART = "EMPTY_CART";
export const FETCH_ALL_CART_ITEMS = "FETCH_ALL_CART_ITEMS";

export const hideRevealDropDownAction = (boolean) => {
  return {
    type: HIDE_REVEAL_DROPDOWN,
    payload: !boolean,
  };
};

export const addItemAction = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const removeItemAction = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

export const clearItemFromCartAction = (item) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item,
  };
};

export const emptyCartItems = ()=>{
  return {
    type: EMPTY_CART,
    payload: [],
  }
}


export const fetchAllCartItemsAction = (currentUSerId) => async (dispatch) => {
  // const cartItemsRef = firestore.collection("cartItems");
  const cartItemsRef = firestore.collection(`/users/${currentUSerId}/cartItems`);
  try {
    cartItemsRef.onSnapshot((snapshot) => {
      const cartItems = snapshot.docs.map((item) => {
        return item.data();
      });

        dispatch({
          type: FETCH_ALL_CART_ITEMS,
          payload: cartItems,
        });

    });

  } catch (error) {
    console.log(`Couldn't fetch cartItems ${error}`);
  }
};
