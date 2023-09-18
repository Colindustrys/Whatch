//React
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import RandomScreen from "../screens/RandomScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import MovieDetailListScreen from "../screens/MovieDetailListScreen";

export default function RandomStackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        //hide the very thin line under the header
        headerShadowVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="RandomScreen"
        component={RandomScreen}
        options={{
          title: "RandomScreen",
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
