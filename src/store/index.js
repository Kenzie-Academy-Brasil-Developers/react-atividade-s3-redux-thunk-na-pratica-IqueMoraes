import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import UserReducer from "./modules/user/reducer";

const reducer = combineReducers({ user: UserReducer });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
