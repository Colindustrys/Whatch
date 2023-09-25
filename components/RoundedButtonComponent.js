//React
import * as React from "react";

//Styled Components
import {
  RoundedPressable,
  StyledIonicon,
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
    <RoundedPressable
      onPress={() => clickHandler()}
      size={size}
      isTransparent={isTransparent}
    >
      <StyledIonicon
        name={iconName}
        size={iconSize}
        colorIsTextColor={colorIsTextColor}
      />
    </RoundedPressable>
  );
};
