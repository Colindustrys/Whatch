import React from 'react'
import RandomScreen from '../screens/RandomScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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
          name="MovieDetailsScreen" 
          component={MovieDetailsScreen} 
          options={{
            title: "MovieDetailsScreen",
          }}
        />
  
      </Stack.Navigator>
    )
  }