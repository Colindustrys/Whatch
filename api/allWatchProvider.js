import moviedb from "./movieDbInstance";
import { parseAllProviders } from "./parser";

// gets the watchprovider for a movie from tmdb and converts it to a list of watch provider objects
export const getAllWatchProviderObjects = async (id) => {
  let providerarray
  try {
    //get json from tmdb
    const res = await moviedb.movieWatchProviderList({ watch_region: "de" })
    
    //parse watchprovider obejcts from json
    providerarray = parseAllProviders(res)

    return providerarray;
  } catch (error) {
    throw error;
  }
};
