//React
import { useEffect, useState, useRef } from "react";
import { StatusBar, Platform, Appearance } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getAllWatchProvider } from "./api/endpoints.js";
import Device from "react-native-device-detection";
import * as ScreenOrientation from "expo-screen-orientation";

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
import { darkTheme, lightTheme } from "../Whatch/redux-store/Theme";

//Navigator
import MainStackNavigator from "./navigations/MainStackNavigator";

export default function Index() {
  //Get States from Async Storage
  const storedAppearance = useSelector((state) => state.appearance);
  const dispatch = useDispatch();

  //Get useSelector for selected theme setting
  const storedthemeSettingSelect = useSelector(
    (state) => state.themeSettingSelect
  );
  //save theme setting in useref for the Appearance.addChangeListener callback
  //has to be in a useref otherwise the callbacl does not get the changes
  const themeSettingRef = useRef(storedthemeSettingSelect.id);

  //update themeSettingRef when state changes
  useEffect(() => {
    themeSettingRef.current = storedthemeSettingSelect.id;
  }, [storedthemeSettingSelect.id]);

  const isLightMode =
    storedAppearance.appearance.BACKGROUND_COLOR == lightTheme.BACKGROUND_COLOR;
  const PlatformIsAndroid = Platform.OS === "android";

  //Get 20 mostUsed WatchProvider on Page load
  //Detect active device only if its not already saved
  //set theme
  //register Appearance.addChangeListener
  useEffect(() => {
    dispatchProvider();
    if (storedAppearance.isTablet == null) {
      dispatchDevice();
    }
    if (!storedAppearance.isTablet) {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    }

    //set theme on startup
    reactToSysThemeChange();
    //register apperance listener to react to system theme changes
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      reactToSysThemeChange();
    });
    return () => {
      subscription.remove();
    };
  }, []);

  const reactToSysThemeChange = () => {
    let systemTheme;
    //if system theme setting is choosen
    if (themeSettingRef.current == 0) {
      //set apperance theme to system setting
      if (Appearance.getColorScheme() == "light") {
        systemTheme = lightTheme;
      } else {
        systemTheme = darkTheme;
      }
      //dispatch current system theme
      //dispatch theme
      dispatch({
        type: "SWITCH_THEME",
        baseTheme: systemTheme,
      });
    }
  };

  //TODO: clean up Stled Comps and use special styles not on all views. only on detailScreen --> props.theme.isTablet !!!

  //Store WatchProvider in Redux State
  const dispatchProvider = async () => {
    dispatch({
      type: "SET_PROVIDER",
      payload: await getAllWatchProvider(),
    });
  };

  //Store Device in Redux State as Boolean
  const dispatchDevice = () => {
    dispatch({
      type: "DETECT_DEVICE",
      payload: Device.isTablet,
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
    <ThemeProvider theme={storedAppearance}>
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
