import { LogBox } from "react-native";
import moviedb from "../movieDbInstance";
import { parseDiscoverList } from "../parser";

//searches for string and returns an list of movies
export const SearchMovie = async (string, page) => {
  const requestParams = {
    query: string,
    page: page,
  };

  console.log(requestParams);

  try {
    let searchresultsJson = await moviedb.searchMovie(requestParams);

    //parse movies
    const movieArray = parseDiscoverList(searchresultsJson);

    return movieArray;
  } catch (error) {
    throw error;
  }
};
