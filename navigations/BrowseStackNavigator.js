//React
import { Fragment } from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import BrowseScreen from "../screens/BrowseScreen";
import { StyledStackNavigator } from "../redux-store/StyledComponents";

import RoundedButtonComponent from "../components/RoundedButtonComponent";

const Stack = createNativeStackNavigator();

export default BrowseStackNavigator = ({ navigation }) => {
  return (
    <StyledStackNavigator accessible={false}>
      <Stack.Group
        accessible={false}
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
                style={{ marginRight: 12 }}
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
