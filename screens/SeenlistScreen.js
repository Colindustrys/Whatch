import React from "react";
import { View, Text, Button } from "react-native";

import { useSelector } from "react-redux";

import Colors from "../constants/Colors";
import Typography from "../constants/Typography.js";
import Theme from "../constants/Theme";

export default SeenlistScreen = ({ navigation }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <View
      style={
        theme.mode == "light" ? Theme.container_light : Theme.container_dark
      }
    >
      <Button
        onPress={() => navigation.navigate("MovieDetailsScreen")}
        title="To Details"
        color={Colors.accent}
      />
    </View>
  );
};
