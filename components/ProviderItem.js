//React
import React from "react";

//Styled Components
import {
    StyledSwitch,
    ProviderItemContainer, ParagraphListItem
} from "../redux-store/StyledComponents.js";
import {Platform} from "react-native";

export default ProviderItem = ({
  providerLabel,
  providerValue,
  providerID,
  toggleSwitch,
}) => {

    const PlatformIsAndroid = Platform.OS === "android";

    return (
    <ProviderItemContainer platformIsAndroid={PlatformIsAndroid}>
      <ParagraphListItem small>{providerLabel}</ParagraphListItem>

      <StyledSwitch
        passValue={providerValue}
        onValueChange={() => toggleSwitch(providerID, providerValue)}
        value={providerValue}
      />
    </ProviderItemContainer>
  );
};
