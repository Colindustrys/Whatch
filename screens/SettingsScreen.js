//React
import React from "react";

//Styled Components
import { MainContainer, Paragraph } from "../redux-store/StyledComponents.js";

export default SettingsScreen = ({ navigation }) => {
  return (
    <MainContainer>
      <Paragraph onPress={() => navigation.navigate("ProviderSettingsScreen")}>
        Deine Streamingdienste
      </Paragraph>
      <Paragraph onPress={() => navigation.navigate("SeenlistScreen")}>
        Schon gesehen-Liste
      </Paragraph>
      <Paragraph onPress={() => navigation.navigate("LanguageSettingsScreen")}>
        Spracheinstellungen
      </Paragraph>
      <Paragraph onPress={() => navigation.navigate("ThemeSettingsScreen")}>
        Theme
      </Paragraph>
    </MainContainer>
  );
};
