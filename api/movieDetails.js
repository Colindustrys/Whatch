import moviedb from "./movieDbInstance";
import { parseMovie } from "./parser";
import { getMovieWatchProvider } from "./watchProvider";

// gets the movie info from tmdb and converts it to a movie object then returns that
export const getMovieDetailsObject = async (id) => {

  try {
    //get json from tmdb
    const res = await moviedb.movieInfo(id);

    //parse json to movie object
    let movieObject = parseMovie(res);

    //set flatrate provider for the movie, if there are none the list is empty
    movieObject.watchprovider = await getMovieWatchProvider(id);

    return movieObject;
  } catch (error) {
    throw error;
  }
};
