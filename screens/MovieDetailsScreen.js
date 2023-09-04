import { React, useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

import { useSelector } from "react-redux";

import Typography from "../constants/Typography.js";
import Theme from "../constants/Theme";

import { getMovieDetails } from "../api/endpoints.js";
//import { getMovieDetails } from "../api/endpointsForTesting.js";

export default MovieDetailsScreen = ({ navigation }) => {
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
    <View
      style={
        theme.mode == "light" ? Theme.container_light : Theme.container_dark
      }
    >
      <View>
        {loading ? (
          // Display a loading indicator while fetching data
          // color is white right now so its not visible in light mode
          <ActivityIndicator size="large" color="white" />
        ) : error ? (
          // Display an error message if an error occurred
          <Text
            style={
              theme.mode == "light"
                ? Typography.headline_big_light
                : Typography.headline_big_dark
            }
          >
            {error}
          </Text>
        ) : (
          //display the movie data when it is loaded
          <View>
            <ScrollView>
              <Image
                style={styles.image}
                source={{
                  uri: "https://image.tmdb.org/t/p/w1280" + movie.backdrop_path,
                }}
              />

              <Text
                style={
                  theme.mode == "light"
                    ? Typography.headline_big_light
                    : Typography.headline_big_dark
                }
              >
                {movie.title}
              </Text>

              <Text
                style={
                  theme.mode == "light"
                    ? Typography.paragraph_light
                    : Typography.paragraph_dark
                }
              >
                Release: {movie.release_date_string}
              </Text>

              <Text
                style={
                  theme.mode == "light"
                    ? Typography.paragraph_light
                    : Typography.paragraph_dark
                }
              >
                Userbewertung: {movie.vote_average}
              </Text>

              <Text
                style={
                  theme.mode == "light"
                    ? Typography.paragraph_light
                    : Typography.paragraph_dark
                }
              >
                Genres:{"\n"}
                {movie.genres}
              </Text>

              <Text
                style={
                  theme.mode == "light"
                    ? Typography.paragraph_light
                    : Typography.paragraph_dark
                }
              >
                Beschreibung: {movie.description}
              </Text>
            </ScrollView>
          </View>
        )}
      </View>
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
