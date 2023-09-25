import { combineReducers } from "redux";
import ProviderReducer from "./ProviderReducer";
import FilterMethodReducer from "./FilterMethodReducer";
import AppearanceReducer from "./AppearanceReducer";
import ThemeSettingSelectReducer from "./ThemeSettingSelectReducer";
import WatchListReducer from "./WatchListReducer ";
import SeenListReducer from "./SeenListReducer";
import PersonalProviderReducer from "./PersonalProviderReducer";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  filterMethod: FilterMethodReducer,
  appearance: AppearanceReducer,
  themeSettingSelect: ThemeSettingSelectReducer,
  watchList: WatchListReducer,
  seenList: SeenListReducer,
  providerList: ProviderReducer,
  personalProviderList: PersonalProviderReducer,
});

export default rootReducer;
