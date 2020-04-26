import {combineReducers} from "redux";
import userReducer from "./user/user.reducer";
import hideRevealDropDownReducer from "../redux/cartDropDown/cartDropDown.reducer";


const rootReducer = combineReducers({userReducer, hideRevealDropDownReducer});

export default rootReducer;