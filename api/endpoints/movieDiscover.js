import moviedb from "../movieDbInstance";
import { parseDiscoverList } from "../parser";
import { DiscoverMovieRequest } from "moviedb-promise";

// gets the movie list from tmdb and converts it to a list of movie ids
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
  watchProvider,
  releaseDateMin,
  releaseDateMax,
}) => {
  console.log(watchProvider);

  requestParams = {
    page: page,
    sort_by: sort,
    "vote_average.gte": voteMin,
    "vote_average.lte": voteMax,
    with_genres: genres?.join("|"),
    watch_region: "DE",
    with_watch_providers: watchProvider?.join("|"),
    "with_runtime.gte": runtimeMin,
    "with_runtime.lte": runtimeMax,
    "primary_release_date.gte": releaseDateMin,
    "primary_release_date.lte": releaseDateMax,
  };
  

  try {
    //get json from tmdb
    const res = await moviedb.discoverMovie(requestParams);

    //parse json to list of movie objects
    movieIDList = parseDiscoverList(res);
    return movieIDList;
  } catch (error) {
    throw error;
  }
};
