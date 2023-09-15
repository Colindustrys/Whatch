const initialState = {
  movies: [0, 1, 2, 3],
};

// Handle action
const SeenListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_SEENLIST":
      let index = state.movies.findIndex((movie) => movie === action.payload);
      if (index < 0) {
        return {
          ...state,
          movies: [...state.movies, action.payload],
        };
      } else {
        return {
          ...state,
        };
      }
    case "DELETE_MOVIE_FROM_SEENLIST":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie !== action.payload),
      };

    default:
      return state;
  }
};

export default SeenListReducer;
