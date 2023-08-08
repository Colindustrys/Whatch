import React from 'react'
import SearchScreen from '../screens/SearchScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function SearchStackNavigator() {
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
    )
  }