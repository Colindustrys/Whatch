import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RandomStackNavigator from "./RandomStackNavigator";
import BrowseStackNavigator from "./BrowseStackNavigator";
import SearchStackNavigator from "./SearchStackNavigator";
import { View, Button, StyleSheet } from "react-native";
import { Fragment } from "react";
import { Ionicons } from "@expo/vector-icons";
import NavigationButtonComponent from "../components/NavigationButtonComponent";

import { useSelector } from "react-redux";

import Colors from "../constants/Colors";
import Theme from "../constants/Theme";

const Tab = createBottomTabNavigator();

export default HomeBottomTabNavigator = ({ navigation }) => {
  const theme = useSelector((state) => state.theme);

  const clickHandler = (Screen) => {
    navigation.navigate(Screen);
    //navigation.navigate("LineDetails", { stationObject: stationObject });
  };

  return (
    <Fragment>
      <View
        style={
          theme.mode == "light"
            ? Theme.topNavigationContainer_light
            : Theme.topNavigationContainer_dark
        }
      >
        <NavigationButtonComponent
          clickHandler={() => navigation.navigate("SettingsScreen")}
          icon={"heart"}
        />
        <View style={Theme.innerNavigationTopContainer}>
          <NavigationButtonComponent
            clickHandler={() => navigation.navigate("WatchlistScreen")}
            icon={"heart"}
          />
          <NavigationButtonComponent
            clickHandler={() => navigation.navigate("SettingsScreen")}
            icon={"settings"}
          />
        </View>
      </View>

      <Tab.Navigator
        activeColor={Colors.accent}
        inactiveColor={theme.mode == "light" ? Colors.black : Colors.white}
        screenOptions={{
          //tabBarLabelStyle: { fontSize: 12 },
          //tabBarItemStyle: { width: 100 },
          tabBarActiveTintColor: Colors.accent,
          tabBarInactiveTintColor:
            theme.mode == "light" ? Colors.black : Colors.white,
          tabBarStyle: {
            backgroundColor:
              theme.mode == "light" ? Colors.white : Colors.black,
            borderTopWidth: 0,
            elevation: 0,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="random"
          component={RandomStackNavigator}
          options={{
            tabBarLabel: "random",
            tabBarIcon: ({ color }) => (
              <Ionicons name="shuffle-outline" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="browse"
          component={BrowseStackNavigator}
          options={{
            tabBarLabel: "browse",
            tabBarIcon: ({ color }) => (
              <Ionicons name="albums-outline" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={SearchStackNavigator}
          options={{
            tabBarLabel: "search",
            tabBarIcon: ({ color }) => (
              <Ionicons name="search-outline" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </Fragment>
  );
};
