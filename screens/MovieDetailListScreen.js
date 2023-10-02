//React
import React from "react";
import { FlatList, useWindowDimensions } from "react-native";

//API
import MovieDetailsScreen from "./MovieDetailsScreen.js";

//Styled Components
import { MovieDetailListContainer } from "../redux-store/StyledComponents.js";
import Movie from "../models/Movie.js";

export default MovieDetailListScreen = ({ route, navigation }) => {
  //get list of movieIDs from routing parameter
  const { movies, initialScrollIndex } = route.params;

  

  const itemheight = useWindowDimensions().width;

  //pass movieIDs to MovieDetailsScreen and render every ID as own movieScreen
  const renderItem = ({ item }) => {
    const movie = new Movie(item);
    return <MovieDetailsScreen passedMovie={movie} />;
  };

  return (
    <MovieDetailListContainer>
      <FlatList
        data={movies}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        initialScrollIndex={initialScrollIndex}
        getItemLayout={(data, index) => ({
          length: itemheight,
          offset: itemheight * index,
          index,
        })}
      />
    </MovieDetailListContainer>
  );
};
