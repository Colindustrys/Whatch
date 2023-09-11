import Movie from "../models/Movie";
import WatchProvider from "../models/WatchProvider";

export const parseMovie = (json) => {
  newMovie = new Movie();
  newMovie.title = json.title;
  newMovie.id = json.id;
  newMovie.imdb_id = json.imdb_id;
  newMovie.description = json.overview;
  newMovie.backdrop_path = json.backdrop_path;
  newMovie.poster_path = json.poster_path;

  //make genres array
  newMovie.genres = json.genres.map((genre) => genre.name);

  newMovie.original_language = json.original_language;

  //convert json date string to javascript date
  const dateString = json.release_date;
  const dateParts = dateString.split("-");
  const dateObject = new Date(
    parseInt(dateParts[0]), // Year
    parseInt(dateParts[1]) - 1, // Month
    parseInt(dateParts[2]) // Day
  );
  newMovie.release_date = dateObject;

  newMovie.runtime = json.runtime;
  newMovie.vote_average = json.vote_average;
  newMovie.vote_count = json.vote_count;

  return newMovie;
};

export const parseMovieProviders = (json) => {
  let providerList = [];

  //check if there is results
  if (json.results.DE) {
    //check if there is any flatrate
    if (json.results.DE.flatrate) {
      const flatrateArray = json.results.DE.flatrate;

      for (const flatrateItem of flatrateArray) {
        let newProvider = new WatchProvider();

        newProvider.id = flatrateItem.provider_id;
        newProvider.label = flatrateItem.provider_name;
        newProvider.logoPath = flatrateItem.logo_path;
        newProvider.displayPriority = flatrateItem.display_priority;

        providerList.push(newProvider);
      }
    }
  }

  return providerList
};
