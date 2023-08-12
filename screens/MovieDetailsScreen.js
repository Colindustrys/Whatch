import React from "react";
import { View, Text } from "react-native";

import { useSelector } from "react-redux";

import Typography from "../constants/Typography.js";
import Theme from "../constants/Theme";

export default MovieDetailsScreen = ({ navigation }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <View
      style={
        theme.mode == "light" ? Theme.container_light : Theme.container_dark
      }
    >
      <Text
        style={
          theme.mode == "light"
            ? Typography.headline_big_light
            : Typography.headline_big_dark
        }
      >
        Movie Details
      </Text>
    </View>
  );
};
