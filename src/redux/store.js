import { createStore } from "redux";
import TodoReducer from "./reducer/TodoReducer";

const store = createStore(
   TodoReducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
 export default store