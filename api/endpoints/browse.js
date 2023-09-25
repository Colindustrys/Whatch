import { getAllGenresObjects } from "./allGenres";
import { getMovieDiscoverList } from "./movieDiscover";

//gets all genres and then a list of movies ids for each genre
export const getBrowseMovieLists = async (id) => {
  try {
    const allGenres = await getAllGenresObjects();

    let arrayWithMovieListObjects = [];

    //get list of movies for each genre
    for (const genre of allGenres) {
      //console.log(genre.label);
      let movieListObject = await getMovieDiscoverList({ genres: [genre.id] });
      movieListObject.title = genre.label;
      //console.log(movieListObject.title);
      arrayWithMovieListObjects.push(movieListObject);
    }

    return arrayWithMovieListObjects;
  } catch (error) {
    throw error;
  }
};
