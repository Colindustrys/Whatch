import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function RandomStackNavigator() {
    return (
      <Stack.Navigator
        screenOptions={{
          //hide the very thin line under the header 
          headerShadowVisible: false,
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
          name="MovieDetails" 
          component={MovieDetails} 
          options={{
            title: "MovieDetails",
          }}
        />
  
      </Stack.Navigator>
    )
  }