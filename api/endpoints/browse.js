import { getAllGenresObjects } from "./allGenres";
import { getMovieDiscoverList } from "./movieDiscover";

//gets all genres and then an array of movies ids for each genre
//returns an array of objects that have a title prop and movieList prop

const getMovies = async (genre, titleAndMoviearrayObjectList) => {
  let requestParams = { genres: [genre.id] };
  let movieArray = await getMovieDiscoverList(requestParams);

  const newTitleAndMoviearray = {
    title: genre.label,
    movieArray: movieArray,
    requestParams: requestParams,
  };

  titleAndMoviearrayObjectList.push(newTitleAndMoviearray);
  //console.log("got list for: " + genre.label);
  //console.log(newTitleAndMoviearray);
};
export const getBrowseMovieLists = async (id) => {
  try {
    const allGenres = await getAllGenresObjects();

    let titleAndMoviearrayObjectList = []; //list of objects with each title and movieArray prop

    const promises = [];

    //get list of movies for each genre
    for (const genre of allGenres) {
      promises.push(getMovies(genre, titleAndMoviearrayObjectList));
    }

    //wait until all async functions have finished
    await Promise.all(promises)
      .then((results) => {
        // console.log("All async functions completed");
        // console.log("Results:", results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    return titleAndMoviearrayObjectList;
  } catch (error) {
    throw error;
  }
};
