//React
import { React, useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { useSelector } from "react-redux";

//API
import { getMovieDetails } from "../api/endpoints.js";
//import { getMovieDetails } from "../api/endpointsForTesting.js";

//Styled Components
import {
  HeadlineSmall,
  Container,
  Paragraph,
  ParagraphSmall,
  HeadlineMovie,
  TopNavigationIcon,
} from "../redux-store/StyledComponents.js";

export default MovieDetailsScreen = ({ navigation }) => {
  const onShareClick = () => {
    console.log("CLICK!!");
    //TODO: Share
  };

  const onAddToWatchlist = () => {
    console.log("CLICK!!");

    //TODO: AddToWatchList --> Reducer
  };

  const onAddToSeenlist = () => {
    console.log("CLICK!!");

    //TODO: AddToSeenList --> Reducer
  };

  const theme = useSelector((state) => state.theme);

  //usestate to know if the data is still being loaded from the api
  const [loading, setLoading] = useState(true);
  //usestate to know if an error occured while loading data
  const [error, setError] = useState(null);
  //usestate for the movieObject with the movie data
  const [movie, setMovie] = useState(null);

  const fetchMovieDetails = async (id) => {
    try {
      //get movie object from getMovieDetails()
      receivedMovie = await getMovieDetails(id);
      //set the usestate with the movie
      setMovie(receivedMovie);
      //set loading usestate false when done loading
      setLoading(false);
    } catch (e) {
      console.log(e);
      //set the error usestate to indicate an error has occured
      setError("No internet");
      //set loading usestate false when done loading
      setLoading(false);
    }
  };

  //fetch movie details once on startup
  useEffect(() => {
    fetchMovieDetails(11);
  }, []);

  return (
    <View>
      {loading ? (
        // Display a loading indicator while fetching data
        // color is white right now so its not visible in light mode
        <ActivityIndicator size="large" color="white" />
      ) : error ? (
        // Display an error message if an error occurred
        <HeadlineMovie>{error}</HeadlineMovie>
      ) : (
        //display the movie data when it is loaded
        <ScrollView>
          <Image
            style={styles.image}
            source={{
              uri: "https://image.tmdb.org/t/p/w1280" + movie.backdrop_path,
            }}
          />
          <Container>
            <HeadlineMovie>{movie.title}</HeadlineMovie>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <ParagraphSmall>{movie.release_date_string}</ParagraphSmall>
              <ParagraphSmall>{movie.runtime} Min</ParagraphSmall>
              <ParagraphSmall>{movie.vote_average}</ParagraphSmall>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Pressable onPress={onShareClick}>
                <TopNavigationIcon name={"share-social-outline"} size={48} />
                <ParagraphSmall style={{ textAlign: "center" }}>
                  Teilen
                </ParagraphSmall>
              </Pressable>
              <Pressable onPress={onAddToWatchlist}>
                <TopNavigationIcon name={"add-outline"} size={48} />
                <ParagraphSmall style={{ textAlign: "center" }}>
                  Watchlist
                </ParagraphSmall>
              </Pressable>
              <Pressable onPress={onAddToSeenlist}>
                <TopNavigationIcon name={"checkmark-outline"} size={48} />
                <ParagraphSmall style={{ textAlign: "center" }}>
                  Gesehen
                </ParagraphSmall>
              </Pressable>
            </View>
            <ParagraphSmall>{movie.description}</ParagraphSmall>
            <ParagraphSmall>{movie.genres}</ParagraphSmall>
            <ParagraphSmall>
              Als Stream verfügbar auf
              {movie.watchprovider.map((provider) => " " + provider.label)}
            </ParagraphSmall>
          </Container>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 230,
    alignSelf: "center",
  },
});
