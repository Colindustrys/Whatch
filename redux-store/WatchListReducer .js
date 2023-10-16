const initialState = {
  movies: [],
};

// Handle action
const WatchListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
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
    case "DELETE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie !== action.payload),
      };

    default:
      return state;
  }
};

export default WatchListReducer;
