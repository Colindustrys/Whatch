//React
import React from "react";
import { Button } from "react-native";
import { useSelector } from "react-redux";

//Styled Components
import {
  HeadlineSmall,
  Container,
  Paragraph,
  ParagraphSmall,
} from "../redux-store/StyledComponents.js";

export default SeenlistScreen = ({ navigation }) => {
  //Get States from Async Storage
  const storedSeenList = useSelector((state) => state.seenListReducer);

  return (
    <Container>
      <HeadlineSmall>Deine Seenlist</HeadlineSmall>
      <Paragraph>
        Vorhandene Movies in SeenList
        {storedSeenList.movies.map((movies) => " " + movies)}
      </Paragraph>
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
      />
    </Container>
  );
};
