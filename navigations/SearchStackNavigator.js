//React
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screen
import SearchScreen from "../screens/SearchScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";

export default function SearchStackNavigator() {
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
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: "SearchScreen",
        }}
      />
      <Stack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{
          title: "MovieDetailsScreen",
        }}
      />
    </Stack.Navigator>
  );
}
