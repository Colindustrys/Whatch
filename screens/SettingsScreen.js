//React
import React from "react";
import { View } from "react-native";

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
        <Paragraph
          onPress={() => navigation.navigate("ProviderSettingsScreen")}
        >
          Your streaming services
        </Paragraph>
        <Paragraph onPress={() => navigation.navigate("SeenlistScreen")}>
          Seenlist
        </Paragraph>
        <Paragraph
          onPress={() => navigation.navigate("LanguageSettingsScreen")}
        >
          Language
        </Paragraph>
        <Paragraph onPress={() => navigation.navigate("ThemeSettingsScreen")}>
          Theme
        </Paragraph>
      </HalfWidthView>
    </MainContainer>
  );
};
