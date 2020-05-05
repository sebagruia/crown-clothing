import SHOP_DATA from "./SHOP_DATA";

const initialState = {
  collections: SHOP_DATA,
};

const shopReducer = (state = initialState, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export default shopReducer;
