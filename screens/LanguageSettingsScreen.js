//React
import React from "react";

//Styled Components
import {
  MainContainer,
  Paragraph,
  HalfWidthView,
} from "../redux-store/StyledComponents.js";

export default LanguageSettingsScreen = ({ navigation }) => {
  return (
    <MainContainer>
      <HalfWidthView>
        <Paragraph>Wähle deine bevorzugte Sprache</Paragraph>
        <Paragraph small>
          Diese Einstellung hilft, das du dich bei uns wie zuhause fühlst!
        </Paragraph>
      </HalfWidthView>
    </MainContainer>
  );
};
