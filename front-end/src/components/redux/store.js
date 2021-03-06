import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import studentsReducer from "./reducer";

const rootReducer = studentsReducer;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
