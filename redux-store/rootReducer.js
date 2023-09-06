import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import providerReducer from "./providerReducer";
import FreeOfChargeReducer from "./FreeOfChargeReducer";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  theme: themeReducer,
  provider: providerReducer,
  freeOfCharge: FreeOfChargeReducer,
});

export default rootReducer;
