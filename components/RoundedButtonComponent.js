//React
import * as React from "react";

//Styled Components
import {
  RoundedButton,
  StyledIonicon,
} from "../redux-store/StyledComponents.js";

export default ({
  clickHandler,
  iconName,
  size,
  colorIsTextColor,
  usedInNavigation,
  iconSize,
}) => {
  return (
    <RoundedButton
      onPress={() => clickHandler()}
      size={size}
      usedInNavigation={usedInNavigation}
    >
      <StyledIonicon
        name={iconName}
        size={iconSize}
        colorIsTextColor={colorIsTextColor}
      />
    </RoundedButton>
  );
};
