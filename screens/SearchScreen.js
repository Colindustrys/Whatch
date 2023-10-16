//React
import React, {useState} from "react";
import { Butto, Text, View } from "react-native";
import MySearchBar from "../components/MySearchBar";

//Styled Components
import { MainContainer } from "../redux-store/StyledComponents.js";

export default SearchScreen = ({ navigation }) => {

  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
    console.log(search);
  };

  return (
    <MainContainer>
      <MySearchBar searchState={search} updateSearch={updateSearch}/>
    </MainContainer>
  );
};
