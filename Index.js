//React
import { StatusBar, Platform } from "react-native";
import { useSelector } from "react-redux";

//Styled Components
import { ThemeProvider } from "styled-components";
import {
  StyledSafeAreaView,
  StyledStatusBar,
} from "../Whatch/redux-store/StyledComponents.js";

//Fonts
import {
  useFonts,
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";

//Redux
import { lightTheme } from "../Whatch/redux-store/Theme";

//Navigator
import MainStackNavigator from "./navigations/MainStackNavigator";

export default function Index() {
  const storedAppearance = useSelector((state) => state.appearance);

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
    <ThemeProvider theme={storedAppearance.theme}>
      <StyledSafeAreaView
        platformIsAndroid={Platform.OS === "android"}
        StatusBar={StatusBar}
      >
        <StyledStatusBar
          barStyleIsDarkContent={
            storedAppearance.theme.BACKGROUND_COLOR ==
            lightTheme.BACKGROUND_COLOR
          }
        />
        <MainStackNavigator />
      </StyledSafeAreaView>
    </ThemeProvider>
  );
}
