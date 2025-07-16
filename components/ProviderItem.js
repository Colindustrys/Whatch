import React, { useEffect, useState } from "react";
import { Platform, Pressable } from "react-native";
import {
  StyledSwitch,
  ProviderItemContainer,
  ParagraphListItem,
} from "../redux-store/StyledComponents.js";

const ProviderItem = ({
  providerLabel,
  providerValue,
  providerID,
  toggleSwitch,
}) => {
  const [localValue, setLocalValue] = useState(providerValue);
  const isAndroid = Platform.OS === "android";

  const handleToggle = () => {
    const newValue = !localValue;
    setLocalValue(newValue); // Immediate feedback
    toggleSwitch(providerID, newValue); // Update Redux
  };

  return (
    <Pressable>
      <ProviderItemContainer>
        <ParagraphListItem small>{providerLabel}</ParagraphListItem>
        <StyledSwitch
          passValue={localValue}
          value={localValue}
          onValueChange={handleToggle}
        />
      </ProviderItemContainer>
    </Pressable>
  );
};

export default ProviderItem;
