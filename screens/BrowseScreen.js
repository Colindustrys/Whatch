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

export default BrowseScreen = ({ navigation }) => {
  return (
    <Container>
      <HeadlineSmall>Zeit zum stöbern...</HeadlineSmall>
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
      />
    </Container>
  );
};
