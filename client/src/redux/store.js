import {createStore, applyMiddleware} from "redux";
import {persistStore} from "redux-persist";
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from "./root-reducer";

const middlewares = [];

// If we are not in Development mode the "logger" middleware is used, if in Production mode the "logger" middleware is not active
if(process.env.NODE_ENV === "development"){
    middlewares.push(logger)
}

 export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, ...middlewares));

// We are caching the store in the localStorage using the "redux-persist" - persistStore() function;
 export const persistor = persistStore(store); 



