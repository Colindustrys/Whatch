import moviedb from "./movieDbInstance";
import { parseMovieProviders } from "./parser";

// gets the watchprovider for a movie from tmdb and converts it to a list of watch provider objects
export const getMovieWatchProvider = async (id) => {
  try {
    //get json from tmdb
    const res = await moviedb.movieWatchProviders(id);
    //parse list with watchProvider objects
    const providerarray = parseMovieProviders(res);
    return providerarray;
  } catch (error) {
    throw error;
  }
};
