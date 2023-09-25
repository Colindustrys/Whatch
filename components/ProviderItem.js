//React
import React from "react";

//Styled Components
import {
  StyledSwitch,
  Paragraph,
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
      <Paragraph small>{providerLabel}</Paragraph>

      <StyledSwitch
        passValue={providerValue}
        onValueChange={() => toggleSwitch(providerID, providerValue)}
        value={providerValue}
      />
    </ProviderItemContainer>
  );
};
