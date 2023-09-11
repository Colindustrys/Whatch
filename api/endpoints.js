import { getMovieDetailsObject } from "./movieDetails";

export const getMovieDetails = async (id) => {
  try {
    //get movieobject
    movieObject = await getMovieDetailsObject(id);
    //return movie object
    return movieObject;
  } catch (error) {
    throw error;
  }
};