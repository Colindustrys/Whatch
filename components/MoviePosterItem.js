//React
import React from "react";
import { Pressable } from "react-native";

//Styled Components
import { StyledPoster } from "../redux-store/StyledComponents.js";

export default MoviePosterItem = ({ clickHandler, moviePosterPath }) => {
  return (
    <Pressable onPress={clickHandler}>
      <StyledPoster
        style={{
          width: 72,
          marginRight: 8,
          aspectRatio: 2 / 3,
          resizeMode: "contain",
        }}
        source={{
          uri: "https://image.tmdb.org/t/p/w92" + moviePosterPath,
        }}
      />
    </Pressable>
  );
};
