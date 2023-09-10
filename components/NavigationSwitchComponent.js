//React
import * as React from "react";

//Styled Components
import { StyledSwitch } from "../redux-store/StyledComponents.js";

export default ({ toggleSwitch, isEnabled }) => {
  return (
    <StyledSwitch
      passValue={isEnabled}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
