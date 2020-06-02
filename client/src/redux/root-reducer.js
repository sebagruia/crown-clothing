import {combineReducers} from "redux";

// import {persistReducer} from "redux-persist"; //Because we want to use redux-persist we need to import the "persistReducer" 
// import storage from "redux-persist/lib/storage"; //This imports "storage" from redux-persist library, and is actualy the  the window.localStorage

import userReducer from "./user/user.reducer";
import cartReducer from "../redux/cartDropDown/cartDropDown.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";


// const persistConfig = {
//     key:'root', //the key is the way we call the localStorage
//     storage,//The actual window.localStorage
//     whitelist:['cartReducer'] // the whiteList indicates what part of the store we want to actualy cache it, in this case we want to store the "cartReducer" part, NOTICE the whitelist: is an array of STRINGS
// }


 const rootReducer = combineReducers({userReducer, cartReducer, directoryReducer, shopReducer});

//Because we whant to use redux-persist persistReducer we will export default the "persistReducer", instead of the clasical "rootReducer", and the "persistReducer" will take as arguments the "rootReducer" as well as the "persistConfig"
// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;