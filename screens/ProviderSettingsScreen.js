import React, { useState, useEffect } from "react";
import { View, Text, Switch, FlatList } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import Typography from "../constants/Typography.js";
import Colors from "../constants/Colors";
import Theme from "../constants/Theme";

export default ProviderSettingsScreen = ({ navigation }) => {
  //TODO: Rename this in every Component! theme --> storedTheme
  //Get States from Async Storage
  const storedTheme = useSelector((state) => state.theme);
  const storedProvider = useSelector((state) => state.provider);
  const dispatch = useDispatch();

  const toggleSwitch = (index) => {
    //overwrite providerList in store with new providerlist --> is there a better way?!
    dispatch({
      type: "SET_PROVIDER",
      payload: providerList,
    });

    //toggle value of selected provider
    const tempProviderList = [...providerList];
    tempProviderList[index].value = !tempProviderList[index].value;
    setProviderList(tempProviderList);
  };

  //TODO:  get most used provider and save as model?! --> What does API needs to filter movies?
  let [providerList, setProviderList] = useState([
    { label: "Netflix", id: 0, value: false },
    { label: "Amazon Prime", id: 1, value: false },
    { label: "Disney Plus", id: 2, value: false },
    { label: "Netflix", id: 3, value: false },
    { label: "Amazon Prime", id: 4, value: false },
    { label: "Disney Plus", id: 5, value: false },
    { label: "Netflix", id: 6, value: false },
    { label: "Amazon Prime", id: 7, value: false },
    { label: "Disney Plus", id: 8, value: false },
    { label: "Amazon Prime", id: 9, value: false },
    { label: "Disney Plus", id: 10, value: false },
    { label: "Netflix", id: 11, value: false },
    { label: "Amazon Prime", id: 12, value: false },
    { label: "Disney Pllllus", id: 13, value: false },
  ]);

  //OnPageLoad --> Set Providerlist with Async State if its not empty
  useEffect(() => {
    if (storedProvider.provider.length > 0) {
      setProviderList(storedProvider.provider);
      console.log(providerList);
    }
  }, []);

  //TODO: Make own component
  //TODO: Make Own Stylesheet? --> Need adjustments
  const ProviderItem = ({ providerLabel, providerValue, providerId }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Switch
        trackColor={{
          false: storedTheme.mode == "light" ? Colors.black : Colors.white,
          true: storedTheme.mode == "light" ? Colors.black : Colors.white,
        }}
        thumbColor={providerValue ? Colors.accent : Colors.complement}
        ios_backgroundColor={
          storedTheme.mode == "light" ? Colors.black : Colors.white
        }
        onValueChange={() => toggleSwitch(providerId)}
        value={providerValue}
      />

      <Text
        style={
          storedTheme.mode == "light"
            ? Typography.paragraph_small_light
            : Typography.paragraph_small_dark
        }
      >
        {providerLabel}
      </Text>
    </View>
  );

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
        /* TODO: FlatList not rendering all the items?! */
        data={providerList}
        renderItem={({ item }) => (
          <ProviderItem
            providerLabel={item.label}
            providerValue={item.value}
            providerId={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
