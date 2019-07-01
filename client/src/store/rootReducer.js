import registerReducer from "./register/reducer";
import mainReducer from "./main/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  register: registerReducer,
  main: mainReducer
});

export default rootReducer;
