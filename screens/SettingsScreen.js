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
          Deine Streamingdienste
        </Paragraph>
        <Paragraph onPress={() => navigation.navigate("SeenlistScreen")}>
          Schon gesehen-Liste
        </Paragraph>
        <Paragraph
          onPress={() => navigation.navigate("LanguageSettingsScreen")}
        >
          Spracheinstellungen
        </Paragraph>
        <Paragraph onPress={() => navigation.navigate("ThemeSettingsScreen")}>
          Theme
        </Paragraph>
      </HalfWidthView>
    </MainContainer>
  );
};
