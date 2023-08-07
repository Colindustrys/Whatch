import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeBottomTabNavigator from './HomeBottomTabNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import WatchlistScreen from '../screens/WatchlistScreen';
import ProviderSettingsScreen from '../screens/ProviderSettingsScreen';
import LanguageSettingsScreen from '../screens/LanguageSettingsScreen';
import ThemeSettingsScreen from '../screens/ThemeSettingsScreen';
import SeenlistScreen from '../screens/SeenlistScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      >
        <Stack.Screen name="HomeBottomTabNavigator" component={HomeBottomTabNavigator} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="WatchlistScreen" component={WatchlistScreen} />
        <Stack.Screen name="ProviderSettingsScreen" component={ProviderSettingsScreen} />
        <Stack.Screen name="LanguageSettingsScreen" component={LanguageSettingsScreen} />
        <Stack.Screen name="ThemeSettingsScreen" component={ThemeSettingsScreen} />
        <Stack.Screen name="SeenlistScreen" component={SeenlistScreen} />
        <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}