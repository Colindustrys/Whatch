//React
import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

//API
import { getMovieDiscover } from "../api/endpoints.js";

//Styled Components
import {
  Headline,
  MainContainer,
  Paragraph,
  ParagraphSmall,
  RoundedPressable,
} from "../redux-store/StyledComponents.js";

import RoundedButtonComponent from "../components/RoundedButtonComponent.js";

export default RandomScreen = ({ navigation }) => {
  //useStates
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState([]);

  //Get States from Async Storage
  const storedPersonalProvider = useSelector(
    (state) => state.personalProviderList
  );

  const onRandomClick = () => {
    //TODO get List of random movies
    fetchMovieDetails(11);
  };

  //get movie object from getMovieDetails() and set movie state.
  const fetchMovieDetails = async (id) => {
    try {
      let movieListObject = await getMovieDiscover();
      movieIdsArray = movieListObject.ids;
      navigation.navigate("MovieDetailsListScreen", {
        movieIDs: movieIdsArray,
      });
    } catch (e) {
      setError("No internet");
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <Headline>Lass dich überraschen!</Headline>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <RoundedButtonComponent
          clickHandler={onRandomClick}
          iconName={"shuffle"}
          size={320}
          iconSize={160}
        />
      </View>
    </MainContainer>
  );
};
