//React
import React from "react";

//Styled Components
import {
  StyledSwitch,
  ParagraphSmall,
  ProviderItemContainer,
} from "../redux-store/StyledComponents.js";

export default ProviderItem = ({
  providerLabel,
  providerValue,
  providerID,
  toggleSwitch,
}) => {
  return (
    <ProviderItemContainer>
      <ParagraphSmall>{providerLabel}</ParagraphSmall>

      <StyledSwitch
        passValue={providerValue}
        onValueChange={() => toggleSwitch(providerID, providerValue)}
        value={providerValue}
      />
    </ProviderItemContainer>
  );
};
