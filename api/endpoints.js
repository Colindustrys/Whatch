import { getMovieDetailsObject } from "./movieDetails";
import { getAllWatchProviderObjects } from "./allWatchProvider";
import moviedb from "./movieDbInstance";

export const getMovieDetails = async (id) => {
  try {
    //get movieobject
    const movieObject = await getMovieDetailsObject(id);
    getAllWatchProvider();
    //return movie object
    return movieObject;
  } catch (error) {
    throw error;
  }
};

export const getAllWatchProvider = async () => {
  let allWatchProviders
  try {
    allWatchProviders = await getAllWatchProviderObjects();
    //console.log(allWatchProviders);
  } catch (error) {
    console.log(error);
  }
  return allWatchProviders;
};
