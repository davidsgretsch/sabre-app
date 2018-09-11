import { combineReducers } from "redux";
import { playersReducer } from "./playersReducer";
import { filterReducer } from "./filterReducer";

const rootReducer = combineReducers({
  players: playersReducer,
  filters: filterReducer
});

export default rootReducer;
