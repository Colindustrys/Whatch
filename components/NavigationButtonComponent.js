//React
import * as React from "react";

//Styled Components
import {
  TopNavigationButton,
  TopNavigationIcon,
} from "../redux-store/StyledComponents.js";

export default ({ clickHandler, icon }) => {
  return (
    <TopNavigationButton onPress={clickHandler}>
      <TopNavigationIcon name={icon} size={24} />
    </TopNavigationButton>
  );
};
