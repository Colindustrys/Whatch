//React
import { useEffect } from "react";
import { StatusBar, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getAllWatchProvider } from "./api/endpoints.js";

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
  const dispatch = useDispatch();
  const storedProvider = useSelector((state) => state.provider);

  const dispatchProvider = async () => {
    console.log(storedProvider.provider);
    storedProvider.provider.length == 0
    if (true) {
      console.log("dispatchProvider");
      dispatch({
        type: "SET_PROVIDER",
        payload: await getAllWatchProvider(),
      });
    }
  };

  useEffect(() => {
    dispatchProvider();
  }, []);

  const storedAppearance = useSelector((state) => state.appearance);
  const isLightMode =
    storedAppearance.theme.BACKGROUND_COLOR == lightTheme.BACKGROUND_COLOR;
  const PlatformIsAndroid = Platform.OS === "android";

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
        platformIsAndroid={PlatformIsAndroid}
        StatusBar={StatusBar}
      >
        <StyledStatusBar barStyleIsDarkContent={isLightMode} />
        <MainStackNavigator isLightMode={isLightMode} />
      </StyledSafeAreaView>
    </ThemeProvider>
  );
}
