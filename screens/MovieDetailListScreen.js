//React
import React from "react";
import { FlatList, useWindowDimensions } from "react-native";

//API
import MovieDetailsScreen from "./MovieDetailsScreen.js";

//Styled Components
import { MovieDetailListContainer } from "../redux-store/StyledComponents.js";

export default MovieDetailListScreen = ({ route, navigation }) => {
  //get list of movieIDs from routing parameter
  const { movies, initialScrollIndex } = route.params;

  const itemheight = useWindowDimensions().width;

  //pass movieIDs to MovieDetailsScreen and render every ID as own movieScreen
  const renderItem = ({ item }) => {
    return <MovieDetailsScreen passedMovie={item} />;
  };

  return (
    <MovieDetailListContainer>
      <FlatList
        data={movies}
        keyExtractor={(item) => item}
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
