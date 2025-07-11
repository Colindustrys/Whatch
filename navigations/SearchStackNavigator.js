//React
import { React, Fragment } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screen
import SearchScreen from "../screens/SearchScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";

import {
  StyledStackNavigator,
  TopNavigationContainer,
} from "../redux-store/StyledComponents";

import RoundedButtonComponent from "../components/RoundedButtonComponent";

export default SearchStackNavigator = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  return (
    <StyledStackNavigator>
      <Stack.Group
        screenOptions={{
          headerRight: () => (
            <Fragment>
              <RoundedButtonComponent
                clickHandler={() => navigation.navigate("WatchlistScreen")}
                iconName={"heart"}
                size={48}
                iconSize={28}
                isTransparent={true}
                colorIsTextColor={true}
              />
              <RoundedButtonComponent
                clickHandler={() => navigation.navigate("SettingsScreen")}
                iconName={"cog"}
                size={48}
                iconSize={28}
                isTransparent={true}
                colorIsTextColor={true}
              />
            </Fragment>
          ),
        }}
      >
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            title: "Search",
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
