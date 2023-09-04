import { parseMovie } from "./parser";
import { getMovieDetailsObject } from "./movieDetails";
const { MovieDb } = require("moviedb-promise");

export const getMovieDetails = async (id) => {
  try {
    //get movieobject
    movieObject = await getMovieDetailsObject(id);
    //return movie object
    return movieObject;
  } catch (e) {
    throw e;
  }
};
