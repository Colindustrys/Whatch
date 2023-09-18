const initialState = {
  //TODO: at the first start of app --> getMostUsedProvider()
  //TODO: create provider-model
  provider: [],
};

// Handle action
const ProviderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROVIDER":
      return {
        ...state,
        provider: action.payload,
      };
    default:
      return state;
  }
};

export default ProviderReducer;
