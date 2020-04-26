import { HIDE_REVEAL_DROPDOWN } from "./cartDropDown.action";

const initialState = {
  visibility: false,
};

 const hideRevealDropDownReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_REVEAL_DROPDOWN:
      return {
        ...state,
        visibility: action.payload,
      };
    default:
      return state;
  }
};

export default hideRevealDropDownReducer;