//React
import React, { useState, useEffect, useRef } from "react";
import {
  FlatList,
  Image,
  View,
  ScrollView,
  useWindowDimensions,
  ImageBackground,
  Share,
  AccessibilityInfo,
  findNodeHandle,
  Platform,
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
import * as ScreenOrientation from "expo-screen-orientation";

export default MovieDetailsScreen = ({ passedMovie, beAccessible }) => {
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
  const [landscapeLayout, setLandscapeLayout] = useState(false);

  // userefs for accessability focus
  const loadingRef = useRef(null);
  const contentRef = useRef(null);

  const isIOS = Platform.OS === "ios";

  //fetch movie details once on startup
  useEffect(() => {
    fetchMovieDetails();
    orientationChangeListener();

    ScreenOrientation.addOrientationChangeListener(orientationChangeListener);

    //focus screenreader on loading indicator

    const timeout = setTimeout(() => {
      const nodeHandle = findNodeHandle(loadingRef.current);
      if (nodeHandle) {
        AccessibilityInfo.setAccessibilityFocus(nodeHandle);
      }
    }, 10); // Wait to ensure the element is mounted
  }, []);

  const orientationChangeListener = async () => {
    setLandscapeLayout(Device.isTablet && (await checkOrientation()));
  };

  const checkOrientation = async () => {
    return (
      (await ScreenOrientation.getOrientationAsync()) === 3 ||
      (await ScreenOrientation.getOrientationAsync()) === 4
    );
  };

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

  const onShareClick = async () => {
    let url = "https://www.themoviedb.org/movie/" + passedMovie.id;
    try {
      await Share.share({
        message: url,
      });
    } catch (error) {}
  };

  const onAddToWatchlist = () => {
    if (isIOS) {
      AccessibilityInfo.announceForAccessibility("Stop");
    }

    if (isIOS) {
      setTimeout(() => {
        AccessibilityInfo.announceForAccessibility(
          elementExistInWatchList
            ? "removed from watchlist"
            : "added to watchlist"
        );
      }, 500);
    }

    let type;
    if (elementExistInWatchList) {
      type = "DELETE_MOVIE_FROM_WATCHLIST";
    } else {
      type = "ADD_MOVIE_TO_WATCHLIST";
    }

    dispatchHandler(type);
  };

  const onAddToSeenlist = () => {
    if (isIOS) {
      AccessibilityInfo.announceForAccessibility("Stop");
    }

    if (isIOS) {
      setTimeout(() => {
        AccessibilityInfo.announceForAccessibility(
          elementExistInSeenList ? "removed from seenlist" : "added to seenlist"
        );
      }, 500);
    }

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

    // focus screen reader on title
    if (beAccessible) {
      const nodeHandle = findNodeHandle(contentRef.current);
      if (nodeHandle) {
        AccessibilityInfo.setAccessibilityFocus(nodeHandle);
      }
    }
  }, [loading]);

  return (
    //TODO: create own styledComps for new Views and add inline styles + clean up :)
    //TODO: use MainContainer?!
    <MovieDetailContainer
      windowWidth={useWindowDimensions().width}
      accessibilityElementsHidden={beAccessible ? false : true}
      importantForAccessibility={beAccessible ? "yes" : "no-hide-descendants"}
    >
      {loading ? (
        <StyledActivityIndicator
          accessible={beAccessible ? true : false}
          accessibilityLabel={"Loading"}
          ref={loadingRef}
        />
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

          <InnerMovieDetailContainer landscapeLayout={landscapeLayout}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "flex-end" }}
            >
              <View style={{ width: landscapeLayout ? "50%" : "100%" }}>
                {/* Movie Title */}
                <Headline
                  uppercase
                  length={movie.title.length}
                  accessible={true}
                  ref={contentRef}
                >
                  {movie.title}
                </Headline>
                <Paragraph
                  small
                  textCenter
                  accessible={true}
                  accessibilityLabel={"Genres: " + movie.genresArray.join(", ")}
                >
                  {movie.genres}
                </Paragraph>
                <Paragraph
                  small
                  textCenter
                  textIsTransparent
                  accessible={true}
                  accessibilityLabel={`${movie.runtime} minutes long, released ${movie.release_date_string}, rating: ${movie.vote_average} positive`}
                >
                  {movie.runtime} Min
                  {/*TODO: use pseudo class before in styled components */}
                  {" • "}
                  {movie.release_date_string}
                  {" • "}
                  {movie.vote_average}
                </Paragraph>
              </View>
              {landscapeLayout ? (
                <View style={{ width: landscapeLayout ? "50%" : "100%" }}>
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

            <Paragraph small accessible={true}>
              {movie.description}
            </Paragraph>

            {/* Just Watch Logo */}
            <Image
              accessible={false}
              source={require("../assets/JustWatch.png")}
              style={{ width: 150, height: 50, resizeMode: "contain" }}
            />

            {/* Provider */}
            <View
              accessible={true}
              accessibilityLabel={`Included in the flatrate on: ${movie?.watchprovider
                ?.map((provider) => provider.label)
                .join(", ")}`}
            >
              <Paragraph accessible={false} small>
                Included in the flatrate on:
              </Paragraph>

              <RowContainer
                accessible={false}
                justifyContent={"flex-start"}
                paddingBottom
                gap
              >
                {movie?.watchprovider?.map((provider, index) => {
                  return (
                    <LogoImage
                      accessible={false}
                      key={index}
                      source={{
                        uri:
                          "https://image.tmdb.org/t/p/w92" + provider.logoPath,
                      }}
                    ></LogoImage>
                  );
                })}
              </RowContainer>
            </View>

            {/* Bottom buttons */}
            {landscapeLayout ? null : (
              <RowContainer justifyContent={"center"} accessible={false}>
                <MovieDetailsButtonComponent
                  iconName={"share"}
                  clickHandler={() => onShareClick()}
                  aria_label={"share"}
                >
                  Share
                </MovieDetailsButtonComponent>
                <MovieDetailsButtonComponent
                  iconName={elementExistInWatchList ? "minus" : "plus"}
                  clickHandler={() => onAddToWatchlist()}
                  aria_label={
                    elementExistInWatchList
                      ? "remove from watchlist"
                      : "add to watchlist"
                  }
                >
                  Watchlist
                </MovieDetailsButtonComponent>
                <MovieDetailsButtonComponent
                  iconName={elementExistInSeenList ? "cross" : "check"}
                  clickHandler={() => onAddToSeenlist()}
                  aria_label={
                    elementExistInSeenList
                      ? "remove from seenlist"
                      : "add to seenlist"
                  }
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
