export const HIDE_REVEAL_DROPDOWN = "HIDE_REVEAL_DROPDOWN";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";


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

export const removeItemAction = (item =>{
  return{
    type:REMOVE_ITEM,
        payload:item
  }
})

export const clearItemFromCartAction = (item) =>{
    return{
        type:REMOVE_ITEM_FROM_CART,
        payload:item
    }
}

