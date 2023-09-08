import { base, darkTheme, lightTheme } from "./Theme";

const initialState = {
  theme: { ...darkTheme, ...base },
};

const AppearanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      let newState = {
        ...state,
        theme: { ...state.theme, ...action.baseTheme },
      };
      return newState;
    default:
      return state;
  }
};

export default AppearanceReducer;
