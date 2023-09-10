const initialState = {
  freeToCharge: true,
};

const FilterMethodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FREE_TO_CHARGE": {
      return { ...state, freeToCharge: !state.freeToCharge };
    }
    default: {
      return state;
    }
  }
};

export default FilterMethodReducer;
