import React, { useEffect, useState } from "react";
import { Platform, Pressable, AccessibilityInfo } from "react-native";
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
  const [localSwitchState, setLocalSwitchState] = useState(providerValue);
  const [accessibilitySwitchState, setAccessibilitySwitchState] =
    useState(providerValue);
  const isIOS = Platform.OS === "ios";

  const handleToggle = () => {
    if (isIOS) {
      AccessibilityInfo.announceForAccessibility("Stop");
    }
    const newSwitchValue = !localSwitchState;
    setLocalSwitchState(newSwitchValue); // update usestate for Immediate feedback
    toggleSwitch(providerID, newSwitchValue); // Update Redux
    setAccessibilitySwitchState(newSwitchValue);

    if (isIOS) {
      setTimeout(() => {
        AccessibilityInfo.announceForAccessibility(
          newSwitchValue ? "on" : "off"
        );
      }, 500);
    } else {
    }
  };

  return (
    <ProviderItemContainer
      accessible={true}
      accessibilityLabel={`Toggle provider ${providerLabel}`}
      accessibilityRole="switch"
      accessibilityState={{ checked: accessibilitySwitchState }}
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
        passValue={localSwitchState}
        value={localSwitchState}
        onValueChange={handleToggle}
      />
    </ProviderItemContainer>
  );
};

export default ProviderItem;
