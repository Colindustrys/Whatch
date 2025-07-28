//React
import React, { useState, useEffect, useRef } from "react";

import MoviePosterItem from "./MoviePosterItem";
import {
  FlatList,
  View,
  ActivityIndicator,
  AccessibilityInfo,
  findNodeHandle
} from "react-native";
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

  // only enable on end reached when screnereader is off
  const [isScreenReaderEnabled, setIsScreenReaderEnabled] = useState(false);
  useEffect(() => {
    // Check initial status
    AccessibilityInfo.isScreenReaderEnabled().then(setIsScreenReaderEnabled);

    // Subscribe to changes
    const subscription = AccessibilityInfo.addEventListener(
      "screenReaderChanged",
      setIsScreenReaderEnabled
    );

    return () => subscription.remove();
  }, []);

  // set focus to first new movie when new movies were loaded
  const firstNewMovieRef = useRef(null);
  const [newMovieDataLength, setNewMovieDataLength] = useState(0);

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
    console.log("loadmoredata");
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

  const [isButtonFunctionRunning, setIsButtonFunctionRunning] = useState(false);
  const loadMoreDataButton = async () => {
    if (isButtonFunctionRunning) {
      //console.log("Function is already running. Please wait.");
      return;
    }
    setIsButtonFunctionRunning(true);

    try {
      requestParams.page = pageNR + 1;
      let newData = await getMovieDiscover(requestParams);
      setNewMovieDataLength(newData.length);
      setMovieList((prevData) => [...prevData, ...newData]);
      setPageNR(pageNR + 1);
      if (newData.length < 20) {
        setEndReached(true);
      }
    } catch (error) {
      //throw error;
    } finally {
      setIsButtonFunctionRunning(false);
    }

    // // set screenreader focus to first new movie
    // setTimeout(() => {
    //   if (firstNewMovieRef.current) {
    //     const nodeHandle = findNodeHandle(firstNewMovieRef.current);
    //     if (nodeHandle) {
    //       AccessibilityInfo.setAccessibilityFocus(nodeHandle);
    //     }
    //   }
    // }, 500); // adjust timing if needed
  };

  //render loading indacator if there is still more data to load
  const [endReached, setEndReached] = useState(false);
  const renderFooter = () => {
    if (endReached) return null;

    return (
      <View
        style={{ paddingVertical: 20, paddingRight: 40, paddingLeft: 25 }}
        accessible={true}
        accessibilityLabel={`Load more movies`}
        accessibilityRole="button"
        accessibilityActions={[{ name: "activate", label: "load movies" }]}
        onAccessibilityAction={() => {
          loadMoreDataButton();
        }}
        onAccessibilityTap={() => {
          loadMoreDataButton();
        }}
      >
        <ActivityIndicator accessible={false} animating size="large" />
      </View>
    );
  };

  return (
    <View>
      <Paragraph accessibilityLabel={`Genre ${title}`} browse>
        {title}
      </Paragraph>
      <FlatList
        ref={(list) => (flatlistRef = list)}
        ListHeaderComponent={<EmptyContainer></EmptyContainer>}
        data={movieList}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => (
          <MoviePosterItem
            ref={
              index === movieList.length - newMovieDataLength
                ? firstNewMovieRef
                : null
            }
            moviePosterPath={item.poster_path}
            clickHandler={() => clickHandler(index)}
            movieTitle={item.title}
          />
        )}
        horizontal
        onEndReached={!isScreenReaderEnabled ? loadMoreData : null}
        getItemLayout={(data, index) => ({
          length: itemWidth,
          offset: itemWidth * index,
          index,
        })}
        windowSize={4}
        maxToRenderPerBatch={3}
        ListFooterComponent={renderFooter}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
