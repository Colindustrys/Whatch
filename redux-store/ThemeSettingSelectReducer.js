const initialState = {
  id: 1,
};

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
