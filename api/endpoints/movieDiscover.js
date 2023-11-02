import moviedb from "../movieDbInstance";
import { parseDiscoverList } from "../parser";
import { DiscoverMovieRequest } from "moviedb-promise";
import { store } from "../../redux-store/store";

// gets the movie list from the tmdb discover endpoint and returns it as an array of movie objects
// takes a json with optional parameters
// parameter:
// page: int
// sort: String
// voteMin: number aus 10
// voteMax: number aus 10
// genre: array of genre ids, gets movies that have one of the genres
// runtimeMin: in minuten, sieht die api irgenwie nicht so streng
// runtimeMax: in minuten
// watchProvider: array mit ids
// releaseDateMin: string "2021-01-01"
// releaseDateMax: string "2021-01-01"

export const getMovieDiscoverList = async ({
  page,
  sort,
  voteMin,
  voteMax,
  genres,
  runtimeMin,
  runtimeMax,
  releaseDateMin,
  releaseDateMax,
}) => {
  //console.log("discover with genre: " + genres);

  //falls der schalter oben link auf nur eigenen provider gestellt ist
  let providerArray = [];
  if (true) {
    const state = store.getState();
    providerArray = state.personalProviderList.provider;
  }

  requestParams = {
    page: page,
    sort_by: sort,
    "vote_average.gte": voteMin,
    "vote_average.lte": voteMax,
    with_genres: genres?.join("|"),
    watch_region: "DE",
    with_watch_providers: providerArray?.join("|"),
    "with_runtime.gte": runtimeMin,
    "with_runtime.lte": runtimeMax,
    "primary_release_date.gte": releaseDateMin,
    "primary_release_date.lte": releaseDateMax,
  };

  try {
    //get json from tmdb
    const res = await moviedb.discoverMovie(requestParams);

    //parse json to list of movie objects
    const movieArray = parseDiscoverList(res);

    return movieArray;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
