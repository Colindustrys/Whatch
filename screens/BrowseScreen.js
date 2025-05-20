//React
import React, { useState, useEffect } from "react";
import { Button, FlatList, Text, View, RefreshControl } from "react-native";
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
  TopNavigationContainer,
} from "../redux-store/StyledComponents.js";

import GenreListItem from "../components/GenreListItem.js";
import RoundedButtonComponent from "../components/RoundedButtonComponent";

export default BrowseScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movieLists, setMovieLists] = useState(null);

  const isFocused = useIsFocused();

  const storedPersonalProvider = useSelector(
    (state) => state.personalProviderList
  );

  const freeChargeSwitch = useSelector((state) => state.filterMethod);

  //set providersChanged when user changes them
  const [providersChanged, setProvidersChanged] = useState(false);
  useEffect(() => {
    //console.log("storedPersonalProvider changed");
    setProvidersChanged(true);
  }, [storedPersonalProvider?.provider]);

  //fetch movies when page comes back into focus and the providers have changed
  //also fetch them on first load
  useEffect(() => {
    //console.log("isfocused, providerschanges: " + providersChanged);
    if (providersChanged) {
      //console.log("provider changed");
      setLoading(true);
      fetchMovies();
      setProvidersChanged(false);
    }
  }, [isFocused]);

  const [isFetching, setIsFetching] = useState(false);
  const fetchMovies = async () => {
    if (isFetching) {
      //console.log("Fetch operation is already in progress");
      return;
    }
    try {
      setIsFetching(true);
      let newMovieLists = await getBrowse();
      setMovieLists(newMovieLists);
      //console.log("set new movie list");
      // console.log(newMovieLists[0]);
      setLoading(false);
      setProvidersChanged(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    console.log("useeffect");
    fetchMovies();
  }, []);

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
            // ListHeaderComponent={<Headline small>Browse:</Headline>}
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
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={fetchMovies} />
            }
          />
        </View>
      )}
    </MainContainer>
  );
};
