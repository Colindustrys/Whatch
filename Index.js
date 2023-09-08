import { SafeAreaView, StatusBar } from "react-native";
import MainStackNavigator from "./navigations/MainStackNavigator";
import {
  useFonts,
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";

import { useSelector } from "react-redux";

import Colors from "./constants/Colors";
import Theme from "./constants/Theme";

import styled, { ThemeProvider } from "styled-components";

export default function Index() {
  const theme = useSelector((state) => state.theme);
  const storedTheme = useSelector((state) => state.appearance);

  //load font
  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={storedTheme.theme}>
      <SafeAreaView
        style={
          theme.mode == "light"
            ? Theme.AndroidSafeArea_light
            : Theme.AndroidSafeArea_dark
        }
      >
        <StatusBar
          backgroundColor={theme.mode == "light" ? Colors.white : Colors.black}
          barStyle={theme.mode == "light" ? "dark-content" : "light-content"}
        />
        <MainStackNavigator />
      </SafeAreaView>
    </ThemeProvider>
  );
}
