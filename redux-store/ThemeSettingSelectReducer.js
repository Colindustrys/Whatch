// Initially we will have a dark mode
const initialState = {
  id: 1,
};

// Handle our action of changing the theme
const themeSettingSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_ID": {
      return { id: action.id };
    }
    default: {
      return state;
    }
  }
};

export default themeSettingSelectReducer;
