import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import users from "./modules/users";
import fortune from "./modules/fortune";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ users, fortune });

const store = createStore(rootReducer, enhancer);

export default store;
