import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import Typography from "../constants/Typography.js";
import Colors from "../constants/Colors";
import Theme from "../constants/Theme";

import ProviderItem from "../components/ProviderItem.js";

/* @ Alex: Was brauchst du zum filtern? Nur die aktiven Provider oder kannst du mit der ganzen Liste arbeiten? */
export default ProviderSettingsScreen = ({ navigation }) => {
  //TODO: Rename this in every Component! theme --> storedTheme
  //Get States from Async Storage
  const storedTheme = useSelector((state) => state.theme);
  const storedProvider = useSelector((state) => state.provider);
  const dispatch = useDispatch();

  const toggleSwitch = (index) => {
    //toggle value of selected provider
    const tempProviderList = [...storedProvider.provider];
    tempProviderList[index].value = !tempProviderList[index].value;

    dispatch({
      type: "SET_PROVIDER",
      payload: tempProviderList,
    });
  };

  return (
    <View
      style={
        storedTheme.mode == "light"
          ? Theme.container_light
          : Theme.container_dark
      }
    >
      <Text
        style={
          storedTheme.mode == "light"
            ? Typography.paragraph_light
            : Typography.paragraph_dark
        }
      >
        Wähle deine abonnierten Streamingdienste
      </Text>
      <Text
        style={
          storedTheme.mode == "light"
            ? Typography.paragraph_small_light
            : Typography.paragraph_small_dark
        }
      >
        Deine persönlichen Streamingdienste benötigen wir, um dir die perfekten
        Ergebnisse liefern zu können.
      </Text>

      <FlatList
        data={storedProvider.provider}
        renderItem={({ item }) => (
          <ProviderItem
            providerLabel={item.label}
            providerValue={item.value}
            providerId={item.id}
            toggleSwitch={toggleSwitch}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
