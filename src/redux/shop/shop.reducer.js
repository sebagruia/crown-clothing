import {SET_SHOP_COLLECTIONS} from "./shop.actions";

const initialState = {
  // collections: SHOP_DATA,
  collections: null,
};

// const shopReducer = (state = initialState, action) => {
//   switch (action.payload) {
//     default:
//       return state;
//   }
// };
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOP_COLLECTIONS:
      return{
        ...state, collections:action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;
