//React
import React, { useState } from "react";
import { FlatList, useWindowDimensions } from "react-native";

//API
import MovieDetailsScreen from "./MovieDetailsScreen.js";

//Styled Components
import { MovieDetailListContainer } from "../redux-store/StyledComponents.js";
import Movie from "../models/Movie.js";
import { getMovieDiscover } from "../api/endpoints";

export default MovieDetailListScreen = ({ route, navigation }) => {
  //get list of movieIDs from routing parameter
  const { movies, initialScrollIndex, requestParams, passedPageNR } =
    route.params;

  const [movieList, setMovieList] = useState(movies);
  const [pageNR, setPageNR] = useState(passedPageNR);

  const itemheight = useWindowDimensions().width;

  const [isFunctionRunning, setIsFunctionRunning] = useState(false);
  const loadMoreData = async () => {
    //if there is no pagenr like with the watchlist then dont try to load more data
    if (passedPageNR === undefined) {
      return;
    }
    if (isFunctionRunning) {
      console.log("Function is already running. Please wait.");
      return;
    }
    setIsFunctionRunning(true);
    try {
      //console.log(requestParams);
      //console.log(pageNR);
      requestParams.page = pageNR + 1;

      let newData = await getMovieDiscover(requestParams);
      setMovieList((prevData) => [...prevData, ...newData]);
      setPageNR(pageNR + 1);
    } catch (error) {
      //throw error;
    } finally {
      setIsFunctionRunning(false);
    }
  };

  //pass movieIDs to MovieDetailsScreen and render every ID as own movieScreen
  const renderItem = ({ item }) => {
    const movie = new Movie(item);
    return <MovieDetailsScreen passedMovie={movie} />;
  };

  return (
    <MovieDetailListContainer>
      <FlatList
        data={movieList}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        initialScrollIndex={initialScrollIndex}
        onEndReached={loadMoreData}
        getItemLayout={(data, index) => ({
          length: itemheight,
          offset: itemheight * index,
          index,
        })}
      />
    </MovieDetailListContainer>
  );
};
