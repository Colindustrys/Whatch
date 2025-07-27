//React
import { React, Fragment } from "react";
import { View } from "react-native";
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
                accessible={false}
                accessibilityLabel={"Go to watchlist"}
                clickHandler={() => navigation.navigate("WatchlistScreen")}
                iconName={"heart"}
                size={48}
                iconSize={26}
                isTransparent={true}
                colorIsTextColor={true}
              />
              <View
                style={{ width: 8, height: 1, backgroundColor: "transparent" }} // 12dp spacer
              />
              <RoundedButtonComponent
                accessible={false}
                accessibilityLabel={"Go to settings"}
                clickHandler={() => navigation.navigate("SettingsScreen")}
                iconName={"cog"}
                size={48}
                iconSize={26}
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
