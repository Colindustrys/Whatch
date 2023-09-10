//React
import React from "react";
import { Button } from "react-native";

//Styled Components
import {
  HeadlineSmall,
  Container,
  Paragraph,
  ParagraphSmall,
} from "../redux-store/StyledComponents.js";

export default SearchScreen = ({ navigation }) => {
  return (
    <Container>
      <HeadlineSmall>Was suchst du?</HeadlineSmall>
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
      />
    </Container>
  );
};
