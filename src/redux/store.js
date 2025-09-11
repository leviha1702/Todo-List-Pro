import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const middleware = [thunk, logger]; // Add any middleware if needed

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
