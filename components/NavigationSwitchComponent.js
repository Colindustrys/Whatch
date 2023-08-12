import * as React from "react";
import { View, Pressable, Switch, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSelector } from "react-redux";

import Colors from "../constants/Colors";
import Theme from "../constants/Theme";

export default ({ toggleSwitch, isEnabled }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <Switch
      trackColor={{
        false: theme.mode == "light" ? Colors.black : Colors.white,
        true: theme.mode == "light" ? Colors.black : Colors.white,
      }}
      thumbColor={isEnabled ? Colors.accent : Colors.complement}
      ios_backgroundColor={theme.mode == "light" ? Colors.black : Colors.white}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
