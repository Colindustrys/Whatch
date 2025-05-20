import moviedb from "../movieDbInstance";
import { parseAllGenres } from "../parser";

// gets all watchproviders for movies from tmdb and converts it to a list of watch provider objects
export const getAllGenresObjects = async (id) => {
  try {
    console.log("getAllGenresObjects");
    //get json from tmdb
    const res = await moviedb.genreMovieList({ language: "en" });
    console.log("got all genres");

    //parse watchprovider obejcts from json
    const genreArray = parseAllGenres(res);

    return genreArray;
  } catch (error) {
    throw error;
  }
};
