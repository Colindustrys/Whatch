//React
import React, { useState, useEffect } from "react";

import MoviePosterItem from "./MoviePosterItem";
import { FlatList, View, ActivityIndicator } from "react-native";
import { Paragraph, EmptyContainer } from "../redux-store/StyledComponents";
import { getMovieDiscover } from "../api/endpoints";
import { loaded } from "expo-font/build/memory";

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
    if (passedMovieList.length < 20) {
      setEndReached(true);
    }
  }, [passedMovieList]);

  const clickHandler = (index) => {
    navigation.navigate("MovieDetailsListScreen", {
      movies: movieList,
      initialScrollIndex: index,
      requestParams: requestParams,
      passedPageNR: pageNR,
    });
  };

  //is called then the end of the flatlist is reched to add more movies, uses isFunctionRunning to only run a single instance
  const [isFunctionRunning, setIsFunctionRunning] = useState(false);
  const loadMoreData = async () => {
    if (isFunctionRunning) {
      //console.log("Function is already running. Please wait.");
      return;
    }
    setIsFunctionRunning(true);

    try {
      requestParams.page = pageNR + 1;
      let newData = await getMovieDiscover(requestParams);
      setMovieList((prevData) => [...prevData, ...newData]);
      setPageNR(pageNR + 1);
      if (newData.length < 20) {
        setEndReached(true);
      }
    } catch (error) {
      //throw error;
    } finally {
      setIsFunctionRunning(false);
    }
  };

  //render loading indacator if there is still more data to load
  const [endReached, setEndReached] = useState(false);
  const renderFooter = () => {
    if (endReached) return null;

    return (
      <View style={{ paddingVertical: 20, paddingRight: 40, paddingLeft: 25 }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
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
        ListFooterComponent={renderFooter}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
};
