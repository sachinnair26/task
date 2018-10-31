import { createStore } from "redux";
import reducer from "./reducer";
import rootReducer from "./rootReducer";
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;