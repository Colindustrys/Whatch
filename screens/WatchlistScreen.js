//React
import React, { useEffect, useState } from "react";
import { View, Button, ScrollView, Pressable, Image } from "react-native";
import { useSelector } from "react-redux";

//API
import { getMovieDetails } from "../api/endpoints.js";

//Styled Components
import {
  HeadlineSmall,
  Container,
  Paragraph,
  ParagraphSmall,
  StyledActivityIndicator,
  StyledBackdrop,
  StyledPoster,
  StyledRowContainer,
  StyledPosterContainer,
} from "../redux-store/StyledComponents.js";

//Components
import MoviePosterItem from "../components/MoviePosterItem.js";

export default WatchlistScreen = ({ navigation }) => {
  //Get States from Async Storage
  const storedWatchList = useSelector((state) => state.watchListReducer);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //TODO call function with array as parameter
    storedWatchList.movies.map((movieID) => fetchSeenlistMovies(movieID));
  }, []);

  const fetchSeenlistMovies = async (id) => {
    try {
      //TODO another API function pls that accepts array of id and returns array of movie objects
      let receivedMovie = await getMovieDetails(id);
      setMovies((previous) => [...previous, receivedMovie]);
      setLoading(false);
    } catch (e) {
      //TODO: modal for errormessage
      setError("No internet");
      setLoading(false);
    }
  };

  const clickHandler = (movieID) => {
    //pass movieID to MovieDetailsScreen
    navigation.navigate("MovieDetailsScreen", {
      movieID: movieID,
    });
  };

  return (
    <View>
      {loading ? (
        //TODO own ActivityIndicator with Logo?
        <StyledActivityIndicator />
      ) : error ? (
        <HeadlineSmall>{error}</HeadlineSmall>
      ) : (
        <ScrollView>
          <Container>
            <Paragraph>Schau dir deine persönliche Watchlist an</Paragraph>
            <ParagraphSmall>
              Du kannst deine gespeicherten Filme verwalten, indem du sie
              anklickst.
            </ParagraphSmall>
            <StyledPosterContainer>
              {movies.map((movie) => (
                <MoviePosterItem
                  moviePosterPath={movie.poster_path}
                  clickHandler={() => clickHandler(movie.id)}
                />
              ))}
            </StyledPosterContainer>
          </Container>
        </ScrollView>
      )}
    </View>
  );
};
