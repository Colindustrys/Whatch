//React
import React, { useState, useEffect } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";

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

  const isFocused = useIsFocused();

  const storedPersonalProvider = useSelector(
    (state) => state.personalProviderList
  );

  //set providersChanged when user changes them
  const [providersChanged, setProvidersChanged] = useState(true); //is true on start so that useeffect below fetched movies when page first loads
  useEffect(() => {
    //console.log("providers changed");
    setProvidersChanged(true);
  }, [storedPersonalProvider?.provider]);

  //fetch movies when page comes back into focus and the providers have changed
  //also fetch them on first load
  useEffect(() => {
    //console.log("isfocused, providerschanges: " + providersChanged);
    if (providersChanged) {
      //console.log("fetching movies");
      setLoading(true);
      fetchMovies();
      setProvidersChanged(false);
    }
  }, [isFocused]);

  const fetchMovies = async () => {
    try {
      let newMovieLists = await getBrowse();
      setMovieLists(newMovieLists);
      //console.log("set new movie list");
      // console.log(newMovieLists[0]);
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
            key={movieLists}
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
