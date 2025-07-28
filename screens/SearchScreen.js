//React
import React, { useEffect, useState } from "react";
import { Butto, Text, View } from "react-native";
import SearchBarComponent from "../components/SearchBar";
import { SearchMovie } from "../api/endpoints/searchMovie";
import SearchResults from "../components/SearchResults";
import {
  StyledSearchbar,
  Headline,
  HalfWidthView,
} from "../redux-store/StyledComponents.js";

//Styled Components
import { MainContainer } from "../redux-store/StyledComponents.js";
import { useDebounce } from "../components/useDebounce";

let SearchScreen;
export default SearchScreen = ({ navigation }) => {
  const [searchString, setSearchString] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  const { debouncedQuery, setDebouncedQuery } = useDebounce(searchString, 300);

  useEffect(() => {
    updateSearch(debouncedQuery);
  }, [debouncedQuery]);

  //takes search string and sets the movielist when received
  const updateSearch = async (searchString) => {
    // setSearchString(searchString);
    if (searchString) {
      //todo in try catch
      try {
        let { newData } = await SearchMovie(searchString, 1);
        setMovieList(newData);
      } catch (err) {
        throw err;
      }
    } else {
      setMovieList([]);
    }
  };

  //clickhandler für ein Poster
  const clickHandler = (movieIndex) => {
    console.log("index: " + movieIndex)
    navigation.navigate("MovieDetailsListScreen", {
      movies: movieList,
      initialScrollIndex: movieIndex,
    });
  };

  return (
    <MainContainer>
      {/* <Headline small>Search</Headline> */}
      <HalfWidthView>
        <SearchBarComponent
          searchState={searchString}
          updateSearch={setSearchString}
        />
      </HalfWidthView>

      <SearchResults movieList={movieList} clickHandler={clickHandler} />
    </MainContainer>
  );
};
