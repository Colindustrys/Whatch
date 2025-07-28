//React
import React, { useEffect, useState, useRef } from "react";
import {
  View,
  FlatList,
  useWindowDimensions,
  Dimensions,
  AccessibilityInfo,
  findNodeHandle,
} from "react-native";
import { useSelector } from "react-redux";

//API
import { getMovieDetails } from "../api/endpoints.js";

//Styled Components
import {
  Headline,
  MainContainer,
  Paragraph,
  StyledActivityIndicator,
  HalfWidthView,
} from "../redux-store/StyledComponents.js";

//Components
import MoviePosterItem from "../components/MoviePosterItem.js";

export default SeenlistScreen = ({ navigation }) => {
  //Get States from Async Storage
  const storedSeenList = useSelector((state) => state.seenList);
  const storedAppearance = useSelector((state) => state.appearance);

  const firstItemRef = useRef(null); //create ref for the first item to setAccessibilityFocus() to that when opening the page

  //usestates
  const [numberOfColumns, setNumberOfColumns] = useState(8);
  const [flatListColumnGap, setFlatListColumnGap] = useState(20);

  //TODO dont use the margin hardcoded, get it from Theme
  const itemFixedWidth = 92;

  useEffect(() => {
    calculateDimensions();
    Dimensions.addEventListener("change", () => {
      calculateDimensions();
    });
  }, []);

  useEffect(() => {
    console.log("useeffect")
    // Focus after delay so layout has time to finish
    const timeout = setTimeout(() => {
      if (firstItemRef.current) {
        const node = findNodeHandle(firstItemRef.current);
        if (node) {
          console.log("setAccessibilityFocus()")
          AccessibilityInfo.setAccessibilityFocus(node);
        }
      }
    }, 10);

    return () => clearTimeout(timeout);
  }, [storedSeenList]);

  //Calculate Dimensions for FlatList
  const calculateDimensions = () => {
    //TODO dont use the margin hardcoded, get it from Theme
    const listWidth =
      Dimensions.get("screen").width -
      2 * (storedAppearance.isTablet ? 56 : 24);
    const newNumberOfColumns = Math.floor(listWidth / itemFixedWidth);
    const newFlatListColumnGap =
      (listWidth - newNumberOfColumns * itemFixedWidth) / newNumberOfColumns +
      1;

    // Update state only if values change
    if (newNumberOfColumns !== numberOfColumns) {
      setNumberOfColumns(newNumberOfColumns);
    }
    if (newFlatListColumnGap !== flatListColumnGap) {
      setFlatListColumnGap(newFlatListColumnGap);
    }
  };

  const clickHandler = (movieIndex) => {
    //pass movieID to MovieDetailsScreen
    navigation.navigate("MovieDetailsListScreen", {
      movies: storedSeenList.movies,
      initialScrollIndex: movieIndex,
    });
  };

  return (
    <MainContainer>
      <FlatList
        key={numberOfColumns}
        numColumns={numberOfColumns}
        contentContainerStyle={{
          gap: 8,
        }}
        columnWrapperStyle={{ gap: flatListColumnGap }}
        data={storedSeenList.movies}
        renderItem={({ item, index }) => (
          <MoviePosterItem
            ref={index === 0 ? firstItemRef : null}
            moviePosterPath={item._poster_path}
            withoutMargin={true}
            movieTitle={item._title}
            clickHandler={() => clickHandler(index)}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    </MainContainer>
  );
};
