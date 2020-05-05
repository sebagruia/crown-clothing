import {createStore, applyMiddleware} from "redux";
import {persistStore} from "redux-persist";
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from "./root-reducer";

 export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

// We are caching the store in the localStorage using the "redux-persist" - persistStore() function;
 export const persistor = persistStore(store); 



