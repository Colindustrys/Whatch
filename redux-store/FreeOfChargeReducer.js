// Initially we will have a dark mode
const initialState = {
  free: true,
};

// Handle our action of changing the theme
const FreeOfChargeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FREE": {
      return { ...state, free: !state.free };
    }
    default: {
      return state;
    }
  }
};

export default FreeOfChargeReducer;
