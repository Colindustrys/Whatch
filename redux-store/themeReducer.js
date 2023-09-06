// Initially we will have a dark mode
const initialState = {
  mode: "dark",
  id: 1,
};

// Handle our action of changing the theme
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME": {
      return { mode: action.mode, id: action.id };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
