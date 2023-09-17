//React
import React, { useEffect, useState } from "react";
import { View, Button, ScrollView, Pressable, Image } from "react-native";
import { useSelector } from "react-redux";

//Styled Components
import {
  StyledSwitch,
  ParagraphSmall,
  ProviderItemContainer,
} from "../redux-store/StyledComponents.js";

export default MoviePosterItem = ({ clickHandler, moviePosterPath }) => {
  return (
    <Pressable onPress={clickHandler}>
      <Image
        style={{
          width: 72,
          aspectRatio: 2 / 3,
          resizeMode: "contain",
        }}
        source={{
          uri: "https://image.tmdb.org/t/p/w1280" + moviePosterPath,
        }}
      />
    </Pressable>
  );
};
