//React
import { useEffect, useState } from "react";
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
  const [provider, setProvider] = useState([]);

  const dispatchProvider = async () => {
    //ALEX, deine Funktion returned nix?
    setProvider(await getAllWatchProvider());

    if (storedProvider.provider.length === 0) {
      dispatch({
        type: "SET_PROVIDER",
        payload: [
          { label: "Netflix", id: 0, value: false },
          { label: "Amazon Prime", id: 1, value: false },
          { label: "Disney Plus", id: 2, value: false },
          { label: "Netflix", id: 3, value: false },
          { label: "Amazon Prime", id: 4, value: false },
          { label: "Disney Plus", id: 5, value: false },
          { label: "Netflix", id: 6, value: false },
          { label: "Amazon Prime", id: 7, value: false },
          { label: "Disney Plus", id: 8, value: false },
          { label: "Amazon Prime", id: 9, value: false },
          { label: "Disney Plus", id: 10, value: false },
          { label: "Netflix", id: 11, value: false },
          { label: "Amazon Prime", id: 12, value: false },
          { label: "Disney Pllllus", id: 13, value: false },
        ],
      });
    }
  };

  useEffect(() => {
    dispatchProvider();
  }, []);

  useEffect(() => {
    console.log(provider);
  }, [provider]);

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
