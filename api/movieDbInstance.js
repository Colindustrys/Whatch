import { MovieDb } from "moviedb-promise";
import Constants from "expo-constants";

const TMDB_KEY = Constants.expoConfig.extra.TMDB_KEY;

// Initialize the MovieDb instance
const moviedb = new MovieDb(TMDB_KEY);

// Export the singleton instance
export default moviedb;
