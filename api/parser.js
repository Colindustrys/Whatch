import Movie from "../models/Movie";
import Genre from "../models/Genre";
import WatchProvider from "../models/WatchProvider";

//parses a movie object from the tmdb response json
export const parseMovie = (json) => {
  // console.log(json.title);
  // console.log(json);

  // console.log(json.title);
  // console.log(json.id);
  // console.log(json.overview);
  // console.log(json.backdrop_path);
  // console.log(json.poster_path);
  // console.log(json.genre_ids);
  // console.log(json.original_language);
  // console.log(json.release_date);
  // console.log(json.vote_average);
  // console.log(json.vote_count);

  if (
    !json.title ||
    !json.id ||
    !json.overview ||
    !json.backdrop_path ||
    !json.poster_path ||
    !json.release_date ||
    !json.vote_average ||
    !json.vote_count
  ) {
    return;
  }

  newMovie = new Movie();

  newMovie.title = json.title;
  newMovie.id = json.id;
  newMovie.imdb_id = json.imdb_id;
  newMovie.description = json.overview;
  newMovie.backdrop_path = json.backdrop_path;
  newMovie.poster_path = json.poster_path;

  //TODO nicht 2 array für genre name und id verwenden sondern die Genre Klasse
  //für movieDetails json
  if (json.genres) {
    //make genres array
    newMovie.genres = json.genres.map((genre) => genre.name);
    //make genreIDs array
    newMovie.genreIDs = json.genres.map((genre) => genre.id);
  }

  //für discover json
  if (json.genre_ids) {
    newMovie.genreIDs = json.genre_ids.map((genre) => genre.id);
  }

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

//parses the json from the discover endpoint to an array of movie objects
export const parseDiscoverList = (json) => {
  let moviesArray = [];

  if (json.results) {
    if (json.results.length > 0) {
      const moviesJsonArray = json.results;
      for (const movieJSON of moviesJsonArray) {
        newMovie = parseMovie(movieJSON);
        //check if movie was returned, some movies dont get returned because they are missing attributes
        if (newMovie) {
          moviesArray.push(newMovie);
        }
      }
    }
  }

  return moviesArray;
};

export const parseMovieProviders = (json) => {
  //new list of watchprovider objects
  let providerList = [];

  //check if there is results
  if (json.results.DE) {
    //check if there is any flatrate
    if (json.results.DE.flatrate) {
      const flatrateArray = json.results.DE.flatrate;

      for (const flatrateItem of flatrateArray) {
        let newProvider = new WatchProvider();

        //add details to provider obejcts
        newProvider.id = flatrateItem.provider_id;
        newProvider.label = flatrateItem.provider_name;
        newProvider.logoPath = flatrateItem.logo_path;
        newProvider.displayPriority = flatrateItem.display_priority;
        //add to list
        providerList.push(newProvider);
      }
    }

    if (json.results.DE.free) {
      const freeArray = json.results.DE.free;

      for (const freeItem of freeArray) {
        let newProvider = new WatchProvider();

        //add details to provider obejcts
        newProvider.id = freeItem.provider_id;
        newProvider.label = freeItem.provider_name;
        newProvider.logoPath = freeItem.logo_path;
        newProvider.displayPriority = freeItem.display_priority;
        //add to list
        providerList.push(newProvider);
      }
    }
  }

  return providerList;
};

export const parseAllGenres = (json) => {
  let genreList = [];
  const genresJson = json.genres;

  for (const genreItem of genresJson) {
    let newGenre = new Genre();

    newGenre.label = genreItem.name;
    newGenre.id = genreItem.id;

    genreList.push(newGenre);
  }

  return genreList;
};
