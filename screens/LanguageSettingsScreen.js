import React from "react";
import { View, Text } from "react-native";

import { useSelector } from "react-redux";

import Typography from "../constants/Typography.js";
import Theme from "../constants/Theme";

export default LanguageSettingsScreen = ({ navigation }) => {
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
            ? Typography.paragraph_light
            : Typography.paragraph_dark
        }
      >
        HI
      </Text>
    </View>
  );
};
