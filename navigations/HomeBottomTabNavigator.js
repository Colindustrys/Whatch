//React
import React, { Fragment } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

//Navigator
import RandomStackNavigator from "./RandomStackNavigator";
import BrowseStackNavigator from "./BrowseStackNavigator";
import SearchStackNavigator from "./SearchStackNavigator";

//Components
import RoundedButtonComponent from "../components/RoundedButtonComponent";
import NavigationSwitchComponent from "../components/NavigationSwitchComponent";

import { StyledTabNavigator } from "../redux-store/StyledComponents.js";

export default HomeBottomTabNavigator = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Fragment>
      <StyledTabNavigator
      //screenOptions={{
      //tabBarLabelStyle: { fontSize: 12 },
      //tabBarItemStyle: { width: 100 },
      //}}
      >
        <Tab.Screen
          name="random"
          component={RandomStackNavigator}
          options={{
            tabBarLabel: "Random",
            tabBarIcon: ({ color }) => (
              <Entypo name="shuffle" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="browse"
          component={BrowseStackNavigator}
          options={{
            tabBarLabel: "Browse",
            tabBarIcon: ({ color }) => (
              <Entypo name="list" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={SearchStackNavigator}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => (
              <Entypo name="magnifying-glass" size={24} color={color} />
            ),
          }}
        />
      </StyledTabNavigator>
    </Fragment>
  );
};
