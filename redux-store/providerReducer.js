// Initially array of provider is empty
const initialState = {
  provider: [],
};

// Handle action
const providerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROVIDER":
      return {
        ...state,
        provider: action.payload,
      };
    //@Alex: Ganzes Array übergeben oder den truen Provider hinzufügen?
    case "ADD_PROVIDER":
      return {
        ...state,
        provider: [...state.provider, action.payload],
      };
    default:
      return state;
  }
};

export default providerReducer;
