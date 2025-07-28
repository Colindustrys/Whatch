//React
import React, { forwardRef } from "react";
import { Pressable } from "react-native";

//Styled Components
import { PosterImage, PressableView } from "../redux-store/StyledComponents.js";

export default MoviePosterItem = forwardRef(
  ({ clickHandler, moviePosterPath, withoutMargin, movieTitle }, ref) => {
    const shouldComponentUpdate = () => {
      return false;
    };

    return (
      <Pressable onPress={clickHandler} accessible={false}>
        {({ pressed }) => (
          <PressableView
            pressed={pressed}
            accessible={true}
            ref={ref}
          >
            <PosterImage
              accessible={false}
              importantForAccessibility="yes"
              accessibilityRole="imagebutton"
              accessibilityLabel={`Movie: ${movieTitle}`}
              withoutMargin={withoutMargin}
              source={{
                uri: "https://image.tmdb.org/t/p/w342" + moviePosterPath,
              }}
              onError={(e) => {
                console.log("Error loading image: ", e.nativeEvent.error);
                console.log(
                  "Image URL: ",
                  "https://image.tmdb.org/t/p/w342" + moviePosterPath
                );
              }}
            />
          </PressableView>
        )}
      </Pressable>
    );
  }
);
