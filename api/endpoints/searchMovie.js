import moviedb from "../movieDbInstance";
import { parseDiscoverList } from "../parser";

//searches for string and returns an list of movies
export const SearchMovie = async (string, page) => {
  const requestParams = {
    query: string,
    page: page,
  };

  //console.log(requestParams);

  try {
    let searchresultsJson = await moviedb.searchMovie(requestParams);

    //parse movies
    const movieArray = parseDiscoverList(searchresultsJson);

    const totalPages = searchresultsJson.total_pages;
    const totalResults = searchresultsJson.total_results;

    return {
      newData: movieArray,
      totalPages: totalPages,
      totalResults: totalResults,
    };
  } catch (error) {
    throw error;
  }
};
