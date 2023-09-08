import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import providerReducer from "./providerReducer";
import FilterMethodReducer from "./FilterMethodReducer";
import AppearanceReducer from "./AppearanceReducer";
import ThemeSettingSelectReducer from "./ThemeSettingSelectReducer";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  theme: themeReducer,
  provider: providerReducer,
  filterMethod: FilterMethodReducer,
  appearance: AppearanceReducer,
  themeSettingSelect: ThemeSettingSelectReducer,
});

export default rootReducer;
