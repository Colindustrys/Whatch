import Colors from "./Colors.js";
import { StyleSheet, Platform, StatusBar } from "react-native";

module.exports = StyleSheet.create({
  container_light: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 24,
    backgroundColor: Colors.white,
  },
  container_dark: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 24,
    backgroundColor: Colors.black,
  },
  AndroidSafeArea_light: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  AndroidSafeArea_dark: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  topNavigationContainer_dark: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: Colors.black,
  },
  topNavigationContainer_light: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: Colors.white,
  },
  innerNavigationTopContainer: {
    flexDirection: "row",
    gap: 16,
  },
  topNavigationButton_dark: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: Colors.darkGrey,
    justifyContent: "center",
    alignItems: "center",
  },
  topNavigationButton_light: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: Colors.transparentWhite,
    justifyContent: "center",
    alignItems: "center",
  },
});
