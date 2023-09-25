import { getMovieDetailsObject } from "./endpoints/movieDetails";
import { getMovieDiscoverList } from "./endpoints/movieDiscover";
import { getAllWatchProviderObjects } from "./endpoints/allWatchProvider";

export const getMovieDetails = async (id) => {
  try {
    const movieObject = await getMovieDetailsObject(id);
    return movieObject;
  } catch (error) {
    throw error;
  }
};

export const getMovieDiscover = async (requestParams) => {
  
  if (!requestParams) {
    requestParams = { page: 1 };
  }

  try {
    movieIdList = await getMovieDiscoverList(requestParams);
    return movieIdList;
  } catch (error) {
    throw error;
  }
};

export const getAllWatchProvider = async () => {
  let allWatchProviders;
  try {
    allWatchProviders = await getAllWatchProviderObjects();
  } catch (error) {
    console.log(error);
  }
  return allWatchProviders;
};
