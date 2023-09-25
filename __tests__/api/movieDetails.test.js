import { getMovieDetailsObject } from "../../api/endpoints/movieDetails";
import moviedb from "../../api/movieDbInstance";

//mock the moviedb singleton
jest.mock("../../api/movieDbInstance");

describe("getMovieDetailsObject", () => {
  it("fetches and processes movie details", async () => {
    moviedb.movieInfo.mockClear();
    //response that the mocked moviedb movieInfo function returns
    const mockResponse = {
      adult: false,
      backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      belongs_to_collection: {
        backdrop_path: "/3WZTxpgscsmoUk81TuECXdFOD0R.jpg",
        id: 230,
        name: "The Godfather Collection",
        poster_path: "/zqV8MGXfpLZiFVObLxpAI7wWonJ.jpg",
      },
      budget: 6000000,
      genres: [
        { id: 18, name: "Drama" },
        { id: 80, name: "Crime" },
      ],
      homepage: "http://www.thegodfather.com/",
      id: 238,
      imdb_id: "tt0068646",
      original_language: "en",
      original_title: "The Godfather",
      overview:
        "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      popularity: 173.195,
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      production_companies: [
        {
          id: 4,
          logo_path: "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png",
          name: "Paramount",
          origin_country: "US",
        },
        {
          id: 10211,
          logo_path: null,
          name: "Alfran Productions",
          origin_country: "US",
        },
      ],
      production_countries: [
        { iso_3166_1: "US", name: "United States of America" },
      ],
      release_date: "1972-03-14",
      revenue: 245066411,
      runtime: 175,
      spoken_languages: [
        { english_name: "English", iso_639_1: "en", name: "English" },
        { english_name: "Italian", iso_639_1: "it", name: "Italiano" },
        { english_name: "Latin", iso_639_1: "la", name: "Latin" },
      ],
      status: "Released",
      tagline: "An offer you can't refuse.",
      title: "The Godfather",
      video: false,
      vote_average: 8.707,
      vote_count: 18556,
    };
    //define the response of the mocken moviedb.movieInfo to resolve with the mockResponse
    moviedb.movieInfo.mockResolvedValue(mockResponse);
    //register the movieInfo function to be spied on
    jest.spyOn(moviedb, "movieInfo");

    //define the movie id to test with
    const id = 238;
    //get a movieObject from getMovieDetailsObject
    const receivedMovieObject = await getMovieDetailsObject(id);

    //assert if the retured movieObject is equal to what is expected
    expect(receivedMovieObject).toEqual({
      _backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      _description:
        "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      _genres: ["Drama", "Crime"],
      _id: 238,
      _imdb_id: "tt0068646",
      _original_language: "en",
      _poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      _release_date: new Date(
        1972, // Year
        2, // Month
        14 // Day
      ),
      _runtime: 175,
      _title: "The Godfather",
      _vote_average: 8.707,
      _vote_count: 18556,
    });
    //assert the function is called correctly
    expect(moviedb.movieInfo).toHaveBeenCalledWith(id);
    expect(moviedb.movieInfo).toHaveBeenCalledTimes(1);
    moviedb.movieInfo.mockClear();

    jest.restoreAllMocks();
  });

  it("handles errors gracefully", async () => {
    moviedb.movieInfo.mockClear();
    //error response that the mocked movieInfo throws
    const mockError = new Error("API Error");
    //define the response of the mocken moviedb.movieInfo to reject with the mockError
    moviedb.movieInfo.mockRejectedValue(mockError);
    //register the movieInfo function to be spied on
    jest.spyOn(moviedb, "movieInfo");

    //define the movie id to test with
    const id = 238;

    try {
      //try to call the getMovieDetailsObject function, which should throw the mockError
      await getMovieDetailsObject(id);
      //intentionally throw an error to always get the the comparison of the errors even if getMovieDetailsObject does not throw
      throw new Error("the wrong error");
    } catch (error) {
      //check if the thrown error is the mockError
      expect(error).toEqual(mockError);
    }
    //weird to test if an error is throws but nothing else worked

    //assert the function is called correctly
    expect(moviedb.movieInfo).toHaveBeenCalledWith(id);
    expect(moviedb.movieInfo).toHaveBeenCalledTimes(1);

    jest.restoreAllMocks();
  });
});
