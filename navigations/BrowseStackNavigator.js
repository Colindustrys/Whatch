import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

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
          name="MovieDetails" 
          component={MovieDetails} 
          options={{
            title: "MovieDetails",
          }}
        />
  
      </Stack.Navigator>
    )
  }