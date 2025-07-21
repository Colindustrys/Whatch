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
    <ProviderItemContainer
      accessible={true}
      accessibilityLabel={`Toggle provider ${providerLabel}`}
      accessibilityRole="switch"
      accessibilityState={{ checked: localValue }}
      accessibilityActions={[{ name: "activate", label: "Toggle" }]}
      onAccessibilityAction={() => {
        handleToggle();
      }}
      onAccessibilityTap={() => {
        handleToggle();
      }}
    >
      <ParagraphListItem accessible={false} small>
        {providerLabel}
      </ParagraphListItem>
      <StyledSwitch
        accessible={false}
        importantForAccessibility="no"
        passValue={localValue}
        value={localValue}
        onValueChange={handleToggle}
      />
    </ProviderItemContainer>
  );
};

export default ProviderItem;
