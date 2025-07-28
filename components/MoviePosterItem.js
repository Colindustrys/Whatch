//React
import React, { forwardRef, useEffect } from "react";
import { Pressable, findNodeHandle, AccessibilityInfo } from "react-native";

//Styled Components
import { PosterImage, PressableView } from "../redux-store/StyledComponents.js";

export default MoviePosterItem = forwardRef(
  ({ clickHandler, moviePosterPath, withoutMargin, movieTitle }, ref) => {
    const shouldComponentUpdate = () => {
      return false;
    };

    useEffect(() => {
      // set screenreader focus to first new movie
      setTimeout(() => {
        if (ref && ref.current) {
          const nodeHandle = findNodeHandle(ref.current);
          if (nodeHandle) {
            AccessibilityInfo.setAccessibilityFocus(nodeHandle);
          }
        }
      }, 500); // adjust timing if needed
    }, []);

    return (
      <Pressable onPress={clickHandler} accessible={true} ref={ref}>
        {({ pressed }) => (
          <PressableView
            pressed={pressed}
            accessible={false}
            // ref={ref}
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
