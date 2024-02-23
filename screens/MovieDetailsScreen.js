//React
import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  View,
  ScrollView,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Device from "react-native-device-detection";
import { LinearGradient } from "expo-linear-gradient";

//API
import { getMovieDetails } from "../api/endpoints.js";
//import { getMovieDetails } from "../api/endpointsForTesting.js";

//Styled Components
import {
  MovieDetailContainer,
  InnerMovieDetailContainer,
  Headline,
  MainContainer,
  Paragraph,
  RowContainer,
  StyledActivityIndicator,
  BackdropImage,
  LogoImage,
  BackdropGradient,
} from "../redux-store/StyledComponents.js";

//Components
import MovieDetailsButtonComponent from "../components/MovieDetailsButtonComponent.js";

//Models
import Movie from "../models/Movie.js";

export default MovieDetailsScreen = ({ passedMovie }) => {
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

  //fetch movie details once on startup
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  //get movie object from getMovieDetails() and set movie with promise.
  //set loading state to true if process finished
  const fetchMovieDetails = async () => {
    try {
      let receivedMovie = await getMovieDetails(passedMovie._id);
      setMovie(receivedMovie);
      setLoading(false);
    } catch (e) {
      console.log("error: " + e);
      setError("No internet");
      setLoading(false);
    }
  };

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
      payload: movie,
    });
  };

  //check if element exists in Watchlist and update useState
  useEffect(() => {
    setElementExistInWatchList(
      storedWatchList.movies.some(
        (storedMovie) => storedMovie._id === movie?.id
      )
    );
  }, [storedWatchList]);

  //check if element exists in Seenlist and update useState
  useEffect(() => {
    setElementExistInSeenList(
      storedSeenList.movies.some((storedMovie) => storedMovie._id === movie?.id)
    );
  }, [storedSeenList]);

  //set States after movies are loaded
  useEffect(() => {
    setElementExistInWatchList(
      storedWatchList.movies.some(
        (storedMovie) => storedMovie._id === movie?.id
      )
    );
    setElementExistInSeenList(
      storedSeenList.movies.some((storedMovie) => storedMovie._id === movie?.id)
    );
  }, [loading]);

  return (
    //TODO: create own styledComps for new Views and add inline styles + clean up :)
    //TODO: use MainContainer?!
    <MovieDetailContainer windowWidth={useWindowDimensions().width}>
      {loading ? (
        <StyledActivityIndicator />
      ) : error ? (
        <Headline uppercase>{error}</Headline>
      ) : (
        <ScrollView>
          <BackdropImage
            source={{
              uri: "https://image.tmdb.org/t/p/w1280" + movie.backdrop_path,
            }}
          >
            <BackdropGradient
              style={{ height: "100%", width: "100%" }}
            ></BackdropGradient>
          </BackdropImage>

          <InnerMovieDetailContainer>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "flex-end" }}
            >
              <View style={{ width: Device.isTablet ? "50%" : "100%" }}>
                <Headline
                  uppercase
                  length={movie.title.length}
                  isTablet={Device.isTablet}
                >
                  {movie.title}
                </Headline>
                <Paragraph small textCenter>
                  {movie.genres}
                </Paragraph>
                <Paragraph small textCenter textIsTransparent>
                  {movie.runtime} Min
                  {/*TODO: use pseudo class before in styled components */}
                  {" • "}
                  {movie.release_date_string}
                  {" • "}
                  {movie.vote_average}
                </Paragraph>
              </View>
              {Device.isTablet ? (
                <View style={{ width: Device.isTablet ? "50%" : "100%" }}>
                  <RowContainer justifyContent={"center"}>
                    <MovieDetailsButtonComponent
                      iconName={"share"}
                      clickHandler={() => onShareClick()}
                    >
                      Teilen
                    </MovieDetailsButtonComponent>
                    <MovieDetailsButtonComponent
                      iconName={elementExistInWatchList ? "minus" : "plus"}
                      clickHandler={() => onAddToWatchlist()}
                    >
                      Watchlist
                    </MovieDetailsButtonComponent>
                    <MovieDetailsButtonComponent
                      iconName={elementExistInSeenList ? "cross" : "check"}
                      clickHandler={() => onAddToSeenlist()}
                    >
                      Seenlist
                    </MovieDetailsButtonComponent>
                  </RowContainer>
                </View>
              ) : null}
            </View>

            <Paragraph small>{movie.description}</Paragraph>
            <Paragraph small>Als Stream verfügbar auf:</Paragraph>

            <RowContainer justifyContent={"flex-start"} paddingBottom gap>
              {movie?.watchprovider?.map((provider, index) => {
                return (
                  <LogoImage
                    key={index}
                    source={{
                      uri: "https://image.tmdb.org/t/p/w92" + provider.logoPath,
                    }}
                  ></LogoImage>
                );
              })}
            </RowContainer>
            {Device.isTablet ? null : (
              <RowContainer justifyContent={"center"}>
                <MovieDetailsButtonComponent
                  iconName={"share"}
                  clickHandler={() => onShareClick()}
                >
                  Teilen
                </MovieDetailsButtonComponent>
                <MovieDetailsButtonComponent
                  iconName={elementExistInWatchList ? "minus" : "plus"}
                  clickHandler={() => onAddToWatchlist()}
                >
                  Watchlist
                </MovieDetailsButtonComponent>
                <MovieDetailsButtonComponent
                  iconName={elementExistInSeenList ? "cross" : "check"}
                  clickHandler={() => onAddToSeenlist()}
                >
                  Seenlist
                </MovieDetailsButtonComponent>
              </RowContainer>
            )}
          </InnerMovieDetailContainer>
        </ScrollView>
      )}
    </MovieDetailContainer>
  );
};
