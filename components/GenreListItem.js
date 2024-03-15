//React
import React, { useState, useEffect } from "react";

import MoviePosterItem from "./MoviePosterItem";
import { FlatList, View } from "react-native";
import { Paragraph, EmptyContainer } from "../redux-store/StyledComponents";
import { getMovieDiscover } from "../api/endpoints";

//horizontale poste Liste im Browse screen
export default genreListItem = ({
  title,
  passedMovieList,
  requestParams,
  navigation,
}) => {
  const [movieList, setMovieList] = useState(passedMovieList);
  const [pageNR, setPageNR] = useState(1);

  let flatlistRef;

  const itemWidth = 108;

  useEffect(() => {
    //update movielist if passed list changed
    setMovieList(passedMovieList);

    //scroll to beginning of list
    flatlistRef.scrollToOffset({ animated: false, offset: 0 });
  }, [passedMovieList]);

  const clickHandler = (index) => {
    navigation.navigate("MovieDetailsListScreen", {
      movies: movieList,
      initialScrollIndex: index,
    });
  };

  //is called then the end of the flatlist is reched to add more movies, uses isFunctionRunning to only run a single instance
  let isFunctionRunning = false;
  const loadMoreData = async () => {
    if (isFunctionRunning) {
      console.log("Function is already running. Please wait.");
      return;
    }
    isFunctionRunning = true;

    try {
      requestParams.page = pageNR + 1;
      let newData = await getMovieDiscover(requestParams);
      setMovieList((prevData) => [...prevData, ...newData]);
      setPageNR(pageNR + 1);
    } catch (error) {
      throw error;
    } finally {
      isFunctionRunning = false;
    }
  };

  return (
    <View>
      <Paragraph browse>{title}</Paragraph>
      <FlatList
        ref={(list) => (flatlistRef = list)}
        ListHeaderComponent={<EmptyContainer></EmptyContainer>}
        data={movieList}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => (
          <MoviePosterItem
            moviePosterPath={item.poster_path}
            clickHandler={() => clickHandler(index)}
          />
        )}
        horizontal
        onEndReached={loadMoreData}
        getItemLayout={(data, index) => ({
          length: itemWidth,
          offset: itemWidth * index,
          index,
        })}
        windowSize={4}
        maxToRenderPerBatch={3}
        //TODO add a loading indicator at the end
      />
    </View>
  );
};
