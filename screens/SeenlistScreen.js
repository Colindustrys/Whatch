//React
import React, { useEffect, useState } from "react";
import { View, FlatList, useWindowDimensions } from "react-native";
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
        ListHeaderComponent={
          <View>
            <Paragraph>Schau dir deine persönliche Seenlist an</Paragraph>
            <Paragraph small>
              Du kannst deine gespeicherten Filme verwalten, indem du sie an
            </Paragraph>
          </View>
        }
        data={storedSeenList.movies}
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
