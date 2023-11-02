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
} from "../redux-store/StyledComponents.js";

//Components
import MoviePosterItem from "../components/MoviePosterItem.js";

export default WatchlistScreen = ({ navigation }) => {
  //Get States from Async Storage
  const storedWatchList = useSelector((state) => state.watchList);

  //Calculate numberOfColumns for FlatList
  const itemFixedWidth = 80;
  const listWidth = useWindowDimensions().width - 48;
  const numberOfColumns = Math.floor(listWidth / itemFixedWidth);

  const clickHandler = (movieIndex) => {
    navigation.navigate("MovieDetailsListScreen", {
      movies: storedWatchList.movies,
      initialScrollIndex: movieIndex,
    });
  };

  return (
    <MainContainer>
      <FlatList
        numColumns={numberOfColumns}
        contentContainerStyle={{
          gap: 8,
        }}
        ListHeaderComponent={
          <View>
            <Paragraph>Schau dir deine persönliche Watchlist an</Paragraph>
            <Paragraph small>
              Du kannst deine gespeicherten Filme verwalten, indem du sie an
            </Paragraph>
          </View>
        }
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
