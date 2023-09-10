//React
import React from "react";

//Styled Components
import {
  Container,
  Paragraph,
  ParagraphSmall,
} from "../redux-store/StyledComponents.js";

export default LanguageSettingsScreen = ({ navigation }) => {
  return (
    <Container>
      <Paragraph>Wähle deine bevorzugte Sprache</Paragraph>
      <ParagraphSmall>
        Diese Einstellung hilft, das du dich bei uns wie zuhause fühlst!
      </ParagraphSmall>
    </Container>
  );
};
