//React
import React, { Fragment } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

//Navigator
import RandomStackNavigator from "./RandomStackNavigator";
import BrowseStackNavigator from "./BrowseStackNavigator";
import SearchStackNavigator from "./SearchStackNavigator";

//Components
import RoundedButtonComponent from "../components/RoundedButtonComponent";
import NavigationSwitchComponent from "../components/NavigationSwitchComponent";

import {
  TopNavigationContainer,
  InnerNavigationTopContainer,
  StyledTabNavigator,
} from "../redux-store/StyledComponents.js";

export default HomeBottomTabNavigator = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  //Get States from Async Storage
  const storedFilterMethod = useSelector((state) => state.filterMethod);

  const dispatch = useDispatch();

  const toggleSwitch = () => {
    dispatch({
      type: "TOGGLE_FREE_TO_CHARGE",
    });
  };

  return (
    <Fragment>
      <TopNavigationContainer>
        <NavigationSwitchComponent
          toggleSwitch={toggleSwitch}
          isEnabled={storedFilterMethod.freeToCharge}
        />
        <InnerNavigationTopContainer>
          <RoundedButtonComponent
            clickHandler={() => navigation.navigate("WatchlistScreen")}
            iconName={"heart"}
            size={32}
            iconSize={24}
            usedInNavigation={true}
            colorIsTextColor={true}
          />
          <RoundedButtonComponent
            clickHandler={() => navigation.navigate("SettingsScreen")}
            iconName={"settings"}
            size={32}
            iconSize={24}
            usedInNavigation={true}
            colorIsTextColor={true}
          />
        </InnerNavigationTopContainer>
      </TopNavigationContainer>

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
      </StyledTabNavigator>
    </Fragment>
  );
};
