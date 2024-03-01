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

  const [screenWidth, setScreenWidth] = useState(
      Dimensions.get('screen').width
  );

  //useWindowsDimensions hook
  //TODO dont use the margin hardcoded, get it from Theme
  const itemFixedWidth = 92;

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setNumberOfColumns(calculateNumColumns(Dimensions.get('screen').width));
      setFlatListColumnGap(calculatePosterImageMarginRight(Dimensions.get('screen').width));
    });
  }, []);

  //update numberOfColumns when the screen width changes

  //Calculate numberOfColumns for FlatList
  const calculateNumColumns = () => {
    //TODO dont use the margin hardcoded, get it from Theme
    const listWidth = Dimensions.get('screen').width - 2* (storedAppearance.isTablet ? 56 : 24);
    return Math.floor(listWidth / itemFixedWidth);
  };

  const calculatePosterImageMarginRight = () => {
    const listWidth = Dimensions.get('screen').width - 2* (storedAppearance.isTablet ? 56 : 24);
    let nums =  Math.floor(listWidth / itemFixedWidth);

    //TODO dont use hardcoded nums --> get from Theme
    return Math.floor((listWidth - (nums * itemFixedWidth)) / nums +1 )
  };

  //usestates
  const [numberOfColumns, setNumberOfColumns] = useState(
      calculateNumColumns()
  );
  const [flatListColumnGap, setFlatListColumnGap] = useState(
      calculatePosterImageMarginRight()
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
