//React
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import BrowseScreen from "../screens/BrowseScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";

const Stack = createNativeStackNavigator();

export default function BrowseStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        //hide the very thin line under the header
        headerShadowVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="BrowseScreen"
        component={BrowseScreen}
        options={{
          title: "BrowseScreen",
        }}
      />
      <Stack.Screen
        name="MovieDetailsListScreen"
        component={MovieDetailListScreen}
        options={{
          title: "MovieDetailsListScreen",
        }}
      />
    </Stack.Navigator>
  );
}
