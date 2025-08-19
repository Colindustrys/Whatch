//React
import React from "react";
import { Button, View, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

//Styled Components
import {
  MainContainer,
  Paragraph,
  HalfWidthView,
} from "../redux-store/StyledComponents.js";

export default SettingsScreen = ({ navigation }) => {
  return (
    <MainContainer accessible={false}>
      <HalfWidthView accessible={false}>
        <TouchableOpacity
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Streaming-dienst einstellungen öffnen"
          onPress={() => navigation.navigate("ProviderSettingsScreen")}
          style={{ marginTop: 15 }}
        >
          <Paragraph accessible={false}>Deine Streaming Deinste</Paragraph>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Gesehen liste öffnen"
          onPress={() => navigation.navigate("SeenlistScreen")}
          accessible={true}
        >
          <Paragraph accessible={false}>Gesehen Liste</Paragraph>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Theme einstellungen öffnen"
          onPress={() => navigation.navigate("ThemeSettingsScreen")}
          accessible={true}
        >
          <Paragraph accessible={false}>Theme</Paragraph>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Credits öffnen"
          onPress={() => navigation.navigate("CreditsSettingsScreen")}
          accessible={true}
        >
          <Paragraph accessible={false}>Credits</Paragraph>
        </TouchableOpacity>
      </HalfWidthView>
    </MainContainer>
  );
};
