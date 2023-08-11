import { StyleSheet } from "react-native";
import Colors from "./Colors.js";

/*
fontFamilyLight: "Comfortaa_300Light",
fontFamilyRegular: "Comfortaa_400Regular",
fontFamilyMedium: "Comfortaa_500Medium",
fontFamilySemiBold: "Comfortaa_600SemiBold",
fontFamilyBold: "Comfortaa_700Bold",
*/

module.exports = StyleSheet.create({
  headline_big_light: {
    fontSize: 32,
    textAlign: "center",
    textTransform: "uppercase",
    color: Colors.black,
  },
  headline_small_light: {
    fontSize: 24,
    textAlign: "center",
    color: Colors.black,
    marginBottom: 32,
    fontFamily: "Comfortaa_700Bold",
  },
  paragraph_light: {
    fontSize: 20,
    textAlign: "left",
    color: Colors.black,
    paddingBottom: 16,
    fontFamily: "Comfortaa_300Light",
  },
  headline_big_dark: {
    fontSize: 32,
    textAlign: "center",
    textTransform: "uppercase",
    color: Colors.white,
  },
  headline_small_dark: {
    fontSize: 24,
    textAlign: "center",
    color: Colors.white,
    marginBottom: 32,
    fontFamily: "Comfortaa_700Bold",
  },
  paragraph_dark: {
    fontSize: 20,
    textAlign: "left",
    color: Colors.white,
    paddingBottom: 16,
    fontFamily: "Comfortaa_300Light",
  },
});
