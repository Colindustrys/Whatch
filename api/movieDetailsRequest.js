const { MovieDb } = require('moviedb-promise')
const moviedb = new MovieDb('f862a1abef6de0d1ca20c51abb9f51ab')

// This is a more reasonable example
export const getMovieDetailsJsonFromApi = async (id) => {
    const res = await moviedb.movieInfo(id)
    throw "error"
    return res
}