//React
import React, { useState, useEffect } from "react";
import { View, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

//API
import { getMovieDetails } from "../api/endpoints.js";
import MovieDetailsScreen from "./MovieDetailsScreen.js";

export default MovieDetailListScreen = ({ route, navigation }) => {
  tempIdList = [11, 976573, 120, 346698, 634649]; //976573, 120, 346698, 634649, 

  const renderItem = ({ item }) => {
    return <MovieDetailsScreen movieID={item}/>;
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={tempIdList}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        horizontal
        pagingEnabled
      />
    </View>
  );
};
