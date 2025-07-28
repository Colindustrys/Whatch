//React
import React, { useEffect, useState, useRef } from "react";
import { FlatList, useWindowDimensions, Dimensions, AccessibilityInfo, findNodeHandle } from "react-native";
import { useSelector } from "react-redux";

//Styled Components
import {
  Headline,
  MainContainer,
  Paragraph,
  StyledActivityIndicator,
  HalfWidthView,
  PosterImage,
} from "../redux-store/StyledComponents.js";

//Components
import MoviePosterItem from "../components/MoviePosterItem.js";
import * as ScreenOrientation from "expo-screen-orientation";

export default WatchlistScreen = ({ navigation }) => {
  //Get States from Async Storage
  const storedWatchList = useSelector((state) => state.watchList);
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
    // Focus after delay so layout has time to finish
    const timeout = setTimeout(() => {
      if (firstItemRef.current) {
        const node = findNodeHandle(firstItemRef.current);
        if (node) {
          AccessibilityInfo.setAccessibilityFocus(node);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [storedWatchList]);

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

    //console.log((listWidth - (newNumberOfColumns * itemFixedWidth)), newNumberOfColumns + 1)
    // Update state only if values change
    if (newNumberOfColumns !== numberOfColumns) {
      setNumberOfColumns(newNumberOfColumns);
    }
    if (newFlatListColumnGap !== flatListColumnGap) {
      setFlatListColumnGap(newFlatListColumnGap);
    }
  };

  const clickHandler = (movieIndex) => {
    navigation.navigate("MovieDetailsListScreen", {
      movies: storedWatchList.movies,
      initialScrollIndex: movieIndex,
    });
  };

  return (
    <MainContainer accessible={false}>
      <FlatList
        accessible={false}
        key={numberOfColumns}
        numColumns={numberOfColumns}
        contentContainerStyle={{
          gap: 8,
        }}
        columnWrapperStyle={{ gap: flatListColumnGap }}
        data={storedWatchList.movies}
        renderItem={({ item, index }) => (
          <MoviePosterItem
            ref={index === 0 ? firstItemRef : null}
            moviePosterPath={item._poster_path}
            movieTitle={item._title}
            withoutMargin={true}
            clickHandler={() => clickHandler(index)}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    </MainContainer>
  );
};
