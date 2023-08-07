import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RandomStackNavigator from './RandomStackNavigator';
import BrowseStackNavigator from './BrowseStackNavigator';
import SearchStackNavigator from './SearchStackNavigator';
import { View, Button } from 'react-native';
import { Fragment } from 'react';

const Tab = createBottomTabNavigator();

export default HomeBottomTabNavigator = ({ navigation }) =>  {
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
      <Tab.Navigator>
        <Tab.Screen name="RandomStackNavigator" component={RandomStackNavigator} />
        <Tab.Screen name="BrowseStackNavigator" component={BrowseStackNavigator} />
        <Tab.Screen name="SearchStackNavigator" component={SearchStackNavigator} />
      </Tab.Navigator>
    </Fragment>
  )
}