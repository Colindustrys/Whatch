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
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//Views
export const MainContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
`;

export const MovieDetailListContainer = styled.View`
  flex: 1;
`;

export const MovieDetailContainer = styled.View`
  width: ${(props) => props.windowWidth}px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
`;

export const TopNavigationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
`;

export const InnerNavigationTopContainer = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const ProviderItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 8px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  padding-top: ${(props) =>
    props.platformIsAndroid ? props.StatusBar.currentHeight : 0}px;
`;

// Text
export const HeadlineUppercase = styled.Text`
  text-align: center;
  padding-bottom: 16px;
  color: ${(props) => props.theme.TEXT_COLOR};
  font-size: ${(props) => props.theme.FONT_SIZE_MASSIVE};
  font-family: ${(props) => props.theme.FONT_FAMILY_BOLD};
  text-transform: uppercase;
`;

export const Headline = styled.Text`
  text-align: center;
  padding-bottom: 16px;
  color: ${(props) => props.theme.TEXT_COLOR};
  font-size: ${(props) => props.theme.FONT_SIZE_EXTRA_LARGE};
  font-family: ${(props) => props.theme.FONT_FAMILY_BOLD};
  margin-bottom: 32px;
`;

export const Paragraph = styled.Text`
  text-align: left;
  padding-bottom: 16px;
  color: ${(props) => props.theme.TEXT_COLOR};
  font-size: ${(props) => props.theme.FONT_SIZE_LARGE};
  font-family: ${(props) => props.theme.FONT_FAMILY};
`;

export const ParagraphSmall = styled.Text`
  text-align: left;
  padding-bottom: 16px;
  color: ${(props) => props.theme.TEXT_COLOR};
  font-size: ${(props) => props.theme.FONT_SIZE_SMALL};
  font-family: ${(props) => props.theme.FONT_FAMILY};
  line-height: 18px;
`;

// React Components
export const RoundedPressable = styled.Pressable`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size}px;
  background-color: ${(props) =>
    props.isTransparent ? props.theme.SPECIAL : props.theme.TEXT_COLOR};
  justify-content: center;
  align-items: center;
`;

export const StyledActivityIndicator = styled.ActivityIndicator`
  size: large;
  color: ${(props) => props.theme.TEXT_COLOR};
`;

export const BackdropImage = styled.Image`
  width: 100%;
  height: 230px;
  align-self: center;
`;

export const PosterImage = styled.Image`
  width: 72px;
  aspect-ratio: 2 / 3;
  resize-mode: contain;
`;

//Third Party Components
export const StyledIonicon = styled(Ionicons)`
  color: ${(props) =>
    props.colorIsTextColor
      ? props.theme.TEXT_COLOR
      : props.theme.BACKGROUND_COLOR};
`;

export const StyledSwitch = styled(Switch).attrs((props) => ({
  trackColor: { true: props.theme.TEXT_COLOR, false: props.theme.TEXT_COLOR },
  thumbColor: props.passValue
    ? props.theme.ACCENT_COLOR
    : props.theme.COMPLEMENT,
  ios_backgroundColor: props.theme.TEXT_COLOR,
}))``;

export const StyledStatusBar = styled(StatusBar).attrs((props) => ({
  backgroundColor: props.theme.BACKGROUND_COLOR,
  barStyle: props.barStyleIsDarkContent ? "dark-content" : "light-content",
}))``;

export const StyledRadioButtonInput = styled(RadioButtonInput).attrs(
  (props) => ({
    borderWidth: 2,
    buttonInnerColor: props.theme.ACCENT_COLOR,
    buttonOuterColor: props.theme.ACCENT_COLOR,
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
      fontFamily: props.theme.FONT_FAMILY,
      color: props.theme.TEXT_COLOR,
    },
  })
)``;

//Navigator
export const StyledTabNavigator = styled(Tab.Navigator).attrs((props) => ({
  activeColor: props.theme.ACCENT_COLOR,
  inactiveColor: props.theme.TEXT_COLOR,
  screenOptions: {
    tabBarActiveTintColor: props.theme.ACCENT_COLOR,
    tabBarInactiveTintColor: props.theme.TEXT_COLOR,
    tabBarStyle: {
      backgroundColor: props.theme.BACKGROUND_COLOR,
      borderTopWidth: 0,
      elevation: 0,
    },
    headerShown: false,
  },
}))``;

export const StyledStackNavigator = styled(Stack.Navigator).attrs((props) => ({
  screenOptions: {
    navigationBarColor: props.theme.BACKGROUND_COLOR,
    headerShadowVisible: false,
    headerTintColor: props.theme.TEXT_COLOR,
    headerStyle: {
      backgroundColor: props.theme.BACKGROUND_COLOR,
    },
    headerTitleStyle: {
      color: props.theme.TEXT_COLOR,
      fontSize: 24,
      fontFamily: props.theme.FONT_FAMILY_BOLD,
    },
    headerTitleAlign: "center",
    headerShown: true,
  },
}))``;
