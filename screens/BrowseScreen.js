//React
import React, { useState, useEffect } from "react";
import { Button, FlatList, Text, View } from "react-native";

//API
import { getBrowse } from "../api/endpoints.js";

//Styled Components
import {
  Headline,
  MainContainer,
  Paragraph,
  StyledActivityIndicator,
} from "../redux-store/StyledComponents.js";

import GenreListItem from "../components/GenreListItem.js";

export default BrowseScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movieLists, setMovieLists] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
<<<<<<< HEAD
    try {
      const newMovieLists = await getBrowse();
      setMovieLists(newMovieLists);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
=======
    const tempMovieLists = await getBrowse();
    // console.log("fetchmovies");
    // console.log(tempMovieList[0].data());
    setMovieLists(tempMovieLists);
    setLoading(false);
  };

  const clickHandler = (nr, movieList) => {
    navigation.navigate("MovieDetailsListScreen", {
      movieIDs: movieList,
      initialScrollIndex: nr,
    });
  };

  const renderItemPoster = ({ item, index }) => {
    // console.log("renderitem");
    // console.log(item);
    return (
      // <Text>{item.id} </Text>
      <MoviePosterItem
        moviePosterPath={item.posterPath}
        clickHandler={() => clickHandler(index, item.ids)}
      />
    );
  };

  const renderItemFlatlist = ({ item, index }) => {
    const movieList = item.data();

    return (
      <View>
        <Paragraph small>{item.title}</Paragraph>
        <FlatList
          data={movieList}
          keyExtractor={(item) => item.id}
          renderItem={renderItemPoster}
          horizontal
        />
      </View>
    );
>>>>>>> parent of d083fd9 (styling browse view)
  };

  return (
    <MainContainer>
      <Headline small>Zeit zum stöbern...</Headline>

      {loading ? (
        <StyledActivityIndicator />
      ) : error ? (
        <Headline small>{error}</Headline>
      ) : (
        <View>
          <FlatList
            data={movieLists}
            keyExtractor={(item) => item.title}
            renderItem={({ item, index }) => (
              <GenreListItem
                title={item.title}
                passedMovieList={item.movieArray}
                requestParams={item.requestParams}
                navigation={navigation}
              />
            )}
          />
        </View>
      )}
    </MainContainer>
  );
};
