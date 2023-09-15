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

export default WatchlistScreen = ({ navigation }) => {
  //Get States from Async Storage
  const storedWatchList = useSelector((state) => state.watchListReducer);

  return (
    <Container>
      <HeadlineSmall>Deine Watchlist</HeadlineSmall>
      <Paragraph>
        Vorhandene Movies in WatchList:
        {storedWatchList.movies.map((movies) => " " + movies)}
      </Paragraph>
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
      />
    </Container>
  );
};
