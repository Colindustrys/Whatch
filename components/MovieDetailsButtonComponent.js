//React
import * as React from "react";
import { Pressable } from "react-native";

//Styled Components
import {
  ParagraphSmall,
  StyledIonicon,
} from "../redux-store/StyledComponents.js";

export default ({ clickHandler, iconName, children }) => {
  return (
    <Pressable onPress={clickHandler}>
      <StyledIonicon name={iconName} size={48} />
      <ParagraphSmall>{children}</ParagraphSmall>
    </Pressable>
  );
};
