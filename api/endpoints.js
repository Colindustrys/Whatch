import { getMovieDetailsObject } from "./endpoints/movieDetails";
import { getMovieDiscoverList } from "./endpoints/movieDiscover";
import { getBrowseMovieLists } from "./endpoints/browse";

export const getMovieDetails = async (id) => {
  try {
    const movieObject = await getMovieDetailsObject(id);
    return movieObject;
  } catch (error) {
    console.log(error);
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
    console.log(error);
    throw error;
  }
};

//gets movies for all categories and returns them as an array of objects that have a title prop and movieList prop
export const getBrowse = async () => {
  console.log("getBrowse");
  let titleAndMoviearrayObjectList;
  try {
    titleAndMoviearrayObjectList = await getBrowseMovieLists();
  } catch (error) {
    console.log(error);
    throw error;
  }
  return titleAndMoviearrayObjectList;
};
