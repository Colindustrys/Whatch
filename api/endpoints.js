import { getMovieDetailsObject } from "./endpoints/movieDetails";
import { getMovieDiscoverList } from "./endpoints/movieDiscover";
import { getAllWatchProviderObjects } from "./endpoints/allWatchProvider";
import { getBrowseMovieLists } from "./endpoints/browse";


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
    const movieListObject = await getMovieDiscoverList(requestParams);
    return movieListObject;
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


export const getBrowse = async () => {
  let arrayWithMovieListObjects;
  try {
    arrayWithMovieListObjects = await getBrowseMovieLists();
  } catch (error) {
    throw error;
  }
  return arrayWithMovieListObjects;
};
