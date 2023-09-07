import React, { useState, useEffect } from "react";
import { View, Text, Switch, FlatList } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import Typography from "../constants/Typography.js";
import Colors from "../constants/Colors";
import Theme from "../constants/Theme";

export default ProviderItem = ({
  providerLabel,
  providerValue,
  providerId,
  toggleSwitch,
}) => {
  const storedTheme = useSelector((state) => state.theme);
  return (
    <View
      /* own stylesheet */
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Switch
        trackColor={{
          false: storedTheme.mode == "light" ? Colors.black : Colors.white,
          true: storedTheme.mode == "light" ? Colors.black : Colors.white,
        }}
        thumbColor={providerValue ? Colors.accent : Colors.complement}
        ios_backgroundColor={
          storedTheme.mode == "light" ? Colors.black : Colors.white
        }
        onValueChange={() => toggleSwitch(providerId)}
        value={providerValue}
      />

      <Text
        style={
          storedTheme.mode == "light"
            ? Typography.paragraph_small_light
            : Typography.paragraph_small_dark
        }
      >
        {providerLabel}
      </Text>
    </View>
  );
};
