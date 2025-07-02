//React
import * as React from "react";
// import {  } from "react-native";
import { TouchableOpacity, Pressable } from "react-native-gesture-handler";

//Styled Components
import {
  StyledIonicon,
  PressableRoundedView,
  RoundedPressable,
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

    <TouchableOpacity onPress={() => clickHandler()}>
      {/* {({ pressed }) => ( */}
      <PressableRoundedView
        // pressed={pressed}
        size={size}
        isTransparent={isTransparent}
      >
        <StyledIonicon
          name={iconName}
          size={iconSize}
          colorIsTextColor={colorIsTextColor}
        />
      </PressableRoundedView>
      {/* )} */}
    </TouchableOpacity>
  );
};
