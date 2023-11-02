//React
import React, {useState} from "react";
import { View, Text } from "react-native";
import { SearchBar } from "@rneui/themed";

export default SearchResults = ({ movieList }) => {

  return (
    <View>
      <FlatList
            data={movieList}
            keyExtractor={(index) => index}
            renderItem={({ item, index }) => (
              
            )}
          />
    </View>
  );
};
