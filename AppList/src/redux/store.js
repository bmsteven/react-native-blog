import {combineReducers, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import data from "./reducers/data"

const middleware = [thunk]

const initialState = {};

const reducers = combineReducers({
    data: data
})

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
  );
  
export default store;