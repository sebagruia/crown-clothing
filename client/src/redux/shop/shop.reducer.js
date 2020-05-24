import {FETCH_COLLECTIONS_START} from "./shop.actions";
import {FETCH_COLLECTIONS_SUCCESS} from "./shop.actions";
import {FETCH_COLLECTIONS_FAILURE} from "./shop.actions";

const initialState = {
  collections: null,
  isFetching:false,
  loadingSpinner:true, 
  errorMessage:''
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return{
        ...state, isFetching:action.payload
      }
    case FETCH_COLLECTIONS_SUCCESS:
      return{
        ...state, collections:action.payload, isFetching:false, loadingSpinner:false,
      }
    case FETCH_COLLECTIONS_FAILURE:
      return{
        ...state, isFetching:false, errorMessage:action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;
