//React
import React from "react";
import { Button } from "react-native";

//API
import { getMovieDetails } from "../api/endpoints.js";

//Styled Components
import {
  Headline,
  MainContainer,
  Paragraph,
} from "../redux-store/StyledComponents.js";

export default BrowseScreen = ({ navigation }) => {
  movieIDs = [11, 976573, 120, 346698, 634649];

  const temp = () => {
    for (const id of movieIDs) {
      getDetails(id);
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
    <MainContainer>
      <Headline small>Zeit zum stöbern...</Headline>
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
      />
      <Button onPress={temp} title="test" />
    </MainContainer>
  );
};
