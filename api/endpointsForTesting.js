import { getMovieDetailsObject } from "./endpoints/movieDetails";

export const getMovieDetails = async (id) => {
  try {
    //add 1s delay to simulate slow internet 
    const delayTime = 2000;
    await new Promise((resolve) => setTimeout(resolve, delayTime));

    //throw error to simulate no internet
    //throw new Error("no internet");

    //get movieobject
    movieObject = await getMovieDetailsObject(id);
    //return movie object
    return movieObject;
  } catch (e) {
    throw e;
  }
};
