import { getMovieDetails } from '../../api/endpoints';
import { getMovieDetailsObject } from '../../api/movieDetails';

jest.mock('../../api/movieDetails'); // Mock the module containing getMovieDetailsJsonFromApi

describe('getMovieDetails', () => {
  it('returns a movie object for a valid ID', async () => {
    // Mock the implementation of getMovieDetailsJsonFromApi
    getMovieDetailsObject.mockResolvedValue(
      {"_description": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.", "_id": 238, "_title": "The Godfather"}
    );

    const id = 123; // Replace with a valid movie ID for your test case

    // Call the getMovieDetails function
    const movie = await getMovieDetails(id);

    // Assert that the movie object matches the expected result
    expect(movie).toEqual({"_description": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.", "_id": 238, "_title": "The Godfather"});
  });
});