import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RandomStackNavigator from './RandomStackNavigator';
import BrowseStackNavigator from './BrowseStackNavigator';
import SearchStackNavigator from './SearchStackNavigator';
import { View, Button } from 'react-native';
import { Fragment } from 'react';
import { Ionicons } from "@expo/vector-icons";

import { useSelector} from 'react-redux'; 

import Colors from '../constants/Colors'

const Tab = createBottomTabNavigator();

export default HomeBottomTabNavigator = ({ navigation }) =>  {

  const theme = useSelector(state => state.theme);

  return (
    <Fragment>
      <Button
        onPress={() => navigation.navigate("SettingsScreen")}
        title="To Settings"
        color="#841584"
      />
      <Button
        onPress={() => navigation.navigate("WatchlistScreen")}
        title="To Whatchlist"
        color="#841584"
      />
      <Tab.Navigator
        activeColor={Colors.accent}
        inactiveColor={theme.mode == 'light' ? Colors.black : Colors.white}
        screenOptions={{
          //tabBarLabelStyle: { fontSize: 12 },
          //tabBarItemStyle: { width: 100 },
          tabBarActiveTintColor: Colors.accent,
          tabBarInactiveTintColor: theme.mode == 'light' ? Colors.black : Colors.white,
          tabBarStyle: { backgroundColor: theme.mode == 'light' ? Colors.white : Colors.black , borderTopWidth: 0, elevation: 0},
          headerShown: false,

        }}
        >
        <Tab.Screen 
          name="random" 
          component={RandomStackNavigator}
          options={{
              tabBarLabel: 'random',
              tabBarIcon: ({ color }) => (
                <Ionicons name="shuffle-outline" size={24} color={ color } />
              ),
            }}
            />
        <Tab.Screen 
          name="browse"
          component={BrowseStackNavigator} 
          options={{
            tabBarLabel: 'browse',
            tabBarIcon: ({ color }) => (
              <Ionicons name="albums-outline" size={24} color={ color } />
            ),
          }}
          />
        <Tab.Screen
          name="search"
          component={SearchStackNavigator} 
          options={{
            tabBarLabel: 'search',
            tabBarIcon: ({ color }) => (
              <Ionicons name="search-outline" size={24} color={ color } />
            ),
          }}/>
      </Tab.Navigator>
    </Fragment>
  )
}