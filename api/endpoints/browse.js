import { getAllGenresObjects } from "./allGenres";
import { getMovieDiscoverList } from "./movieDiscover";

//gets all genres and then an array of movies ids for each genre
//returns an array of objects that have a title prop and movieList prop
export const getBrowseMovieLists = async (id) => {
  try {
    const allGenres = await getAllGenresObjects();

    let titleAndMoviearrayObjectList = []; //list of objects with each title and movieArray prop

    //get list of movies for each genre
    for (const genre of allGenres) {
      let movieArray = await getMovieDiscoverList({ genres: [genre.id] });

      const newTitleAndMoviearray = {
        title: genre.label,
        movieArray: movieArray,
      };

      titleAndMoviearrayObjectList.push(newTitleAndMoviearray);
    }

    return titleAndMoviearrayObjectList;
  } catch (error) {
    throw error;
  }
};
