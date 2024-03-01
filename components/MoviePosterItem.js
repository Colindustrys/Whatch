//React
import React from "react";
import { Pressable } from "react-native";

//Styled Components
import { PosterImage, PressableView } from "../redux-store/StyledComponents.js";

export default MoviePosterItem = ({ clickHandler, moviePosterPath, withoutMargin }) => {
  const shouldComponentUpdate = () => {
    return false;
  };

  return (
    <Pressable onPress={clickHandler}>
      {({ pressed }) => (
        <PressableView pressed={pressed}>
          <PosterImage withoutMargin={withoutMargin}
            source={{
              uri: "https://image.tmdb.org/t/p/w342" + moviePosterPath,
            }}
          />
        </PressableView>
      )}
    </Pressable>
  );
};
