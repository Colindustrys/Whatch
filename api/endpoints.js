import { getMovieDetailsObject } from "./movieDetails";
import { getMovieDiscoverList } from "./movieDiscover";

export const getMovieDetails = async (id) => {
  try {
    movieObject = await getMovieDetailsObject(id);
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
