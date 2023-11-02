//React
import React from "react";
import { Pressable } from "react-native";

//Styled Components
import { PosterImage, PressableView } from "../redux-store/StyledComponents.js";

export default MoviePosterItem = ({ clickHandler, moviePosterPath }) => {

  const shouldComponentUpdate = () => {
    return false
  }
  
  return (
    <Pressable onPress={clickHandler}>
      {({ pressed }) => (
        <PressableView pressed={pressed}>
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
        </PressableView>
      )}
    </Pressable>
  );
};
