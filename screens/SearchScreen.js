//React
import React, { useState } from "react";
import { Butto, Text, View } from "react-native";
import SearchBarComponent from "../components/MySearchBar";
import { SearchMovie } from "../api/endpoints/searchMovie";
import SearchResults from "../components/SearchResults";
import {
  StyledSearchbar,
  Headline,
  HalfWidthView,
} from "../redux-store/StyledComponents.js";

//Styled Components
import { MainContainer } from "../redux-store/StyledComponents.js";

let SearchScreen;
export default SearchScreen = ({ navigation }) => {
  const [searchString, setSearchString] = useState("");
  const [movieList, setMovieList] = useState();
  const [pageNr, setPageNr] = useState(1);

  const updateSearch = async (searchString) => {
    setSearchString(searchString);
    if (searchString) {
      //todo in try catch
      setMovieList(await SearchMovie(searchString, 1));
      setPageNr(2);
    } else {
      setMovieList([]);
    }
  };

  //clickhandler für ein Poster
  const clickHandler = (movieIndex) => {
    navigation.navigate("MovieDetailsListScreen", {
      movies: movieList,
      initialScrollIndex: movieIndex,
    });
  };

  //funktion um mehr filme zu laden wenn man am ende angelangt ist
  let isListEndReachedRunning = false;
  const listEndReached = async () => {
    if (isListEndReachedRunning) {
      console.log("Function is already running. Please wait.");
      return;
    }
    isListEndReachedRunning = true;

    try {
      //load more data
      console.log(pageNr);
      let newData = await SearchMovie(searchString, pageNr);
      setPageNr(pageNr + 1);
      setMovieList((prevData) => [...prevData, ...newData]);
    } catch (error) {
      throw error;
    } finally {
      isListEndReachedRunning = false;
    }
  };

  return (
    <MainContainer>
      <Headline small>Search</Headline>
      <HalfWidthView>
        <SearchBarComponent
          searchState={searchString}
          updateSearch={updateSearch}
        />
      </HalfWidthView>

      <SearchResults
        movieList={movieList}
        clickHandler={clickHandler}
        listEndReached={listEndReached}
      />
    </MainContainer>
  );
};
