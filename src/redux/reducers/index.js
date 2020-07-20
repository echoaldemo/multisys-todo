import taskReducer from "./tasks";
import inputReducer from "./input";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tasks: taskReducer,
  input: inputReducer,
});

export default rootReducer;
