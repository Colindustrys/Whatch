import * as React from "react";
import styled from "styled-components";

//Imports
import {
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import {
  View,
  Text,
  Switch,
  Pressable,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//Views
export const MainContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: ${(props) =>
    props.browse ? 0 : props.theme.isTablet ? 56 : 24}px;
  padding-right: ${(props) =>
      props.browse ? 0 : props.theme.isTablet ? 56 : 24}px;
  background-color: ${(props) => props.theme.appearance.BACKGROUND_COLOR};
`;

export const MovieDetailListContainer = styled.View`
  flex: 1;
`;

export const HalfWidthView = styled.View`
  width: ${(props) => (props.theme.isTablet ? "50%" : "100%")};
  align-self: center;
`;

export const PressableView = styled.View`
  opacity: ${(props) => (props.pressed ? 0.3 : 1)};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  justify-content: space-between;
  align-items: center;
`;

export const PressableRoundedView = styled.View`
  opacity: ${(props) => (props.pressed ? 0.7 : 1)};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size}px;
  background-color: ${(props) =>
    props.isTransparent
      ? props.theme.appearance.SPECIAL
      : props.theme.appearance.TEXT_COLOR};
  justify-content: center;
  align-items: center;
`;

export const MovieDetailContainer = styled.View`
  width: ${(props) => props.windowWidth}px;
  background-color: ${(props) => props.theme.appearance.BACKGROUND_COLOR};
`;

export const InnerMovieDetailContainer = styled.View`
  flex: 1;
  height: 100%;
  justify-content: flex-start;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: ${(props) => (props.landscapeLayout ? 56 : 24)}px;
  padding-left: ${(props) => (props.landscapeLayout ? 56 : 24)}px;
  position: ${(props) => (props.landscapeLayout ? "absolute" : "relative")};
  background-color: ${(props) =>
    props.landscapeLayout
      ? "transparent"
      : props.theme.appearance.BACKGROUND_COLOR};
`;

export const TopNavigationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${(props) => props.theme.appearance.BACKGROUND_COLOR};
`;

export const InnerNavigationTopContainer = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const ProviderItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
`;

export const RowContainer = styled.View`
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: ${(props) => props.justifyContent};
  padding-bottom: ${(props) => (props.paddingBottom ? "32px" : "0px")};
  gap: ${(props) => (props.gap ? "16px" : "0")};
`;

export const CenterContainer = styled.View`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
`;

export const EmptyContainer = styled.View`
  padding-left: ${(props) => (props.theme.isTablet ? 56 : 24)}px;
`;

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.appearance.BACKGROUND_COLOR};
  padding-top: ${(props) =>
    props.platformIsAndroid ? props.StatusBar.currentHeight : 0}px;
`;

// Text
export const Headline = styled.Text`
  text-align: center;
  padding-bottom: ${(props) => (props.uppercase ? "32px" : "16px")};
  color: ${(props) => props.theme.appearance.TEXT_COLOR};
  font-size: ${(props) =>
    props.length > 40 || props.small || props.theme.isTablet
      ? props.theme.appearance.FONT_SIZE_EXTRA_LARGE
      : props.theme.appearance.FONT_SIZE_MASSIVE};
  font-family: ${(props) =>
    props.uppercase
      ? props.theme.appearance.FONT_FAMILY_EXTRA_BOLD
      : props.theme.appearance.FONT_FAMILY_REGULAR};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
`;

export const Paragraph = styled.Text`
  text-align: ${(props) => (props.textCenter ? "center" : "left")};
  padding-bottom: 16px;
  padding-left: ${(props) =>
      props.theme.isTablet && props.browse? 56 : props.browse ? 24 : 0}px;
  color: ${(props) => props.theme.appearance.TEXT_COLOR};
  font-size: ${(props) =>
    props.small
      ? props.theme.appearance.FONT_SIZE_MEDIUM
      : props.theme.appearance.FONT_SIZE_LARGE};
  font-family: ${(props) => props.theme.appearance.FONT_FAMILY_REGULAR};
  line-height: 18px;
  opacity: ${(props) => (props.textIsTransparent ? "0.7" : "1")};
`;

export const ParagraphListItem = styled.Text`
  text-align: ${(props) => (props.textCenter ? "center" : "left")};
  padding-left: ${(props) =>
    props.theme.isTablet && props.browse? 56 : props.browse ? 24 : 0}px;
  color: ${(props) => props.theme.appearance.TEXT_COLOR};
  font-size: ${(props) =>
    props.small
        ? props.theme.appearance.FONT_SIZE_MEDIUM
        : props.theme.appearance.FONT_SIZE_LARGE};
  font-family: ${(props) => props.theme.appearance.FONT_FAMILY_REGULAR};
  line-height: 18px;
  opacity: ${(props) => (props.textIsTransparent ? "0.7" : "1")};
`;

// React Components
export const StyledActivityIndicator = styled.ActivityIndicator`
  size: large;
  color: ${(props) => props.theme.appearance.TEXT_COLOR};
`;

export const BackdropGradient = styled(LinearGradient).attrs((props) => ({
  width: "100%",
  alignSelf: "center",
  colors: ["#00000000", "#00000000", props.theme.appearance.BACKGROUND_COLOR],
  locations: [0, 0.3, 1],
}))``;

export const BackdropImage = styled.ImageBackground`
  width: 100%;
  aspect-ratio: 16 / 9;
  align-self: center;
`;

export const PosterImage = styled.Image`
  width: 92px;
  aspect-ratio: 2 / 3;
  resize-mode: contain;
  margin-bottom: 16px;
  margin-right: ${(props) => props.withoutMargin? 0 : 16}px;

`;

export const LogoImage = styled.Image`
  width: 45px;
  aspect-ratio: 1 / 1;
  resize-mode: contain;
  border-radius: 5px;
`;

//Third Party Components
export const StyledIonicon = styled(Entypo)`
  color: ${(props) =>
    props.colorIsTextColor
      ? props.theme.appearance.TEXT_COLOR
      : props.theme.appearance.BACKGROUND_COLOR};
`;

export const StyledSwitch = styled(Switch).attrs((props) => ({
  trackColor: {
    true: props.theme.appearance.TEXT_COLOR,
    false: props.theme.appearance.TEXT_COLOR,
  },
  thumbColor: props.passValue
    ? props.theme.appearance.ACCENT_COLOR
    : props.theme.appearance.COMPLEMENT,
  ios_backgroundColor: props.theme.appearance.TEXT_COLOR,
}))``;

export const StyledStatusBar = styled(StatusBar).attrs((props) => ({
  backgroundColor: props.theme.appearance.BACKGROUND_COLOR,
  barStyle: props.barStyleIsDarkContent ? "dark-content" : "light-content",
}))``;

export const StyledRadioButtonInput = styled(RadioButtonInput).attrs(
  (props) => ({
    borderWidth: 2,
    buttonInnerColor: props.theme.appearance.ACCENT_COLOR,
    buttonOuterColor: props.theme.appearance.ACCENT_COLOR,
    buttonSize: 10,
    buttonOuterSize: 20,
  })
)``;

export const StyledRadioButtonLabel = styled(RadioButtonLabel).attrs(
  (props) => ({
    labelStyle: {
      fontSize: 14,
      textAlign: "left",
      paddingBottom: 16,
      fontFamily: props.theme.appearance.FONT_FAMILY,
      color: props.theme.appearance.TEXT_COLOR,
    },
  })
)``;

//Navigator
export const StyledTabNavigator = styled(Tab.Navigator).attrs((props) => ({
  activeColor: props.theme.appearance.ACCENT_COLOR,
  inactiveColor: props.theme.appearance.TEXT_COLOR,
  screenOptions: {
    tabBarActiveTintColor: props.theme.appearance.ACCENT_COLOR,
    tabBarInactiveTintColor: props.theme.appearance.TEXT_COLOR,
    tabBarStyle: {
      backgroundColor: props.theme.appearance.BACKGROUND_COLOR,
      borderTopWidth: 0,
      elevation: 0,
    },
    headerShown: false,
  },
}))``;

export const StyledStackNavigator = styled(Stack.Navigator).attrs((props) => ({
  screenOptions: {
    navigationBarColor: props.theme.appearance.BACKGROUND_COLOR,
    headerShadowVisible: false,
    headerTintColor: props.theme.appearance.TEXT_COLOR,
    headerStyle: {
      backgroundColor: props.theme.appearance.BACKGROUND_COLOR,
    },
    headerTitleStyle: {
      color: props.theme.appearance.TEXT_COLOR,
      fontSize: 24,
      fontFamily: props.theme.appearance.FONT_FAMILY_BOLD,
    },
    headerTitleAlign: "center",
    headerShown: true,
  },
}))``;
