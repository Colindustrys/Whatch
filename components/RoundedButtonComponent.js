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
    // Has to be onPressOut because of a bug in react native
    <Pressable onPressOut={() => clickHandler()}>
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
