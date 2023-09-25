//React
import React, { useState, useEffect } from "react";
import { View, ScrollView, useWindowDimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";

//API
import { getMovieDetails } from "../api/endpoints.js";
//import { getMovieDetails } from "../api/endpointsForTesting.js";

//Styled Components
import {
  MovieDetailContainer,
  Headline,
  MainContainer,
  Paragraph,
  ParagraphSmall,
  HeadlineUppercase,
  RowContainer,
  StyledActivityIndicator,
  BackdropImage,
} from "../redux-store/StyledComponents.js";

//Components
import MovieDetailsButtonComponent from "../components/MovieDetailsButtonComponent.js";

export default MovieDetailsScreen = ({ movieID }) => {
  //Get States from Async Storage
  const storedWatchList = useSelector((state) => state.watchList);
  const storedSeenList = useSelector((state) => state.seenList);
  const dispatch = useDispatch();

  //Usestates
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);
  const [elementExistInWatchList, setElementExistInWatchList] = useState(false);
  const [elementExistInSeenList, setElementExistInSeenList] = useState(false);

  const onShareClick = () => {
    //TODO: Share
  };

  const onAddToWatchlist = () => {
    let type;
    if (elementExistInWatchList) {
      type = "DELETE_MOVIE_FROM_WATCHLIST";
    } else {
      type = "ADD_MOVIE_TO_WATCHLIST";
    }
    dispatchHandler(type);
  };

  const onAddToSeenlist = () => {
    let type;
    if (elementExistInSeenList) {
      type = "DELETE_MOVIE_FROM_SEENLIST";
    } else {
      type = "ADD_MOVIE_TO_SEENLIST";
    }
    dispatchHandler(type);
  };

  const dispatchHandler = (type) => {
    dispatch({
      type: type,
      payload: movie.id,
    });
  };

  //get movie object from getMovieDetails() and set movie with promise.
  //set loading state to true if process finished
  const fetchMovieDetails = async (id) => {
    try {
      receivedMovie = await getMovieDetails(id);
      setMovie(receivedMovie);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError("No internet");
      setLoading(false);
    }
  };

  //fetch movie details once on startup
  useEffect(() => {
    //TODO: How to pass movieID to MovieDetailsScreen? --> optional chaining for now because home screens dont pass arguments
    fetchMovieDetails(movieID);
  }, []);

  //check if element exists in Watchlist and update useState
  useEffect(() => {
    setElementExistInWatchList(storedWatchList.movies.includes(movie?.id));
  }, [storedWatchList]);

  //check if element exists in Seenlist and update useState
  useEffect(() => {
    setElementExistInSeenList(storedSeenList.movies.includes(movie?.id));
  }, [storedSeenList]);

  //set States after movies are loaded
  useEffect(() => {
    setElementExistInWatchList(storedWatchList.movies.includes(movie?.id));
    setElementExistInSeenList(storedSeenList.movies.includes(movie?.id));
  }, [loading]);

  return (
    <MovieDetailContainer windowWidth={useWindowDimensions().width}>
      {loading ? (
        <StyledActivityIndicator />
      ) : error ? (
        <HeadlineUppercase>{error}</HeadlineUppercase>
      ) : (
        <ScrollView>
          <BackdropImage
            source={{
              uri: "https://image.tmdb.org/t/p/w1280" + movie.backdrop_path,
            }}
          />
          <MainContainer>
            <HeadlineUppercase>{movie.title}</HeadlineUppercase>
            <RowContainer>
              <ParagraphSmall>{movie.release_date_string}</ParagraphSmall>
              <ParagraphSmall>{movie.runtime} Min</ParagraphSmall>
              <ParagraphSmall>{movie.vote_average}</ParagraphSmall>
            </RowContainer>
            <RowContainer>
              <MovieDetailsButtonComponent
                iconName={"share-social-outline"}
                clickHandler={() => onShareClick()}
              >
                Teilen
              </MovieDetailsButtonComponent>
              <MovieDetailsButtonComponent
                iconName={
                  elementExistInWatchList ? "remove-outline" : "add-outline"
                }
                clickHandler={() => onAddToWatchlist()}
              >
                Watchlist
              </MovieDetailsButtonComponent>
              <MovieDetailsButtonComponent
                iconName={
                  elementExistInSeenList ? "close-outline" : "checkmark-outline"
                }
                clickHandler={() => onAddToSeenlist()}
              >
                Seenlist
              </MovieDetailsButtonComponent>
            </RowContainer>
            <ParagraphSmall>{movie.description}</ParagraphSmall>
            <ParagraphSmall>{movie.genres}</ParagraphSmall>
            <ParagraphSmall>
              Als Stream verfügbar auf
              {movie?.watchprovider?.map((provider) => " " + provider.label)}
            </ParagraphSmall>
          </MainContainer>
        </ScrollView>
      )}
    </MovieDetailContainer>
  );
};
