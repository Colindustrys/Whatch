//React
import { Fragment } from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import RandomScreen from "../screens/RandomScreen";
import MovieDetailListScreen from "../screens/MovieDetailListScreen";
import { StyledStackNavigator } from "../redux-store/StyledComponents";
import RoundedButtonComponent from "../components/RoundedButtonComponent";

export default RandomStackNavigator = ({ navigation, isLightMode }) => {
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
          name="RandomScreen"
          component={RandomScreen}
          options={{
            title: "Random",
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
