import { parseMovie } from './parser'
import { getMovieDetailsJsonFromApi } from './movieDetailsRequest'
const { MovieDb } = require('moviedb-promise')
const moviedb = new MovieDb('f862a1abef6de0d1ca20c51abb9f51ab')


export const getMovieDetails = async (id) => {
    
    try {
        
        //get json
        resJSON = await getMovieDetailsJsonFromApi(id)
        // console.log("resJSON:");
        // console.log(resJSON);

        //parse movie object 
        movieObject = parseMovie(resJSON)

        //return movie object 
        return movieObject

    } catch (e) {
        throw e;
    }

}