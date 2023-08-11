import { StyleSheet } from "react-native";
import Colors from "./Colors.js";

module.exports = StyleSheet.create({
  container_light: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 24,
    paddingTop: 40,
    backgroundColor: Colors.white,
  },
  container_dark: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 24,
    paddingTop: 40,
    backgroundColor: Colors.black,
  },
  AndroidSafeArea_light: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  AndroidSafeArea_dark: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  topNavigationContainer_dark: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: Colors.black,
  },
  topNavigationContainer_light: {
    flexDirection: "row",
    justifyContent: "space-between",
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
