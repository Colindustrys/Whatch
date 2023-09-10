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

export default RandomScreen = ({ navigation }) => {
  return (
    <Container>
      <HeadlineSmall>Lass dich überraschen!</HeadlineSmall>
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
      />
    </Container>
  );
};
