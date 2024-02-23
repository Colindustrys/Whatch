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
  HalfWidthView,
} from "../redux-store/StyledComponents.js";

//Components
import MoviePosterItem from "../components/MoviePosterItem.js";

export default WatchlistScreen = ({ navigation }) => {
  //Get States from Async Storage
  const storedWatchList = useSelector((state) => state.watchList);

  //useWindowsDimensions hook
  const { width } = useWindowDimensions();

  //update numberOfColumns when the screen width changes
  useEffect(() => {
    setNumberOfColumns(calculateNumColumns(width));
  }, [width]);

  //Calculate numberOfColumns for FlatList
  const calculateNumColumns = (screenWidth) => {
    listWidth = screenWidth - 48;
    const itemFixedWidth = 108;
    return Math.floor(listWidth / itemFixedWidth);
  };

  //usestate for the column number
  const [numberOfColumns, setNumberOfColumns] = useState(
    calculateNumColumns(width)
  );

  const clickHandler = (movieIndex) => {
    navigation.navigate("MovieDetailsListScreen", {
      movies: storedWatchList.movies,
      initialScrollIndex: movieIndex,
    });
  };

  return (
    <MainContainer notCentered>
      <FlatList
        key={numberOfColumns}
        numColumns={numberOfColumns}
        contentContainerStyle={{
          gap: 8,
        }}
        data={storedWatchList.movies}
        renderItem={({ item, index }) => (
          <MoviePosterItem
            moviePosterPath={item._poster_path}
            clickHandler={() => clickHandler(index)}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    </MainContainer>
  );
};
