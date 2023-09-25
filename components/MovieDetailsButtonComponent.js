//React
import * as React from "react";
import { Pressable } from "react-native";

//Styled Components
import {
  Paragraph,
  StyledIonicon,
  PressableView,
} from "../redux-store/StyledComponents.js";

export default ({ clickHandler, iconName, children }) => {
  return (
    <Pressable onPress={clickHandler}>
      {({ pressed }) => (
        <PressableView pressed={pressed} size={80}>
          <StyledIonicon name={iconName} size={32} colorIsTextColor={true} />
          <Paragraph small>{children}</Paragraph>
        </PressableView>
      )}
    </Pressable>
  );
};
