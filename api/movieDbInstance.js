import { MovieDb } from "moviedb-promise";
//import MovieDb from "moviedb-promise/dist/moviedb"

// Initialize the MovieDb instance
const moviedb = new MovieDb("f862a1abef6de0d1ca20c51abb9f51ab");

// Export the singleton instance
export default moviedb;
