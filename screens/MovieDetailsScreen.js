import { React, useState } from "react";
import { View, Text } from "react-native";

import { useSelector } from "react-redux";

import Typography from "../constants/Typography.js";
import Theme from "../constants/Theme";

import { getMovieDetails } from "../api/endpoints.js";



export default MovieDetailsScreen = ({ navigation }) => {
  const theme = useSelector((state) => state.theme);

  const [movieTitle, setMovieTitle] = useState('Movie Title');


  const _getMovieDetails = async (id) => {
    
    try {
        myMovie = await getMovieDetails(id)
        setMovieTitle(myMovie.title)
    } catch (e) {
        console.log(e);
        setMovieTitle("uh oh seems like a error occured")
    }

  }

  _getMovieDetails(238)


  

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
        {movieTitle}
      </Text>
    </View>
  );
};
