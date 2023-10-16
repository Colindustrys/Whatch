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
    try {
      const newMovieLists = await getBrowse();
      setMovieLists(newMovieLists);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
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
