//React
import React, { Fragment } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import BrowseScreen from "../screens/BrowseScreen";
import { StyledStackNavigator } from "../redux-store/StyledComponents";

import RoundedButtonComponent from "../components/RoundedButtonComponent";

const Stack = createNativeStackNavigator();

export default BrowseStackNavigator = ({ navigation }) => {
  return (
    <StyledStackNavigator>
      <Stack.Group
        screenOptions={{
          headerRight: () => (
            <Fragment>
              <RoundedButtonComponent
                clickHandler={() => navigation.navigate("WatchlistScreen")}
                iconName={"heart"}
                size={32}
                iconSize={24}
                isTransparent={true}
                colorIsTextColor={true}
              />
              <RoundedButtonComponent
                clickHandler={() => navigation.navigate("SettingsScreen")}
                iconName={"cog"}
                size={32}
                iconSize={24}
                isTransparent={true}
                colorIsTextColor={true}
              />
            </Fragment>
          ),
        }}
      >
        <Stack.Screen
          name="BrowseScreen"
          component={BrowseScreen}
          options={{
            title: "Browse",
          }}
        />
        <Stack.Screen
          name="MovieDetailsListScreen"
          component={MovieDetailListScreen}
          options={{
            title: "Movie",
          }}
        />
      </Stack.Group>
    </StyledStackNavigator>
  );
};
