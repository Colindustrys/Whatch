//React
import * as React from "react";
// import {  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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
  accessibilityLabel,
}) => {
  return (
    // Has to be onPressOut because of a bug in react native

    <TouchableOpacity
      onPress={() => clickHandler()}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
    >
      {/* {({ pressed }) => ( */}
      <PressableRoundedView
        // pressed={pressed}
        accessible={false}
        size={size}
        isTransparent={isTransparent}
      >
        <StyledIonicon
          accessible={false}
          name={iconName}
          size={iconSize}
          colorIsTextColor={colorIsTextColor}
        />
      </PressableRoundedView>
      {/* )} */}
    </TouchableOpacity>
  );
};
