import {combineReducers} from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "../redux/cartDropDown/cartDropDown.reducer";


const rootReducer = combineReducers({userReducer, cartReducer});

export default rootReducer;