import { React, useState, useEffect } from "react";
import { View, Text } from "react-native";

import { useSelector } from "react-redux";

import Typography from "../constants/Typography.js";
import Theme from "../constants/Theme";

import { getMovieDetails } from "../api/endpoints.js";
import Movie from "../models/Movie.js";



export default MovieDetailsScreen = ({ navigation }) => {
  const theme = useSelector((state) => state.theme);

  //useState für titel
  tempMovie = new Movie
  tempMovie.title = "Movie Titel"
  const [movie, setMovie] = useState(tempMovie);

  //holt film daten und zeigt sie an
  const setMovieDetails = async (id) => {

    try {
        myMovie = await getMovieDetails(id)
        setMovie(myMovie)
        //setMovieTitle(movieTitle.title = myMovie.title)
    } catch (e) {
      //was soll bei error passieren
      console.log(e);
      // tempMovie2 = new Movie;
      // tempMovie2.title = "uh oh seems like a error occured"
      // setMovie(tempMovie2)
    }

  }

  //get movie details once on startup
  useEffect(() => {
    setMovieDetails(238);
  }, []);


  return (
    <View
      style={
        theme.mode == "light" ? Theme.container_light : Theme.container_dark
      }
    >
      <Text
        style={
          theme.mode == "light"
            ? Typography.headline_big_light
            : Typography.headline_big_dark
        }
      >
        {movie.title}
      </Text>
    </View>
  );
};
