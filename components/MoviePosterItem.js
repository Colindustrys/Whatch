//React
import React from "react";
import { Pressable } from "react-native";

//Styled Components
import { PosterImage } from "../redux-store/StyledComponents.js";

export default MoviePosterItem = ({ clickHandler, moviePosterPath }) => {
  return (
    <Pressable onPress={clickHandler}>
      <PosterImage
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
