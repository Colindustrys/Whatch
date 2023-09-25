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
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";

//Redux
import { lightTheme } from "../Whatch/redux-store/Theme";

//Navigator
import MainStackNavigator from "./navigations/MainStackNavigator";

export default function Index() {
  //Get States from Async Storage
  const storedAppearance = useSelector((state) => state.appearance);
  const dispatch = useDispatch();

  const isLightMode =
    storedAppearance.theme.BACKGROUND_COLOR == lightTheme.BACKGROUND_COLOR;
  const PlatformIsAndroid = Platform.OS === "android";

  //Get 20 mostUsed WatchProvider on Page load
  useEffect(() => {
    dispatchProvider();
  }, []);

  //Store WatchProvider in Redux State
  const dispatchProvider = async () => {
    dispatch({
      type: "SET_PROVIDER",
      payload: await getAllWatchProvider(),
    });
  };

  //load font
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
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
