import { createStore, combineReducers, applyMiddleware } from "redux";

import auth from "../_reducers/auth";
import user from "../_reducers/user";
import daftar from "../_reducers/daftar";
import bayar from "../_reducers/bayar";
import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  auth,
  user,
  daftar,
  bayar
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
