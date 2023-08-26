import Movie from "../models/Movie";

export const parseMovie = (json) => {
    newMovie = new Movie();
    newMovie.title = json.title;
    newMovie.id = json.id;
    newMovie.description = json.overview;
    return newMovie;
}