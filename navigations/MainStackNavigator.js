import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeBottomTabNavigator from "./HomeBottomTabNavigator";
import SettingsScreen from "../screens/SettingsScreen";
import WatchlistScreen from "../screens/WatchlistScreen";
import ProviderSettingsScreen from "../screens/ProviderSettingsScreen";
import LanguageSettingsScreen from "../screens/LanguageSettingsScreen";
import ThemeSettingsScreen from "../screens/ThemeSettingsScreen";
import SeenlistScreen from "../screens/SeenlistScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

import { useSelector } from "react-redux";

import Colors from "../constants/Colors";

export default function MainStackNavigator() {
  const theme = useSelector((state) => state.theme);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShadowVisible: false,
          headerTintColor: theme.mode == "light" ? Colors.black : Colors.white,
          headerStyle: {
            backgroundColor:
              theme.mode == "light" ? Colors.white : Colors.black,
            text: "red",
          },
          headerTitleStyle: {
            color: theme.mode == "light" ? Colors.black : Colors.white,
          },

          //headerTransparent: true,
        }}
      >
        <Stack.Screen
          name="HomeBottomTabNavigator"
          component={HomeBottomTabNavigator}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            title: "Settings",
          }}
        />
        <Stack.Screen
          name="WatchlistScreen"
          component={WatchlistScreen}
          options={{
            title: "Watchlist",
          }}
        />
        <Stack.Screen
          name="ProviderSettingsScreen"
          component={ProviderSettingsScreen}
          options={{
            title: "Settings",
          }}
          screenOptions={{
            //hide the very thin line under the header
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="LanguageSettingsScreen"
          component={LanguageSettingsScreen}
          options={{
            title: "Settings",
          }}
        />
        <Stack.Screen
          name="ThemeSettingsScreen"
          component={ThemeSettingsScreen}
          options={{
            title: "Settings",
          }}
        />
        <Stack.Screen
          name="SeenlistScreen"
          component={SeenlistScreen}
          options={{
            title: "Settings",
          }}
        />
        <Stack.Screen
          name="MovieDetailsScreen"
          component={MovieDetailsScreen}
          options={{
            title: "Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
