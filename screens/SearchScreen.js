//React
import React, { useState } from "react";
import { Butto, Text, View } from "react-native";
import MySearchBar from "../components/MySearchBar";
import { SearchMovie } from "../api/endpoints/searchMovie";
import SearchResults from "../components/SearchResults";

//Styled Components
import { MainContainer } from "../redux-store/StyledComponents.js";

export default SearchScreen = ({ navigation }) => {
  const [searchString, setSearchString] = useState("");
  const [movieList, setMovieList] = useState();

  const updateSearch = async (searchString) => {
    setSearchString(searchString);
    if (searchString)
    setMovieList(await SearchMovie(searchString, 1));
  };

  const clickHandler = (movieIndex) => {
    navigation.navigate("MovieDetailsListScreen", {
      movies: movieList,
      initialScrollIndex: movieIndex,
    });
  };

  const listEndReached = () => {
    //load more data 
    
  }

  return (
    <MainContainer>
      <MySearchBar searchState={searchString} updateSearch={updateSearch} />
      <SearchResults movieList={movieList} clickHandler={clickHandler} />
    </MainContainer>
  );
};
