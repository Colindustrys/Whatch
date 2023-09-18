//React
import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";

//API
import { getMovieDiscover } from "../api/endpoints.js";

//Styled Components
import {
  HeadlineSmall,
  Container,
  Paragraph,
  ParagraphSmall,
  RoundedButton,
} from "../redux-store/StyledComponents.js";

import RoundedButtonComponent from "../components/RoundedButtonComponent.js";

export default RandomScreen = ({ navigation }) => {
  //useStates
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState([]);

  const onRandomClick = () => {
    //TODO get List of random movies
    fetchMovieDetails(11);
  };

  //get movie object from getMovieDetails() and set movie state.
  const fetchMovieDetails = async (id) => {
    try {
      let receivedMovie = await getMovieDiscover();
      navigation.navigate("MovieDetailsScreen", {
        movieID: receivedMovie[0],
      });
    } catch (e) {
      setError("No internet");
      setLoading(false);
    }
  };

  return (
    <Container>
      <HeadlineSmall>Lass dich überraschen!</HeadlineSmall>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <RoundedButtonComponent
          clickHandler={onRandomClick}
          iconName={"shuffle"}
          size={320}
          iconSize={160}
        />
      </View>
    </Container>
  );
};
