import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="RandomStackNavigatorome" component={RandomStackNavigator} />
      <Tab.Screen name="BrowseStackNavigator" component={BrowseStackNavigator} />
      <Tab.Screen name="SearchStackNavigator" component={SearchStackNavigator} />
    </Tab.Navigator>
  );
}