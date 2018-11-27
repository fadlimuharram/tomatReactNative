import { createStore, combineReducers, compose } from "redux";
import probabilityReducer from "./reducers/probability";

const rootReducer = combineReducers({
  proba: probabilityReducer
});

let composeEnhancers = compose;

if (__DEV__) window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
