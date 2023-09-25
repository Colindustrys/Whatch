//React
import React from "react";
import { Button } from "react-native";

//Styled Components
import {
  Headline,
  MainContainer,
  Paragraph,
  ParagraphSmall,
} from "../redux-store/StyledComponents.js";

export default SearchScreen = ({ navigation }) => {
  return (
    <MainContainer>
      <Headline>Was suchst du?</Headline>
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
      />
    </MainContainer>
  );
};
