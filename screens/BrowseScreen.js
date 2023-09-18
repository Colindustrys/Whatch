//React
import React from "react";
import { Button } from "react-native";
import moviedb from "../api/movieDbInstance.js";
import { getMovieDetails } from "../api/endpoints.js";

//Styled Components
import {
  HeadlineSmall,
  Container,
  Paragraph,
  ParagraphSmall,
} from "../redux-store/StyledComponents.js";

export default BrowseScreen = ({ navigation }) => {
  movieIDs = [11, 976573, 120, 346698, 634649];

  const temp = () => {
    for (const id of movieIDs) {
      getDetails(id)
    }
  };

  const getDetails = async (id) => {
    try {
      res = await getMovieDetails(id);
      //console.log(res.title);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <Container>
      <HeadlineSmall>Zeit zum stöbern...</HeadlineSmall>
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
      />
      <Button onPress={temp} title="test" />
    </Container>
  );
};
