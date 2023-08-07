import React from 'react'
import BrowseScreen from '../screens/BrowseScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function BrowseStackNavigator() {
    return (
      <Stack.Navigator
        screenOptions={{
          //hide the very thin line under the header 
          headerShadowVisible: false,
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
          name="MovieDetailsScreen" 
          component={MovieDetailsScreen} 
          options={{
            title: "MovieDetailsScreen",
          }}
        />
  
      </Stack.Navigator>
    )
  }