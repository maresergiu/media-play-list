import { createStore, combineReducers } from "redux";
import loaderReducer from "./loader/reducer";

const allReducers = combineReducers({
    loader: loaderReducer
});

const store = createStore(allReducers);

export default store;