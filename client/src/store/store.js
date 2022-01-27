import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducer/reducer";


const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
  rootReducer,
  composer(applyMiddleware(thunkMiddleware))
);
export default Store;
