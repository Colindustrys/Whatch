//React
import React, { useState } from "react";
import { View, FlatList, useWindowDimensions } from "react-native";

export default SearchResults = ({ movieList, clickHandler, listEndReached }) => {
  //Calculate numberOfColumns for FlatList
  const itemFixedWidth = 108;
  const listWidth = useWindowDimensions().width - 48;
  const numberOfColumns = Math.floor(listWidth / itemFixedWidth);

  return (
    <View>
      <FlatList
        numColumns={numberOfColumns}
        contentContainerStyle={{
          gap: 8,
        }}
        data={movieList}
        onEndReached={listEndReached}
        renderItem={({ item, index }) => (
          <MoviePosterItem
            moviePosterPath={item._poster_path}
            clickHandler={() => clickHandler(index)}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};
