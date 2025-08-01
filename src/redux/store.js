import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [logger]; // Add any middleware if needed

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
