import registerReducer from "./registerReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  register: registerReducer
});

export default rootReducer;
