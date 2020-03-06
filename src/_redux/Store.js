import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger, promise } from "../middleware";

import auth from "../_reducers/Auth";
import profile from "../_reducers/Profile";
import trains from "../_reducers/Train";
import routes from "../_reducers/Route";

// Global state
const rootReducers = combineReducers({
  auth,
  profile,
  trains,
  routes
});

// Setup store for Redux
const Store = createStore(rootReducers, applyMiddleware(logger, promise));

export default Store;
