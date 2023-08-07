import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeBottomTabNavigator" component={HomeBottomTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="WatchlistScreen" component={WatchlistScreen} />
      <Stack.Screen name="ProviderSettingsScreen" component={ProviderSettingsScreen} />
      <Stack.Screen name="LanguageSettingsScreen" component={LanguageSettingsScreen} />
      <Stack.Screen name="ThemeSettingsScreen" component={ThemeSettingsScreen} />
      <Stack.Screen name="SeenlistScreen" component={SeenlistScreen} />
      <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
    </Stack.Navigator>
  )
}