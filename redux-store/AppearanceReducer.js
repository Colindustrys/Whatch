import { base, darkTheme, lightTheme } from "./Theme";

//TODO: rename theme so its not theme.theme in styledComps

const initialState = {
  appearance: { ...darkTheme, ...base },
  isTablet: null,
};

const AppearanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      let newState = {
        ...state,
        appearance: { ...state.appearance, ...action.baseTheme },
      };
      return newState;
    case "DETECT_DEVICE": {
      let newState = {
        ...state,
        isTablet: action.payload,
      };
      return {...newState};
    }
    default:
      return state;
  }
};

export default AppearanceReducer;
