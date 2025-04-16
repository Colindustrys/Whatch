import { MovieDb } from "moviedb-promise";
import { TMDB_KEY } from "@env";
//import MovieDb from "moviedb-promise/dist/moviedb"

// Initialize the MovieDb instance
const moviedb = new MovieDb(TMDB_KEY);

// Export the singleton instance
export default moviedb;
