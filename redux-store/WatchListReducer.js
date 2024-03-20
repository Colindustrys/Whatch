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
      let deleteIndex = state.movies.findIndex(
        (movie) => movie._id === action.payload._id
      );
      if (deleteIndex !== -1) {
        let updatedMovies = [...state.movies];
        updatedMovies.splice(deleteIndex, 1);
        return {
          ...state,
          movies: updatedMovies,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default WatchListReducer;
