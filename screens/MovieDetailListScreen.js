//React
import React from "react";
import { FlatList } from "react-native";

//API
import MovieDetailsScreen from "./MovieDetailsScreen.js";

//Styled Components
import { MovieDetailListContainer } from "../redux-store/StyledComponents.js";

export default MovieDetailListScreen = ({ route, navigation }) => {
  //get list of movieIDs from routing parameter
  const { movieIDs } = route.params;

  //pass movieIDs to MovieDetailsScreen and render every ID as own movieScreen
  const renderItem = ({ item }) => {
    return <MovieDetailsScreen movieID={item} />;
  };

  return (
    <MovieDetailListContainer>
      <FlatList
        data={movieIDs}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        horizontal
        pagingEnabled
      />
    </MovieDetailListContainer>
  );
};
