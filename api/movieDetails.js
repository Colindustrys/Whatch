import { MovieDb } from 'moviedb-promise'
//const { MovieDb } = require('moviedb-promise')
const moviedb = new MovieDb('f862a1abef6de0d1ca20c51abb9f51ab')
import { parseMovie } from './parser'

// gets the movie info from tmdb and converts it to a movie object then returns that
export const getMovieDetailsObject = async (id) => {
    
    try {
        //get json from tmdb
        const res = await moviedb.movieInfo(id)
        console.log("res in movieDateils.js: " + res);
        //parse json to movie object 
        movieObject = parseMovie(res)
        console.log("movieObj in movieDateils.js: " + movieObject);
        console.log("nooooooooo errrorooororo");
        return movieObject;
    } catch (error) {
        console.log("annnnnnnnnnn errrorooororo");
        console.log("Error in movieDetails.js: " + error);
        throw error;
    }

}