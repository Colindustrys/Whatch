const initialState = {
  //TODO: at the first start of app --> getMostUsedProvider()
  //TODO: create provider-model
  provider: [
    { label: "Netflix", id: 0, value: false },
    { label: "Amazon Prime", id: 1, value: false },
    { label: "Disney Plus", id: 2, value: false },
    { label: "Netflix", id: 3, value: false },
    { label: "Amazon Prime", id: 4, value: false },
    { label: "Disney Plus", id: 5, value: false },
    { label: "Netflix", id: 6, value: false },
    { label: "Amazon Prime", id: 7, value: false },
    { label: "Disney Plus", id: 8, value: false },
    { label: "Amazon Prime", id: 9, value: false },
    { label: "Disney Plus", id: 10, value: false },
    { label: "Netflix", id: 11, value: false },
    { label: "Amazon Prime", id: 12, value: false },
    { label: "Disney Pllllus", id: 13, value: false },
  ],
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
