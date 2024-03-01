//React
import React, { useEffect, useState } from "react";
import { FlatList, useWindowDimensions, Dimensions } from "react-native";
import { useSelector } from "react-redux";

//Styled Components
import {
  Headline,
  MainContainer,
  Paragraph,
  StyledActivityIndicator,
  HalfWidthView, PosterImage,
} from "../redux-store/StyledComponents.js";

//Components
import MoviePosterItem from "../components/MoviePosterItem.js";
import * as ScreenOrientation from "expo-screen-orientation";

export default WatchlistScreen = ({ navigation }) => {

  //Get States from Async Storage
  const storedWatchList = useSelector((state) => state.watchList);
  const storedAppearance = useSelector((state) => state.appearance);

  //usestates
  const [numberOfColumns, setNumberOfColumns] = useState(8);
  const [flatListColumnGap, setFlatListColumnGap] = useState(20);

  //TODO dont use the margin hardcoded, get it from Theme
  const itemFixedWidth = 92;

  useEffect(() => {
    calculateDimensions();
    Dimensions.addEventListener('change', () => {
      calculateDimensions();
    });
  }, []);


  //Calculate Dimensions for FlatList
  const calculateDimensions = () => {
    //TODO dont use the margin hardcoded, get it from Theme
    const listWidth = Dimensions.get('screen').width - 2* (storedAppearance.isTablet ? 56 : 24);
    const newNumberOfColumns = Math.floor(listWidth / itemFixedWidth);
    const newFlatListColumnGap = (listWidth - (newNumberOfColumns * itemFixedWidth)) / newNumberOfColumns + 1;

    console.log((listWidth - (newNumberOfColumns * itemFixedWidth)), newNumberOfColumns + 1)
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
    <MainContainer>
      <FlatList
        key={numberOfColumns}
        numColumns={numberOfColumns}
        contentContainerStyle={{
          gap: 8,
        }}
        columnWrapperStyle={{gap: flatListColumnGap}}
        data={storedWatchList.movies}
        renderItem={({ item, index }) => (
          <MoviePosterItem
            moviePosterPath={item._poster_path}
            withoutMargin={true}
            clickHandler={() => clickHandler(index)}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    </MainContainer>
  );
};
