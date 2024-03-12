import moviedb from "../movieDbInstance";
import { parseMovieProviders } from "../parser";

// gets the watchprovider for a movie from tmdb and converts it to a list of watch provider objects
export const getMovieWatchProvider = async (id) => {
  try {
    //get json from tmdb
    const res = await moviedb.movieWatchProviders(id).catch((error) => {
      // Handle error
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log(
          "Server responded with status code:",
          error.response.status
        );
        console.log("Response data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.log("Error message:", error.message);
      }
    });
    //parse list with watchProvider objects
    const providerarray = parseMovieProviders(res);
    return providerarray;
  } catch (error) {
    throw error;
  }
};
