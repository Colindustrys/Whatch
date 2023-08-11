import React from "react";
import { View, Text, Button } from "react-native";

import { useSelector } from "react-redux";

import Colors from "../constants/Colors";
import Typography from "../constants/Typography.js";
import Theme from "../constants/Theme";

export default BrowseScreen = ({ navigation }) => {
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
            ? Typography.headline_small_light
            : Typography.headline_small_dark
        }
      >
        Zeit zum stöbern...
      </Text>
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
        color={Colors.accent}
      />
    </View>
  );
};
