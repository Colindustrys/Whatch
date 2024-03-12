import moviedb from "../movieDbInstance";
import { parseDiscoverList } from "../parser";
import { DiscoverMovieRequest } from "moviedb-promise";
import { store } from "../../redux-store/store";
import providerObjects from "../../data/provider";

// gets the movie list from the tmdb discover endpoint and returns it as an array of movie objects
// takes a json with optional parameters
// parameter:
// page: int
// sort: String
// voteMin: number aus 10
// voteMax: number aus 10
// voteCountMin: int
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
  voteCountMin,
  genres,
  runtimeMin,
  runtimeMax,
  releaseDateMin,
  releaseDateMax,
}) => {
  //console.log("discover with genre: " + genres);

  const state = store.getState();
  let providerIDs = [];
  //falls der schalter auf alle provider ist oder kein provider gesetzt ist
  if (
    state.filterMethod.freeToCharge ||
    state.personalProviderList.provider.length == 0
  ) {
    //get all provider ids
    let providerObjects = state.providerList.provider;
    providerObjects.forEach((provider) => {
      providerIDs.push(provider.id);
    });
    //if user has set providers
  } else {
    providerIDs = state.personalProviderList.provider;
  }

  const requestParams = {
    page: page,
    sort_by: sort,
    "vote_average.gte": voteMin,
    "vote_average.lte": voteMax,
    "vote_count.gte": voteCountMin,
    with_genres: genres?.join("|"),
    watch_region: "DE",
    with_watch_providers: providerIDs?.join("|"),
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
