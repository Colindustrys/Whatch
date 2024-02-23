//React
import React from "react";
import { Pressable } from "react-native";

//Styled Components
import { PosterImage, PressableView } from "../redux-store/StyledComponents.js";

export default MoviePosterItem = ({ clickHandler, moviePosterPath }) => {
  const shouldComponentUpdate = () => {
    return false;
  };

  return (
    <Pressable onPress={clickHandler}>
      {({ pressed }) => (
        <PressableView pressed={pressed}>
          <PosterImage
            source={{
              uri: "https://image.tmdb.org/t/p/w342" + moviePosterPath,
            }}
          />
        </PressableView>
      )}
    </Pressable>
  );
};
