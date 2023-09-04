import { parseMovie } from './parser'
import { getMovieDetailsObject } from './movieDetails'
const { MovieDb } = require('moviedb-promise')
const moviedb = new MovieDb('f862a1abef6de0d1ca20c51abb9f51ab')


export const getMovieDetails = async (id) => {
    
    try {
        
        //get json
        movieObject = await getMovieDetailsObject(id);

        //return movie object 
        return movieObject;

    } catch (e) {
        throw e;
    }

}