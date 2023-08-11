import * as React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSelector } from "react-redux";

import Colors from "../constants/Colors";
import Theme from "../constants/Theme";

export default ({ clickHandler, icon }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <View>
      <Pressable onPress={clickHandler} style={Theme.topNavigationButton}>
        <Ionicons
          name={icon}
          size={24}
          color={theme.mode == "light" ? Colors.black : Colors.white}
        />
      </Pressable>
    </View>
  );
};
