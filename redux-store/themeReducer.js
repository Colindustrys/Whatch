// Initially we will have a dark mode
const initialState = {
  mode: "dark",
};

// Handle our action of changing the theme
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME": {
      return { mode: action.theme, index: action.index };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
