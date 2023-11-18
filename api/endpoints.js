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

//request params is a json with values set
export const getMovieDiscover = async (requestParams) => {
  if (!requestParams) {
    requestParams = { page: 1 };
  }

  try {
    const movieArray = await getMovieDiscoverList(requestParams);
    return movieArray;
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

//gets movies for all categories and returns them as an array of objects that have a title prop and movieList prop
export const getBrowse = async () => {
  let titleAndMoviearrayObjectList;
  try {
    titleAndMoviearrayObjectList = await getBrowseMovieLists();
  } catch (error) {
    throw error;
  }
  return titleAndMoviearrayObjectList;
};
