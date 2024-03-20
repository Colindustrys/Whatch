//React
import React from "react";
import { View, Platform } from "react-native";
import { StyledSearchbar } from "../redux-store/StyledComponents";

let SearchBarComponent;
export default SearchBarComponent = ({ searchState, updateSearch }) => {
  const PlatformIsAndroid = Platform.OS === "android";

  return (
    <View>
      <StyledSearchbar
        platformIsAndroid={PlatformIsAndroid}
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={searchState}
      />
    </View>
  );
};
