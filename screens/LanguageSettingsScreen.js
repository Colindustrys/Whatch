//React
import React from "react";

//Styled Components
import {
  MainContainer,
  Paragraph,
  ParagraphSmall,
} from "../redux-store/StyledComponents.js";

export default LanguageSettingsScreen = ({ navigation }) => {
  return (
    <MainContainer>
      <Paragraph>Wähle deine bevorzugte Sprache</Paragraph>
      <ParagraphSmall>
        Diese Einstellung hilft, das du dich bei uns wie zuhause fühlst!
      </ParagraphSmall>
    </MainContainer>
  );
};
