//React
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DarkTheme, LightTheme } from "@react-navigation/native";

//Navigation
import HomeBottomTabNavigator from "./HomeBottomTabNavigator";

//Screens
import SettingsScreen from "../screens/SettingsScreen";
import WatchlistScreen from "../screens/WatchlistScreen";
import ProviderSettingsScreen from "../screens/ProviderSettingsScreen";
import ThemeSettingsScreen from "../screens/ThemeSettingsScreen";
import SeenlistScreen from "../screens/SeenlistScreen";
import CreditsSettingsScreen from "../screens/CreditsScreen.js";

//Components
import { StyledStackNavigator } from "../redux-store/StyledComponents.js";

export default MainStackNavigator = ({ isLightMode }) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer theme={isLightMode ? LightTheme : DarkTheme}>
      <StyledStackNavigator initialRouteName="Home">
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="HomeBottomTabNavigator"
            component={HomeBottomTabNavigator}
            options={{
              title: "Home",
            }}
          />
        </Stack.Group>

        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            title: "Settings",
          }}
        />
        <Stack.Screen
          name="WatchlistScreen"
          component={WatchlistScreen}
          options={{
            title: "Watchlist",
          }}
        />
        <Stack.Screen
          name="ProviderSettingsScreen"
          component={ProviderSettingsScreen}
          options={{
            title: "Streaming Services",
          }}
          screenOptions={{
            //hide the very thin line under the header
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="ThemeSettingsScreen"
          component={ThemeSettingsScreen}
          options={{
            title: "Theme Settings",
          }}
        />
        <Stack.Screen
          name="CreditsSettingsScreen"
          component={CreditsSettingsScreen}
          options={{
            title: "Credits",
          }}
        />
        <Stack.Screen
          name="SeenlistScreen"
          component={SeenlistScreen}
          options={{
            title: "Seen List",
          }}
        />
        <Stack.Screen
          name="MovieDetailsListScreen"
          component={MovieDetailListScreen}
          options={{
            title: "Movie",
          }}
        />
      </StyledStackNavigator>
    </NavigationContainer>
  );
};
