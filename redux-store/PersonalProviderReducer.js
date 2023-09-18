const initialState = {
  provider: [],
};

// Handle action
const PersonalProviderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROVIDER_TO_PROVIDERLIST":
      let index = state.provider.findIndex(
        (provider) => provider === action.payload
      );
      if (index < 0) {
        return {
          ...state,
          provider: [...state.provider, action.payload],
        };
      } else {
        return {
          ...state,
        };
      }
    case "DELETE_PROVIDER_FROM_PROVIDERLIST":
      return {
        ...state,
        provider: state.provider.filter(
          (provider) => provider !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default PersonalProviderReducer;
