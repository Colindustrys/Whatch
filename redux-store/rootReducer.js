import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import providerReducer from "./providerReducer";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  theme: themeReducer,
  provider: providerReducer,
});

export default rootReducer;
