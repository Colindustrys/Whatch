import moviedb from "../movieDbInstance";
import { parseAllProviders } from "../parser";

// gets all watchproviders for movies from tmdb and converts it to a list of watch provider objects
export const getAllWatchProviderObjects = async (id) => {
  let providerarray;
  try {
    //get json from tmdb
    const res = await moviedb.movieWatchProviderList({ watch_region: "de" });

    //parse watchprovider obejcts from json
    const providerarray = parseAllProviders(res);

    //sort by display prio
    providerarray.sort((a, b) => a.displayPriority - b.displayPriority);

    //console.log(providerarray);

    //only take the top 20
    const top20providerarray = providerarray.slice(0, 20);

    //console.log(top20providerarray);

    return top20providerarray;
  } catch (error) {
    throw error;
  }
};
