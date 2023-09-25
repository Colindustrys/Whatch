//React
import React, { useEffect, useState } from "react";
import { View, FlatList, useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";

//API
import { getMovieDetails } from "../api/endpoints.js";

//Styled Components
import {
  Headline,
  MainContainer,
  Paragraph,
  ParagraphSmall,
  StyledActivityIndicator,
} from "../redux-store/StyledComponents.js";

//Components
import MoviePosterItem from "../components/MoviePosterItem.js";

export default SeenlistScreen = ({ navigation }) => {
  //Get States from Async Storage
  const storedSeenList = useSelector((state) => state.seenList);

  //Calculate numberOfColumns for FlatList
  const itemFixedWidth = 80;
  const listWidth = useWindowDimensions().width - 48;
  const numberOfColumns = Math.floor(listWidth / itemFixedWidth);

  //useStates
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //TODO call function with array as parameter
    storedSeenList.movies.map((movieID) => fetchWatchlistMovies(movieID));
  }, []);

  const fetchWatchlistMovies = async (id) => {
    try {
      //TODO another API function pls that accepts array of id and returns array of movie objects
      let receivedMovie = await getMovieDetails(id);
      setMovies((previous) => [...previous, receivedMovie]);
      setLoading(false);
    } catch (e) {
      //TODO: modal for errormessage
      setError("No intrddnetf");
      setLoading(false);
    }
  };

  const clickHandler = (nr) => {
    //pass movieID to MovieDetailsScreen
    navigation.navigate("MovieDetailsListScreen", {
      movieIDs: storedSeenList.movies,
      initialScrollIndex: nr,
    });
  };

  return (
    <MainContainer>
      {loading ? (
        //TODO own ActivityIndicator with Logo?
        <StyledActivityIndicator />
      ) : error ? (
        <Headline>{error}</Headline>
      ) : (
        <FlatList
          numColumns={numberOfColumns}
          contentContainerStyle={{
            gap: 8,
          }}
          ListHeaderComponent={
            <View>
              <Paragraph>Schau dir deine persönliche Seenlist an</Paragraph>
              <ParagraphSmall>
                Du kannst deine gespeicherten Filme verwalten, indem du sie an
              </ParagraphSmall>
            </View>
          }
          data={movies}
          renderItem={({ item, index }) => (
            <MoviePosterItem
              moviePosterPath={item.poster_path}
              clickHandler={() => clickHandler(index)}
            />
          )}
          keyExtractor={(item, index) => index}
        />
      )}
    </MainContainer>
  );
};
