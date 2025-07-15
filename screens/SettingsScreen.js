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
    <MainContainer>
      <HalfWidthView>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProviderSettingsScreen")}
          style={{ marginTop: 15 }}
        >
          <Paragraph>Your streaming services</Paragraph>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SeenlistScreen")}>
          <Paragraph>Seen List</Paragraph>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ThemeSettingsScreen")}
        >
          <Paragraph>Theme</Paragraph>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("CreditsSettingsScreen")}
        >
          <Paragraph>Credits</Paragraph>
        </TouchableOpacity>
      </HalfWidthView>
    </MainContainer>
  );
};
