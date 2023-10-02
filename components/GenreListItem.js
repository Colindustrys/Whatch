//React
import React from "react";

import MoviePosterItem from "./MoviePosterItem";
import { FlatList, View } from "react-native";
import { Paragraph } from "../redux-store/StyledComponents";

export default genreListItem = ({ title, movieList, navigation }) => {
  const clickHandler = (index) => {
    navigation.navigate("MovieDetailsListScreen", {
      movies: movieList,
      initialScrollIndex: index,
    });
  };

  return (
    <View>
      <Paragraph small>{title} l</Paragraph>
      <FlatList
        data={movieList}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <MoviePosterItem
            moviePosterPath={item.poster_path}
            clickHandler={() => clickHandler(index)}
          />
        )}
        horizontal
      />
    </View>
  );
};
