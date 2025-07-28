//React
import React, { useState, useEffect } from "react";
import { View, Platform } from "react-native";
import { StyledSearchbar } from "../redux-store/StyledComponents";

let SearchBarComponent;
export default SearchBarComponent = ({ searchState, updateSearch }) => {
  const PlatformIsAndroid = Platform.OS === "android";

  return (
    <View>
      {PlatformIsAndroid ? (
        <View>
      <StyledSearchbar
        platformIsAndroid={PlatformIsAndroid}
        placeholder="Type Here..."
        onChangeText={updateSearch}
        // value={localSearch} // removed on android because it would always read the ceplaced value with talkback, but value is needed on ios
        accessibilityLabel="Searchbar"
        // aria-label="Searchbar"
      />
    </View>
      ) : (
        <View>
          <StyledSearchbar
            platformIsAndroid={PlatformIsAndroid}
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={searchState}
            accessibilityLabel="Searchbar"
            // aria-label="Searchbar"
          />
        </View>
      )}
    </View>
  );
};
