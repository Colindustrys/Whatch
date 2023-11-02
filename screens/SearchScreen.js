//React
import React, { useState } from "react";
import { Butto, Text, View } from "react-native";
import MySearchBar from "../components/MySearchBar";
import { SearchMovie } from "../api/endpoints/searchMovie";

//Styled Components
import { MainContainer } from "../redux-store/StyledComponents.js";

export default SearchScreen = ({ navigation }) => {
  const [searchString, setSearchString] = useState("");

  const updateSearch = (searchString) => {
    setSearchString(searchString);
    //console.log(searchString);
    SearchMovie(searchString, 1);
  };

  return (
    <MainContainer>
      <MySearchBar searchState={searchString} updateSearch={updateSearch} />
      {/* results */}
    </MainContainer>
  );
};
