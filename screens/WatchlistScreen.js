//React
import React, { useEffect, useState } from "react";
import { FlatList, useWindowDimensions } from "react-native";
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


  //useWindowsDimensions hook
  const { width } = useWindowDimensions();
  //TODO dont use the margin hardcoded, get it from Theme
  const itemFixedWidth = 92;

  //update numberOfColumns when the screen width changes
  useEffect(() => {
    setNumberOfColumns(calculateNumColumns(width));
    setFlatListColumnGap(calculatePosterImageMarginRight());
  }, [width]);

  //Calculate numberOfColumns for FlatList
  const calculateNumColumns = (screenWidth) => {
    //TODO dont use the margin hardcoded, get it from Theme
    const listWidth = screenWidth - 2* (storedAppearance.isTablet ? 56 : 24);
    return Math.floor(listWidth / itemFixedWidth);
  };

  const calculatePosterImageMarginRight = () => {
    //TODO dont use hardcoded nums --> get from Theme
    const listWidth = width - 2* (storedAppearance.isTablet ? 56 : 24);
    return Math.floor((listWidth - (numberOfColumns * itemFixedWidth)) / numberOfColumns +1 )
  };

  //usestates
  const [numberOfColumns, setNumberOfColumns] = useState(
      calculateNumColumns(width)
  );
  const [flatListColumnGap, setFlatListColumnGap] = useState(
      calculatePosterImageMarginRight(width)
  );

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
