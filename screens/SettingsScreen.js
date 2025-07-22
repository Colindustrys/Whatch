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
          accessibilityLabel="Open your streaming services setting"
          onPress={() => navigation.navigate("ProviderSettingsScreen")}
          style={{ marginTop: 15 }}
        >
          <Paragraph accessible={false}>Your streaming services</Paragraph>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Open seen list"
          onPress={() => navigation.navigate("SeenlistScreen")}
          accessible={true}
        >
          <Paragraph accessible={false}>Seen List</Paragraph>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Open Theme settings"
          onPress={() => navigation.navigate("ThemeSettingsScreen")}
          accessible={true}
        >
          <Paragraph accessible={false}>Theme</Paragraph>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Open credits for this app"
          onPress={() => navigation.navigate("CreditsSettingsScreen")}
          accessible={true}
        >
          <Paragraph accessible={false}>Credits</Paragraph>
        </TouchableOpacity>
      </HalfWidthView>
    </MainContainer>
  );
};
