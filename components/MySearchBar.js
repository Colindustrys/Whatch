//React
import React, {useState} from "react";
import { View, Text } from "react-native";
import { SearchBar } from "@rneui/themed";

export default MySearchBar = ({ searchState, updateSearch }) => {

  

  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={searchState}
      />
    </View>
  );
};
