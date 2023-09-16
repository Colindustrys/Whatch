//React
import * as React from "react";

//Styled Components
import {
  TopNavigationButton,
  StyledIonicon,
} from "../redux-store/StyledComponents.js";

export default ({ clickHandler, iconName }) => {
  return (
    <TopNavigationButton onPress={clickHandler}>
      <StyledIonicon name={iconName} size={24} />
    </TopNavigationButton>
  );
};
