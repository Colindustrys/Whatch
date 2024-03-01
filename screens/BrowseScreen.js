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
import { useSelector } from "react-redux";

export default BrowseScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movieLists, setMovieLists] = useState(null);

  const storedPersonalProvider = useSelector(
    (state) => state.personalProviderList,
  );

  useEffect(() => {
    console.log("providers changed");
    fetchMovies();
  }, [storedPersonalProvider.provider]);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const newMovieLists = await getBrowse();
      setMovieLists(newMovieLists);
      console.log("set new movie list");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <MainContainer browse>
      {loading ? (
        <StyledActivityIndicator />
      ) : error ? (
        <Headline small>{error}</Headline>
      ) : (
        <View>
          <FlatList
            ListHeaderComponent={<Headline small>Browse:</Headline>}
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
