import React from "react";
import { View, Text, Button } from "react-native";

import { useSelector } from "react-redux";

import Typography from "../constants/Typography.js";
import Theme from "../constants/Theme";

export default SettingsScreen = ({ navigation }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <View
      style={
        theme.mode == "light" ? Theme.container_light : Theme.container_dark
      }
    >
      <Text
        onPress={() => navigation.navigate("ProviderSettingsScreen")}
        style={
          theme.mode == "light"
            ? Typography.paragraph_light
            : Typography.paragraph_dark
        }
      >
        Deine Streamingdienste
      </Text>
      <Text
        onPress={() => navigation.navigate("SeenlistScreen")}
        style={
          theme.mode == "light"
            ? Typography.paragraph_light
            : Typography.paragraph_dark
        }
      >
        Schon gesehen-Liste
      </Text>
      <Text
        onPress={() => navigation.navigate("LanguageSettingsScreen")}
        style={
          theme.mode == "light"
            ? Typography.paragraph_light
            : Typography.paragraph_dark
        }
      >
        Spracheinstellungen
      </Text>
      <Text
        onPress={() => navigation.navigate("ThemeSettingsScreen")}
        style={
          theme.mode == "light"
            ? Typography.paragraph_light
            : Typography.paragraph_dark
        }
      >
        Theme
      </Text>
    </View>
  );
};
