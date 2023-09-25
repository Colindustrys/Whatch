//React
import * as React from "react";
import { Pressable } from "react-native";

//Styled Components
import {
  StyledIonicon,
  PressableRoundedView,
} from "../redux-store/StyledComponents.js";

export default ({
  clickHandler,
  iconName,
  size,
  colorIsTextColor,
  isTransparent,
  iconSize,
}) => {
  return (
    <Pressable onPress={() => clickHandler()}>
      {({ pressed }) => (
        <PressableRoundedView
          pressed={pressed}
          size={size}
          isTransparent={isTransparent}
        >
          <StyledIonicon
            name={iconName}
            size={iconSize}
            colorIsTextColor={colorIsTextColor}
          />
        </PressableRoundedView>
      )}
    </Pressable>
  );
};
