import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import providerReducer from "./providerReducer";
import FilterMethodReducer from "./FilterMethodReducer";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  theme: themeReducer,
  provider: providerReducer,
  filterMethod: FilterMethodReducer,
});

export default rootReducer;
